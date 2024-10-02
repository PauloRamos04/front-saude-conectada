import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Importando o CSS do Toastify
import Header from '../../components/Header';

const notify = (type, message) => {
    if (type === 'success') {
        toast.success(message, {
            position: "top-right", // Alterado para string
            autoClose: 3000, // Tempo em milissegundos para auto fechar
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    } else {
        toast.error(message, {
            position: "top-right", // Alterado para string
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
};

const Login = () => {
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
            const { token, message } = response.data; // Captura o token e a mensagem

            // Armazena o token no localStorage
            localStorage.setItem('token', token);

            navigate("/");
            // Mostra a notificação de sucesso
            setTimeout(() => {
                notify('success', message || 'Login realizado com sucesso!');
                 // Redireciona para a página inicial
            }, 3000);
        } catch (error) {
            let errorMessage = 'Falha na autenticação'; // Mensagem padrão

            if (error.response) {
                // Captura a mensagem de erro personalizada retornada pela API
                if (error.response.data && error.response.data.message) {
                    errorMessage = error.response.data.message;
                } else if (error.response.status === 409) {
                    errorMessage = 'Usuário já está logado.'; // Tratamento específico para erro 409
                } else if (error.message.includes('BadCredentialsException')) {
                    errorMessage = 'Usuário inexistente ou senha inválida.';
                }
                console.error('Erro da API:', error.response.data);
            } else {
                notify('error', "Erro: Não foi possível conectar ao servidor."); // Notificação de erro genérica
            }
            notify('error', errorMessage); // Chama a função de notificação com a mensagem apropriada
        }
    };

    return (
        <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100">
            <Header />
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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default Login;
