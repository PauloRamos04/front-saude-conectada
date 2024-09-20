import React, { useState } from 'react';
import Login from '../../containers/Login';
import Register from '../../containers/Register';

export default function Header() {
    const [showInstitucional, setShowInstitucional] = useState(false);
    const [showDuvidas, setShowDuvidas] = useState(false);

    return (
        <header className="bg-blue-500 shadow w-full py-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <a className="text-3xl font-bold text-white" href="/">
                    Saúde <span className="text-green-400">Conectada</span>
                </a>

                {/* Navigation Links */}
                <nav className="flex space-x-6 items-center">
                    <a href="/sinais-vitais" className="hover:text-gray-300">Sinais Vitais</a>

                    {/* Dropdown Institucional */}
                    <div className="relative">
                        <a 
                            href="#" 
                            className="hover:text-gray-300 flex items-center"
                            onClick={(e) => {
                                e.preventDefault();
                                setShowInstitucional(!showInstitucional);
                            }}
                        >
                            Institucional <i className="fas fa-caret-down ml-1"></i>
                        </a>
                        {/* Dropdown */}
                        {showInstitucional && (
                            <div className="absolute left-0 bg-white text-black mt-2 rounded-lg shadow-md z-10 transition-all duration-300 ease-in-out transform opacity-100">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Submenu 1</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Submenu 2</a>
                            </div>
                        )}
                    </div>

                    {/* Dropdown Dúvidas */}
                    <div className="relative">
                        <a 
                            href="#" 
                            className="hover:text-gray-300 flex items-center"
                            onClick={(e) => {
                                e.preventDefault();
                                setShowDuvidas(!showDuvidas);
                            }}
                        >
                            Dúvidas <i className="fas fa-caret-down ml-1"></i>
                        </a>
                        {/* Dropdown */}
                        {showDuvidas && (
                            <div className="absolute left-0 bg-white text-black mt-2 rounded-lg shadow-md z-10 transition-all duration-300 ease-in-out transform opacity-100">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-200">FAQ Médicos</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-200">FAQ Pacientes</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-200">FAQ Vacinas</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-200">FAQ Campanha</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-200">FAQ Contato</a>
                            </div>
                        )}
                    </div>

                    <a href="/contato" className="hover:text-gray-300">Contato</a>
                    <a href="/consultas" className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600">Minhas Consultas</a>
                </nav>

                {/* Authentication Links */}
                <div className="flex space-x-4 items-center">
                    <a href="/register" className="hover:text-gray-300">Cadastrar</a>
                    <a href="/login" className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600">Entrar</a>
                </div>
            </div>

            {/* Arrow Down to Indicate More Content */}
            <div className="flex justify-center mt-2 animate-bounce">
                <i className="fas fa-chevron-down text-xl text-gray-300"></i>
            </div>
        </header>
    );
}
