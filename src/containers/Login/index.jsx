import React from 'react';

function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <header className="bg-white shadow w-full py-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Saúde Conectada</h1>
                </div>
            </header>
            <main className="flex flex-col items-center mt-10">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Fazer Login</h2>
                <form className="bg-white p-6 rounded-lg shadow-md w-96">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Seu e-mail"
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
                            placeholder="Sua senha"
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
