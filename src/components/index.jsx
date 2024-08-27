import React from "react";
import { Route } from "react-router-dom";

export default function Header() {

    return (
        <header className="bg-white shadow w-full py-4 justify-top">
            <div className="container mx-auto flex justify-between items-center">
                <a className="text-3xl font-bold text-gray-800" href="/">Saúde Conectada</a>
                <div className="flex space-x-4">
                    <a
                        href="/login"
                        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
                    >
                        Fazer Login
                    </a>
                    <a
                        href="/register"
                        className="px-6 py-2 border border-blue-600 text-blue-600 font-semibold rounded-lg shadow hover:bg-blue-600 hover:text-white transition duration-300"
                    >
                        Registrar
                    </a>
                </div>
            </div>
        </header>

    )
}