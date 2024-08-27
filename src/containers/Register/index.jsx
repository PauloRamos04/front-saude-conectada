import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        cpf: "",
        email: "",
        phone: "",
        address: "",
        gender: "",
        birthDate: "",
        deficiency: null,
        photo: null,
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/patient/register", formData);
            console.log('Registro bem-sucedido:', response.data);
            navigate("/login");
        } catch (error) {
            console.error('Erro ao registrar:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <header className="bg-white shadow w-full py-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Saúde Conectada</h1>
                </div>
            </header>
            <main className="flex flex-col items-center mt-10">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Registrar</h2>
                <form className="bg-white p-6 rounded-lg shadow-md w-96" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Seu nome"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                            Sobrenome
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Seu sobrenome"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cpf">
                            CPF
                        </label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            value={formData.cpf}
                            onChange={handleChange}
                            placeholder="CPF"
                            pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Seu e-mail"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Telefone
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Telefone"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                            Endereço
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Endereço"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                            Gênero
                        </label>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                            required
                        >
                            <option value="MALE">Masculino</option>
                            <option value="FEMALE">Feminino</option>
                            <option value="OTHER">Outro</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthDate">
                            Data de Nascimento
                        </label>
                        <input
                            type="date"
                            id="birthDate"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Sua senha"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-700"
                    >
                        Registrar
                    </button>
                </form>
            </main>
            <footer className="mt-10 text-gray-500">
                <p>© 2024 Saúde Conectada. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default Register;
