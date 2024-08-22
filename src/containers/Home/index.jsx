import React from 'react';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <header className="bg-white shadow w-full py-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Saúde Conectada</h1>
                </div>
            </header>
            <main className="flex flex-col items-center mt-10">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Bem-vindo ao Saúde Conectada</h2>
                <p className="text-center text-gray-600 mb-8 max-w-md">
                    O Saúde Conectada é uma plataforma inovadora que facilita o acesso a serviços de saúde,
                    permitindo que você se conecte facilmente com profissionais e gerencie suas informações de saúde.
                </p>
                <div className="flex space-x-4">
                    <a
                        href="/login"
                        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
                    >
                        Fazer Login
                    </a>
                    <a
                        href="/register"
                        className="px-6 py-2 border border-blue-600 text-blue-600 font-semibold rounded-lg shadow hover:bg-blue-600 hover:text-white transition duration-300"
                    >
                        Registrar
                    </a>
                </div>
            </main>
            <footer className="mt-10 text-gray-500">
                <p>© 2024 Saúde Conectada. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default Home;
