import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function TrabalheConosco() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Exibe a notificação após o envio
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Conteúdo Principal */}
      <main className="flex-grow container mx-auto px-4 mt-10">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Trabalhe Conosco</h1>
        <p className="text-gray-700 mb-6">
          Estamos em busca de profissionais apaixonados e dedicados para integrar nossa equipe. Preencha o formulário abaixo e envie seu currículo.
        </p>

        {/* Exibe a mensagem de "enviado" se o formulário for submetido */}
        {submitted && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6">
            <p>Formulário enviado com sucesso!</p>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome:</label>
            <input type="text" id="nome" name="nome" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail:</label>
            <input type="email" id="email" name="email" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="CRM" className="block text-sm font-medium text-gray-700">Anexe sua CRM:</label>
            <input type="file" id="CRM" name="CRM" accept=".pdf,.doc,.docx" required className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200" />
          </div>
          <div>
            <label htmlFor="curriculo" className="block text-sm font-medium text-gray-700">Anexe seu currículo:</label>
            <input type="file" id="curriculo" name="curriculo" accept=".pdf,.doc,.docx" required className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200" />
          </div>
          <p className="text-sm text-gray-600">
            • Iremos analisar seu Currículo <br />
            • Entraremos em contato via e-mail.<br />
            • Faremos uma videochamada caso você se encaixe na vaga.<br />
            • Qualquer dúvida entre em contato conosco.
          </p>
          <div className="flex space-x-4">
            <button type="button" onClick={() => window.history.back()} className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300">
              Voltar
            </button>
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Enviar
            </button>
          </div>
        </form>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default TrabalheConosco;
