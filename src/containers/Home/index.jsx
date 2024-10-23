import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleScheduleClick = () => {
        const isLoggedIn = localStorage.getItem('token'); // Verifica se o usuário está autenticado
        if (!isLoggedIn) {
            navigate('/login'); // Redireciona para a página de login se não estiver autenticado
        } else {
            navigate('/consultas'); // Se estiver logado, redireciona para a página de consultas
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="flex flex-col items-center mt-8 px-4 md:px-8 lg:px-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-8 text-center">
                    Saúde Conectada
                </h1>

                {/* Seção de Agendar Consulta */}
                <section className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg mb-10 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Agende Sua Consulta</h2>
                    <p className="text-gray-600 mb-6">
                        Faça o agendamento com médicos, fisioterapeutas, fonoaudiólogos, nutricionistas e psicólogos.
                    </p>
                    <button 
                        onClick={handleScheduleClick} 
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Marcar Consulta
                    </button>
                </section>

                {/* Seção de Campanhas */}
                <section className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg mb-10 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Campanhas</h2>
                    <p className="text-gray-600 mb-6">
                        Combate ao Aedes aegypti e outras campanhas de saúde. Previna doenças, escolha o futuro.
                    </p>
                    <a 
                        href="/campanhas" 
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Acessar Campanhas
                    </a>
                </section>

                {/* Seção Sobre a Saúde Conectada */}
                <section className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-lg mb-10">
                    <img
                        src="/medico.png" 
                        alt="Médico Saúde Conectada"
                        className="w-full md:w-1/3 mb-6 md:mb-0 md:mr-6"
                    />
                    <div className="w-full md:w-2/3">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4">
                            Sobre a Saúde Conectada
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            A Saúde Conectada foi criada para resolver a dificuldade de acesso a informações básicas de saúde e serviços médicos.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Com a Saúde Conectada, você tem um controle mais eficiente da sua saúde, facilitando a vida dos pacientes e profissionais.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Home;
