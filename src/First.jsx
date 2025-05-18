import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/image.png';
import test from './assets/test.jpg';
import oxxobutton from './assets/oxxobutton.png'
import { Link } from 'react-router-dom';
import FocusFrame from './FocusFrame';

function First() {
    const [image, setImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };


    const preguntas = [
        {
            texto: "¿Cómo funciona OXXOgrama?",
            respuesta: "OXXOgrama analiza el acomodo de productos en el anaquel para asegurar su correcta organización."
        },
        {
            texto: "¿Para qué sirve OXXOgrama?",
            respuesta: "Sirve para verificar si el planograma se está siguiendo adecuadamente en tienda."
        },
        {
            texto: "¿Qué es OXXOgrama?",
            respuesta: "Es una herramienta que compara la foto de un anaquel con el planograma ideal."
        },
        {
            texto: "¿Quién lo diseñó?",
            respuesta: "Fue desarrollado por el equipo de tecnología de FEMSA para las tiendas OXXO."
        }
    ];

    const [respuestaVisible, setRespuestaVisible] = useState(false);
    const [textoRespuesta, setTextoRespuesta] = useState("");

    const mostrarRespuesta = (respuesta) => {
        setTextoRespuesta(respuesta);
        setRespuestaVisible(true);
    };

    const cerrarPanel = () => {
        setRespuestaVisible(false);
        setTextoRespuesta("");
    };


    return (
        <div className="bg-[#fef9f4] min-h-screen flex flex-col items-center">
            {/* Header */}


            {/* Run Tool Button */}


            <div className="min-h-screen flex flex-col w-full justify-center items-center">
                {/* Contenido principal */}
                <main className="flex-grow w-full flex flex-col justify-center items-center">
                    <div className="w-full bg-[#ffb300] h-5"></div>
                    <div className="w-full flex items-center justify-center px-6 py-2 bg-[#d71f28] relative">
                        <img src={logo} alt="OXXOgrama Logo" className="h-10" />
                        <div className="absolute right-6">
                            <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center bg-white">
                                <span role="img" aria-label="profile">👤</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Content: 100% height minus header/footer */}
                    <div className="flex flex-col items-center flex-grow py-10 w-full">
                        {/* Images Row */}
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-24">
                            {/* Upload Box */}
                            <div className="lg:ml-[-100px]">
                                <div className="border border-gray-400 rounded-md p-4 flex flex-col items-center w-120 h-90 justify-center bg-white">
                                    {image ? (
                                        <img src={image} alt="Uploaded" className="h-full object-contain" />
                                    ) : (
                                        <>
                                            <label htmlFor="imageUpload" className="cursor-pointer flex flex-col items-center">
                                                <div className="text-4xl">📷</div>
                                                <p className="text-sm font-semibold bg-yellow-400 mt-1 px-2 py-0.5 rounded-md inline-block">
                                                    Sube la foto de tu dispositivo o toma una
                                                </p>
                                            </label>
                                            <input
                                                id="imageUpload"
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                                className="hidden"
                                            />
                                        </>
                                    )}
                                </div>
                                <Link to="/herramienta">
                                    <button className="w-full mt-8 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-sans font-bold shadow">
                                        Analizar anaquel
                                    </button>
                                </Link>
                            </div>

                            {/* Example Photo */}
                            <div className="text-center">
                                <p className="w-full mt-8 bg-yellow-400 text-black px-4 py-2 rounded-full font-sans font-bold shadow text-center">
                                    Imagen de ejemplo
                                </p>
                                <img
                                    src={test}
                                    alt="Ejemplo"
                                    className="w-90 h-102 rounded-2xl border-2 border-black-400 shadow-lg mt-4"
                                />
                            </div>
                        </div>

                        {/* Buttons Below */}
                        <div className="flex flex-row flex-wrap justify-center items-center gap-4 p-6 mt-8 w-full max-w-4xl">
                            {preguntas.map((pregunta, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => mostrarRespuesta(pregunta.respuesta)}
                                    className="min-w-[180px] text-lg bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded shadow text-center"
                                >
                                    {pregunta.texto}
                                </button>
                            ))}

                            {/* Panel de respuesta */}
                            {respuestaVisible && (
                                <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-96 z-50">
                                    <p className="text-gray-800">{textoRespuesta}</p>
                                    <button
                                        onClick={cerrarPanel}
                                        className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded my-4"
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="bg-[#222] text-white w-full p-4 text-center text-sm">
                    <p>¡SÍGUENOS EN NUESTRAS REDES SOCIALES!</p>
                    <div className="mt-2 flex justify-center gap-4">
                        <span>FEMSA</span>
                        <span>OXXO</span>
                        <span>OXXO Gas</span>
                        <span>Contacto</span>
                    </div>
                    <div className="mt-2">
                        <span className="mr-2">Términos y condiciones</span>
                        <span>📱 WhatsApp</span>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default First
