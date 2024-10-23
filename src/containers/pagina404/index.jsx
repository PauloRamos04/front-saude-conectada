import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Page404() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 mt-10 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-blue-700 mb-6">404</h1>
        <p className="text-gray-700 text-xl mb-4">Ops! Página não encontrada.</p>
        <p className="text-gray-600 mb-6">Esta página está em andamento, por favor, volte mais tarde.</p>
        <a href="/" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Voltar para a página inicial
        </a>
      </main>
      <Footer />
    </div>
  );
}

export default Page404;
