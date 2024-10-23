import { useState, useEffect } from 'react';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [userCPF, setUserCPF] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if (token) {
            try {
                const decodedToken = JSON.parse(atob(token.split('.')[1]));
                
                setUserName(decodedToken.firstName); 
                setUserCPF(decodedToken.cpf);
    
                setIsLoggedIn(true);
    
            } catch (error) {
                console.error("Erro ao decodificar o token:", error);
            }
        }
    }, []);
    

    const handleLogout = () => {
        console.log("Logout iniciado para CPF:", userCPF);
        fetch('http://localhost:8080/api/patient/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cpf: userCPF }),
        })
        .then(response => {
            if (response.ok) {
                localStorage.removeItem('token');
                setIsLoggedIn(false);
                setUserName('');
                setUserCPF('');
                console.log("Logout bem-sucedido. Nome e CPF após logout:", userCPF, userName);
            } else {
                console.error('Erro ao fazer logout');
            }
        })
        .catch(error => console.error('Erro na requisição de logout:', error));
    };

    return (
        <header className="bg-blue-500 shadow w-full py-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <a className="text-3xl font-bold text-white" href="/">
                    Saúde <span className="text-green-400">Conectada</span>
                </a>

                {/* Navigation Links */}
                <nav className="flex space-x-6 items-center">
                    <a href="/unidades" className="hover:text-gray-300">Unidades</a>

                    <a href="/trabalhe-conosco" className="hover:text-gray-300">Trabalhe Conosco</a>

                    {isLoggedIn && (
                        <a href="/consultas" className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600">Minhas Consultas</a>
                    )}
                </nav>

                {/* Authentication Links */}
                <div className="flex space-x-4 items-center relative">
                    {isLoggedIn ? (
                        <div className="relative">
                            <div
                                className="flex items-center cursor-pointer"
                                onClick={() => setShowUserMenu(!showUserMenu)}
                            >
                                {/* Ícone de foto e Nome do usuário */}
                                <img src="/path-to-avatar.jpg" alt="" className="w-8 h-8 rounded-full mr-2" />
                                <span>{userName}</span>
                                <i className="fas fa-caret-down ml-2"></i>
                            </div>
                            
                            {/* Bandeja de opções */}
                            {showUserMenu && (
                                <div className="absolute right-0 bg-white text-black mt-2 rounded-lg shadow-md z-10 w-48">
                                    <button 
                                        onClick={handleLogout} 
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <a href="/register" className="hover:text-gray-300">Cadastrar</a>
                            <a href="/login" className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600">Entrar</a>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
