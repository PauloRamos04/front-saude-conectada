import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Register() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        cpf: "",
        email: "",
        phone: "",
        street: "",
        number: "",
        neighborhood: "",
        city: "",
        state: "",
        zipCode: "",
        birthDate: "",
        deficiency: "",
        gender: "",
        password: "",
        confirmPassword: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        setStep(step + 1);
    };

    const handlePrevStep = (e) => {
        e.preventDefault();
        setStep(step - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }

        // Formata o endereço como uma string única
        const address = `${formData.street}, ${formData.number}, ${formData.neighborhood}, ${formData.city}, ${formData.state}, ${formData.zipCode}`;
        
        // Se a deficiência não for selecionada, pode passar um valor padrão
        const dataToSend = { 
            ...formData, 
            address, 
            deficiency: formData.deficiency || "NENHUMA" // Usar "NENHUMA" se não houver deficiência
        };

        try {
            const response = await axios.post("http://localhost:8080/api/patient/register", dataToSend);
            console.log('Registro bem-sucedido:', response.data);
            navigate("/login");
        } catch (error) {
            console.error('Erro ao registrar:', error.response ? error.response.data : error.message);
        }
    };

    const renderStepIndicator = () => {
        return (
            <div className="flex justify-center mb-6">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-4 ${step >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'}`}>3</div>
            </div>
        );
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />

            <main className="flex-grow flex flex-col items-center mt-10">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Registrar</h2>
                {renderStepIndicator()}
                <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
                    {step === 1 && (
                        <>
                            <h3 className="text-xl font-semibold mb-4">Informações Pessoais</h3>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">Nome</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="lastName">Sobrenome</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="cpf">CPF</label>
                                <input
                                    type="text"
                                    id="cpf"
                                    name="cpf"
                                    value={formData.cpf}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="birthDate">Data de Nascimento</label>
                                <input
                                    type="date"
                                    id="birthDate"
                                    name="birthDate"
                                    value={formData.birthDate}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="birthDate">Telefone</label>
                                <input
                                    type="phone"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="birthDate">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="gender">Gênero</label>
                                <select
                                    id="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                    required
                                >
                                    <option value="" disabled>Selecione o gênero</option>
                                    <option value="MASCULINO">Masculino</option>
                                    <option value="FEMININO">Feminino</option>
                                    <option value="OUTRO">Outro</option>
                                </select>
                            </div>
                            <button onClick={handleNextStep} className="bg-blue-600 text-white py-2 px-4 rounded">Próximo</button>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <h3 className="text-xl font-semibold mb-4">Endereço</h3>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="street">Rua</label>
                                <input
                                    type="text"
                                    id="street"
                                    name="street"
                                    value={formData.street}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="number">Número</label>
                                <input
                                    type="text"
                                    id="number"
                                    name="number"
                                    value={formData.number}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="neighborhood">Bairro</label>
                                <input
                                    type="text"
                                    id="neighborhood"
                                    name="neighborhood"
                                    value={formData.neighborhood}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="city">Cidade</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="state">Estado</label>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="zipCode">CEP</label>
                                <input
                                    type="text"
                                    id="zipCode"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                    required
                                />
                            </div>
                            <button onClick={handlePrevStep} className="mr-2 bg-gray-400 text-white py-2 px-4 rounded">Anterior</button>
                            <button onClick={handleNextStep} className="bg-blue-600 text-white py-2 px-4 rounded">Próximo</button>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <h3 className="text-xl font-semibold mb-4">Criação de Senha</h3>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="password">Senha</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="confirmPassword">Confirmar Senha</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="deficiency">Deficiência</label>
                                <select
                                    id="deficiency"
                                    name="deficiency"
                                    value={formData.deficiency}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                >
                                    <option value="" disabled>Selecione a deficiência</option>
                                    <option value="NENHUMA">Nenhuma</option>
                                    <option value="FÍSICA">Física</option>
                                    <option value="AUDITIVA">Auditiva</option>
                                    <option value="VISUAL">Visual</option>
                                    <option value="INTELECTUAL">Intelectual</option>
                                </select>
                            </div>
                            <button onClick={handlePrevStep} className="mr-2 bg-gray-400 text-white py-2 px-4 rounded">Anterior</button>
                            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Registrar</button>
                        </>
                    )}
                </form>
            </main>

            <Footer />
        </div>
    );
}

export default Register;
