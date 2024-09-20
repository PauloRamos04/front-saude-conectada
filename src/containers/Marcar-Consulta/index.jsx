import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function MarcarConsulta() {
    const [step, setStep] = useState(1); // Para controlar a etapa do formulário

    return (
        <>
            <Header />
            <main className="container mx-auto p-5">
                {step === 1 && (
                    <section className="agendamento-basico bg-white p-5 rounded-lg shadow-md">
                        <h2 className="text-2xl text-gray-800 text-center">Agendar Consulta</h2>
                        <form className="form-agendamento-basico">
                            <div className="form-group">
                                <label htmlFor="paciente">Paciente:</label>
                                <input type="text" id="paciente" placeholder="Nome do Paciente" className="border rounded-lg px-3 py-2" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cpf">CPF/CNPJ:</label>
                                <input type="text" id="cpf" placeholder="Informe CPF ou CNPJ" className="border rounded-lg px-3 py-2" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">Data de Nascimento:</label>
                                <input type="date" id="date" className="border rounded-lg px-3 py-2" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="hora">Hora da Consulta:</label>
                                <input type="time" id="hora" className="border rounded-lg px-3 py-2" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tipo-consulta">Tipo de Consulta:</label>
                                <select id="tipo-consulta" className="border rounded-lg px-3 py-2">
                                    <option value="medica">Consulta Médica</option>
                                    <option value="psicologica">Consulta Psicológica</option>
                                    <option value="nutricional">Consulta Nutricional</option>
                                    <option value="fisioterapia">Fisioterapia</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="observacoes">Observações:</label>
                                <textarea id="observacoes" rows="4" placeholder="Escreva observações sobre a consulta..." className="border rounded-lg px-3 py-2"></textarea>
                            </div>
                            <div className="form-actions flex justify-between">
                                <button type="button" className="btn-limpar bg-gray-200 px-4 py-2 rounded-lg" onClick={() => window.history.back()}>Voltar</button>
                                <button type="button" className="btn-proximo-basico bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => setStep(2)}>Próximo</button>
                            </div>
                        </form>
                    </section>
                )}

                {step === 2 && (
                    <section className="agendamento-completo bg-white p-5 rounded-lg shadow-md">
                        <h2 className="text-2xl text-gray-800 text-center">Agendar Consulta</h2>
                        <form className="form-agendamento">
                            <div className="form-group">
                                <label htmlFor="especialidade">Escolha a especialidade médica:</label>
                                <select id="especialidade" className="border rounded-lg px-3 py-2">
                                    <option value="" disabled selected>Selecione a especialidade médica</option>
                                    <option value="cardiologia">Cardiologia</option>
                                    <option value="dermatologia">Dermatologia</option>
                                    <option value="pediatria">Pediatria</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="unidade">Escolha a unidade:</label>
                                <select id="unidade" className="border rounded-lg px-3 py-2">
                                    <option value="" disabled selected>Selecione a unidade</option>
                                    <option value="unidade1">Unidade 1</option>
                                    <option value="unidade2">Unidade 2</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="convenio">Selecione o convênio:</label>
                                <select id="convenio" className="border rounded-lg px-3 py-2">
                                    <option value="" disabled selected>Selecione o convênio</option>
                                    <option value="unimed">Unimed</option>
                                    <option value="amil">Amil</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="data-completo">Data:</label>
                                <input type="date" id="data-completo" className="border rounded-lg px-3 py-2" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="horario">Horário:</label>
                                <select id="horario" className="border rounded-lg px-3 py-2">
                                    <option value="" disabled selected>Selecione o horário</option>
                                    <option value="09:00">09:00</option>
                                    <option value="10:00">10:00</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="requisicao">Adicione a requisição médica:</label>
                                <input type="file" id="requisicao" className="border rounded-lg px-3 py-2" />
                            </div>
                            <div className="form-actions flex justify-between">
                                <button type="button" className="btn-voltar-basico bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setStep(1)}>Voltar</button>
                                <button type="button" className="btn-proximo bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => setStep(3)}>Enviar</button>
                            </div>
                        </form>
                    </section>
                )}

                {step === 3 && (
                    <section className="mais-informacoes bg-white p-5 rounded-lg shadow-md text-center">
                        <h2 className="text-2xl text-gray-800">Consulta Agendada!</h2>
                        <p>Volte para a página inicial para realizar uma nova consulta.</p>
                        <div className="form-actions flex justify-center mt-4">
                            <button type="button" className="btn-voltar-completo bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setStep(2)}>Voltar</button>
                            <button type="button" className="btn-enviar bg-green-500 text-white px-4 py-2 rounded-lg" onClick={() => window.open('/index.html', '_blank')}>Próximo</button>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </>
    );
}
