import Header from '../../components/Header';
import Footer from '../../components/Footer';

function CampanhaAedes() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 mt-10">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Campanha de Combate ao Aedes aegypti</h1>
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-4">Previna doenças, escolha o futuro.</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            O Aedes aegypti é o mosquito transmissor de doenças como dengue, zika e chikungunya. 
            A prevenção é a melhor forma de combater essas doenças, eliminando locais onde o mosquito pode se reproduzir.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Elimine água parada.</li>
            <li>Mantenha caixas água fechadas.</li>
            <li>Limpe ralos e calhas regularmente.</li>
            <li>Utilize telas nas janelas e portas.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Participe desta campanha e ajude a proteger sua comunidade contra o Aedes aegypti. Para mais informações, acesse nossos materiais informativos e fique atento às ações de combate.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CampanhaAedes;
