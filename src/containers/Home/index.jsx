import React from 'react';
import Header from '../../components';

function Home() {
    return (
        <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100">
            <Header></Header>
            <main className="flex flex-col items-center mt-10">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Bem-vindo ao Saúde Conectada</h2>
                <p className="text-center text-gray-600 mb-8 max-w-md">
                    O Saúde Conectada é uma plataforma inovadora que facilita o acesso a serviços de saúde,
                    permitindo que você se conecte facilmente com profissionais e gerencie suas informações de saúde.
                </p>

            </main>
            <footer className="mt-10 text-gray-500">
                <p>© 2024 Saúde Conectada. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default Home;
