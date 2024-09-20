import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Consultas from '../Consulta';

function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="flex flex-col items-center mt-8 px-4 md:px-8 lg:px-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-8 text-center">
                    Saúde Conectada
                </h1>

                {/* Imagem com Opções */}
                <section className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-lg mb-10">
                    <div className="flex flex-col w-full md:w-1/2 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-blue-100 rounded-lg shadow-md p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-700 mb-4">Campanhas</h3>
                                <p className="text-gray-600 mb-4">
                                    Combate ao Aedes aegypti
                                    <br />
                                    Previna doenças, escolha o futuro.
                                </p>
                                <a href="/campanhas" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
                                    Acessar Campanhas
                                </a>
                            </div>
                            <div className="bg-blue-100 rounded-lg shadow-md p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-700 mb-4">Agendar Consulta</h3>
                                <p className="text-gray-600 mb-4">
                                    Médicos, Fisioterapeutas, Fonoaudiólogos, Nutricionistas e Psicólogos
                                </p>
                                <a href="/consultas" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
                                    Agendar Consulta
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seção Sobre a Saúde Conectada com Imagem ao Lado */}
                <section className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-lg mb-10">
                    <img
                        src="/medico.png" // Substitua pelo nome do arquivo real
                        alt="Médico Saúde Conectada"
                        className="w-full md:w-1/3 mb-6 md:mb-0 md:mr-6"
                    />
                    <div className="w-full md:w-2/3">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4">
                            Sobre a Saúde Conectada
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            A Saúde Conectada foi criada para resolver a dificuldade de acesso a informações básicas de saúde e serviços médicos. 
                            Sabemos que a falta de recursos e o tempo limitado podem dificultar o acompanhamento médico. Nossa plataforma digital 
                            centraliza agendamentos, acompanhamento de sinais vitais e informações sobre campanhas de saúde, eliminando a necessidade 
                            de deslocamentos.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Com a Saúde Conectada, você tem um controle mais eficiente da sua saúde, facilitando a vida dos pacientes e profissionais.
                        </p>
                    </div>
                </section>

                {/* Seção Precisa de ajuda */}
                <section className="bg-blue-100 p-6 rounded-lg shadow-lg w-full max-w-5xl mb-10 text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">
                        Precisa de ajuda para agendar sua consulta?
                    </h2>
                    <p className="text-blue-600 font-semibold mb-2">
                        <a href="#" className="underline hover:text-blue-800">
                            Entre em contato conosco
                        </a>
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 text-blue-700">
                        <div className="flex items-center">
                            <i className="fas fa-phone-alt text-xl mr-2"></i>
                            <span>(12) 3345-6789</span>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-envelope text-xl mr-2"></i>
                            <a href="mailto:saude@conectada.com.br" className="underline hover:text-blue-800">
                                saude@conectada.com.br
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Home;
