import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MarcarConsulta from '../Marcar-Consulta';

export default function Consultas() {
    return (
        <>
            <Header />
            <div className="container mx-auto p-5">
                <div className="flex justify-between items-center py-5">
                    <h1 className="text-2xl text-gray-800">Consultas</h1>
                    <button 
                        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                        onClick={() => window.location.href='/marcar-consulta'}
                    >
                        Marcar Consultas
                    </button>
                </div>
                <div className="content bg-white p-5 rounded-lg shadow-md">
                    <p className="text-gray-600">Confira a lista de consultas marcadas:</p>
                    <div className="flex items-center my-4">
                        <input 
                            type="text" 
                            placeholder="Filtrar" 
                            className="border rounded-lg px-3 py-2 mr-2"
                        />
                        <span className="text-gray-600">até</span>
                        <input 
                            type="text" 
                            placeholder="Filtrar" 
                            className="border rounded-lg px-3 py-2 mx-2"
                        />
                        <i className="fas fa-search text-gray-600 cursor-pointer"></i>
                    </div>
                    <div className="flex justify-between my-4">
                        {['Marcadas', 'Solicitadas', 'Realizadas', 'Recusadas', 'Canceladas', 'Todas as consultas'].map((status, index) => (
                            <div className="flex items-center" key={index}>
                                <input 
                                    type="radio" 
                                    name="status" 
                                    id={status.toLowerCase()} 
                                    className="mr-2"
                                />
                                <label htmlFor={status.toLowerCase()} className="text-gray-800">
                                    {status}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center p-5 bg-gray-200 rounded-lg mt-5">
                    Nenhuma consulta encontrada ....
                </div>
            </div>
            <Footer />
        </>
    );
}
