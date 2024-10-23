import Header from '../../components/Header';
import Footer from '../../components/Footer';

function UnidadesProximas() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 mt-10">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Unidades Próximas de Atendimento</h1>
        <p className="text-gray-700 mb-6">Encontre as unidades de saúde mais próximas de você para um atendimento rápido e eficiente.</p>

        <section className="space-y-6">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Unidade Central</h3>
            <p className="text-gray-600 mb-4">Rua da Saúde, 123 - Centro</p>
            <a href="https://maps.google.com" className="text-blue-600 underline hover:text-blue-800">Ver no mapa</a>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Unidade Zona Norte</h3>
            <p className="text-gray-600 mb-4">Av. dos Médicos, 456 - Zona Norte</p>
            <a href="https://maps.google.com" className="text-blue-600 underline hover:text-blue-800">Ver no mapa</a>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Unidade Zona Sul</h3>
            <p className="text-gray-600 mb-4">Rua das Clínicas, 789 - Zona Sul</p>
            <a href="https://maps.google.com" className="text-blue-600 underline hover:text-blue-800">Ver no mapa</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default UnidadesProximas;
