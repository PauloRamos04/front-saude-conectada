import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function AgendarConsulta() {
    const [especialidade, setEspecialidade] = useState('');
    const [unidade, setUnidade] = useState('');
    const [data, setData] = useState('');
    const [horario, setHorario] = useState('');
    const [especialidades, setEspecialidades] = useState([]);
    const [unidades, setUnidades] = useState([]);
    const [datasDisponiveis, setDatasDisponiveis] = useState([]);
    const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);
    const [error, setError] = useState('');

    const navigate = useNavigate(); // Hook para navegação

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            // Redireciona para o login se o token não for encontrado
            navigate('/login');
            return;
        }

        const fetchData = async () => {
            try {
                const resEspecialidades = await fetch('http://localhost:8081/api/especialidades');
                const especialidadesData = await resEspecialidades.json();
                setEspecialidades(especialidadesData);

                const resUnidades = await fetch('http://localhost:8081/api/unidades/disponiveis');
                const unidadesData = await resUnidades.json();
                setUnidades(unidadesData);
            } catch (err) {
                console.error('Erro ao buscar especialidades ou unidades:', err);
                setError('Erro ao carregar especialidades ou unidades.');
            }
        };

        fetchData();
    }, [navigate]);

    const handleEspecialidadeChange = (e) => {
        setEspecialidade(e.target.value);
        resetFields();
    };

    const handleUnidadeChange = async (e) => {
        setUnidade(e.target.value);
        resetFields();

        if (especialidade && e.target.value) {
            await fetchDatasDisponiveis(especialidade, e.target.value);
        }
    };

    const handleDataChange = async (e) => {
        setData(e.target.value);
        setHorario('');
        setHorariosDisponiveis([]);

        if (especialidade && unidade) {
            await fetchHorariosDisponiveis(especialidade, unidade, e.target.value);
        }
    };

    const resetFields = () => {
        setData('');
        setHorario('');
        setHorariosDisponiveis([]);
        setError('');
    };

    const fetchDatasDisponiveis = async (especialidade, unidade) => {
        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`http://localhost:8081/api/datas-disponiveis?especialidade=${especialidade}&unidade=${unidade}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });

            if (!res.ok) {
                handleFetchError(res);
            }

            const data = await res.json();
            if (Array.isArray(data) && data.length === 0) {
                setError('Não há datas disponíveis para esta especialidade e unidade.');
                setDatasDisponiveis([]);
            } else {
                setDatasDisponiveis(data.map(item => item.data));
                setError('');
            }
        } catch (err) {
            console.error('Erro ao buscar datas disponíveis:', err);
            setError('Erro ao buscar datas disponíveis. Tente novamente mais tarde.');
        }
    };

    const fetchHorariosDisponiveis = async (especialidade, unidade, data) => {
        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`http://localhost:8081/api/datas-disponiveis?especialidade=${especialidade}&unidade=${unidade}&data=${data}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });

            if (!res.ok) {
                handleFetchError(res);
            }

            const horarioData = await res.json();

            if (Array.isArray(horarioData) && horarioData.length === 0) {
                setError('Não há horários disponíveis para esta especialidade e unidade.');
                setHorariosDisponiveis([]);
            } else {
                setHorariosDisponiveis(horarioData.map(item => item.horario));
                setError('');
            }
        } catch (err) {
            console.error('Erro ao buscar horários disponíveis:', err);
            setError('Erro ao buscar horários disponíveis. Tente novamente mais tarde.');
        }
    };

    const handleFetchError = (res) => {
        if (res.status === 403) {
            setError('Acesso negado. Verifique suas permissões.');
        } else {
            throw new Error('Erro ao buscar dados.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!especialidade || !unidade || !data || !horario) {
            setError('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        const token = localStorage.getItem('token');
        const patientCpf = extractCpfFromToken(token);

        if (!patientCpf) {
            setError('CPF não encontrado no token.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8081/api/agendamentos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'X-Patient-Cpf': patientCpf,
                },
                body: JSON.stringify({
                    appointmentDate: `${data}T${horario}`,
                    especialidade,
                    unidade,
                    description: `Consulta de ${especialidade} na unidade ${unidade} às ${horario}`,
                    status: 'PENDING',
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Erro ao agendar a consulta');
            }

            const appointmentData = await response.json();
            alert(`Consulta agendada com sucesso! ID: ${appointmentData.id}`);
            resetForm();
        } catch (error) {
            console.error('Erro ao agendar a consulta:', error);
            setError('Houve um erro ao tentar agendar a consulta. Por favor, tente novamente.');
        }
    };

    const extractCpfFromToken = (token) => {
        if (!token) return null;
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.cpf; // Supondo que o CPF esteja no payload do token
    };

    const resetForm = () => {
        setEspecialidade('');
        setUnidade('');
        setData('');
        setHorario('');
        setDatasDisponiveis([]);
        setHorariosDisponiveis([]);
        setError('');
    };

    return (
        <>
            <Header />
            <div className="container mx-auto mt-5">
                <h2 className="text-2xl font-semibold">Agendar Consulta</h2>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <label htmlFor="especialidade" className="block text-sm font-medium text-gray-700">Especialidade</label>
                        <select
                            id="especialidade"
                            value={especialidade}
                            onChange={handleEspecialidadeChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        >
                            <option value="">Selecione uma especialidade</option>
                            {especialidades.map((especialidade) => (
                                <option key={especialidade.id} value={especialidade.nome}>
                                    {especialidade.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="unidade" className="block text-sm font-medium text-gray-700">Unidade</label>
                        <select
                            id="unidade"
                            value={unidade}
                            onChange={handleUnidadeChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        >
                            <option value="">Selecione uma unidade</option>
                            {unidades.map((unidade) => (
                                <option key={unidade.id} value={unidade.nome}>
                                    {unidade.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="data" className="block text-sm font-medium text-gray-700">Data</label>
                        <select
                            id="data"
                            value={data}
                            onChange={handleDataChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        >
                            <option value="">Selecione uma data</option>
                            {datasDisponiveis.map((data) => (
                                <option key={data} value={data}>
                                    {data}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="horario" className="block text-sm font-medium text-gray-700">Horário</label>
                        <select
                            id="horario"
                            value={horario}
                            onChange={(e) => setHorario(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        >
                            <option value="">Selecione um horário</option>
                            {horariosDisponiveis.map((horario) => (
                                <option key={horario} value={horario}>
                                    {horario}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md"
                    >
                        Agendar
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}
