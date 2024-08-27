import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../../components';

function Login() {
    const [credentials, setCredentials] = useState({
        cpf: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/patient/login", credentials);
            const { token, cpf, first_name } = response.data;
            localStorage.setItem('token', token);
            console.log(response.data);
            navigate("/");
        } catch (error) {
            if (error.response) {
                if (error.response.status === 403) {
                    console.error("Erro: Usuário não autorizado.");
                } else {
                    console.error("Erro na requisição:", error.response.data);
                }
            } else {
                console.error("Erro: Não foi possível conectar ao servidor.");
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100">
            <Header></Header>
            <main className="flex flex-col items-center mt-10">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Fazer Login</h2>
                <form
                    className="bg-white p-6 rounded-lg shadow-md w-96"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cpf">
                            CPF
                        </label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            placeholder="CPF"
                            value={credentials.cpf}
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
                            placeholder="Sua senha"
                            value={credentials.password}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>
            </main>
            <footer className="mt-10 text-gray-500">
                <p>© 2024 Saúde Conectada. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default Login;

