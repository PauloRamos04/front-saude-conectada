export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white w-full py-4">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between mb-6 space-y-4 md:space-y-0">
                    <div>
                        <h4 className="text-lg font-semibold">Informações</h4>
                        <ul className="mt-2 space-y-2">
                            <li><a href="#" className="hover:underline">Sobre Nós</a></li>
                            <li><a href="#" className="hover:underline">Serviços</a></li>
                            <li><a href="#" className="hover:underline">Equipe</a></li>
                            <li><a href="#" className="hover:underline">Carreiras</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Links Úteis</h4>
                        <ul className="mt-2 space-y-2">
                            <li><a href="#" className="hover:underline">FAQ</a></li>
                            <li><a href="#" className="hover:underline">Suporte</a></li>
                            <li><a href="#" className="hover:underline">Política de Privacidade</a></li>
                            <li><a href="#" className="hover:underline">Termos de Uso</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Contato</h4>
                        <p className="mt-2">Endereço: Rua Exemplo, 123 - Cidade, Estado</p>
                        <p>Email: contato@exemplo.com</p>
                        <p>Telefone: (11) 1234-5678</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Newsletter</h4>
                        <p className="mt-2">Inscreva-se para receber novidades.</p>
                        <form action="#" className="mt-2">
                            <input 
                                type="email" 
                                placeholder="Seu e-mail" 
                                className="p-2 rounded-lg border-2 border-white focus:outline-none"
                            />
                            <button className="bg-green-600 text-white px-4 py-2 rounded-lg mt-2">
                                Inscrever-se
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="#" className="hover:underline"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="hover:underline"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="hover:underline"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="hover:underline"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </footer>
    );
}
