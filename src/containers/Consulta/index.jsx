import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Consultas() {
    const [consultas, setConsultas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const extractCpfFromToken = (token) => {
        if (!token) return null;
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.cpf; // Ajuste se o CPF não estiver nesse campo
    };    

    useEffect(() => {
        const fetchConsultas = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:8081/api/agendamentos/paciente', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'X-Patient-Cpf': extractCpfFromToken(token), // Extraia o CPF do token
                    },
                });
    
                if (!response.ok) {
                    throw new Error('Erro ao buscar as consultas.');
                }
    
                const data = await response.json();
                setConsultas(data);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchConsultas();
    }, []);
    

    return (
        <>
            <Header />
            <div className="container mx-auto p-5">
                <div className="flex justify-between items-center py-5">
                    <h1 className="text-3xl font-bold text-gray-800">Consultas</h1>
                    <button 
                        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
                        onClick={() => window.location.href='/marcar-consulta'}
                    >
                        Marcar Consultas
                    </button>
                </div>
                <div className="content bg-white p-5 rounded-lg shadow-md">
                    <p className="text-gray-600">Confira a lista de consultas marcadas:</p>
                    <div className="flex items-center my-4">
                        <input 
                            type="text" 
                            placeholder="Filtrar" 
                            className="border rounded-lg px-3 py-2 mr-2"
                        />
                        <span className="text-gray-600">até</span>
                        <input 
                            type="text" 
                            placeholder="Filtrar" 
                            className="border rounded-lg px-3 py-2 mx-2"
                        />
                        <i className="fas fa-search text-gray-600 cursor-pointer"></i>
                    </div>
                    <div className="flex justify-between my-4">
                        {['Marcadas', 'Solicitadas', 'Realizadas', 'Recusadas', 'Canceladas', 'Todas as consultas'].map((status, index) => (
                            <div className="flex items-center" key={index}>
                                <input 
                                    type="radio" 
                                    name="status" 
                                    id={status.toLowerCase()} 
                                    className="mr-2"
                                />
                                <label htmlFor={status.toLowerCase()} className="text-gray-800">
                                    {status}
                                </label>
                            </div>
                        ))}
                    </div>

                    {/* Exibição das consultas */}
                    {loading && <p className="text-gray-600">Carregando consultas...</p>}
                    {error && <p className="text-red-600">{error}</p>}
                    {consultas.length > 0 ? (
                        <div className="mt-5">
                            {consultas.map((consulta) => (
                                <div key={consulta.id} className="p-3 border rounded-lg mb-2 shadow hover:shadow-lg transition">
                                    <p><strong>Especialidade:</strong> {consulta.especialidade}</p>
                                    <p><strong>Unidade:</strong> {consulta.unidade}</p>
                                    <p><strong>Data:</strong> {new Date(consulta.appointmentDate).toLocaleDateString('pt-BR')}</p>
                                    <p><strong>Hora:</strong> {new Date(consulta.appointmentDate).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</p>
                                    <p><strong>Status:</strong> {consulta.status}</p>
                                    <button 
                                        className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition"
                                        onClick={() => alert(`Detalhes da consulta ${consulta.id}`)} // Substitua por uma navegação para detalhes
                                    >
                                        Ver Detalhes
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center p-5 bg-gray-200 rounded-lg mt-5">
                            Nenhuma consulta encontrada ....
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
