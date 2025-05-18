import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/test.jpg';
import oxxobutton from './assets/oxxobutton.png'
import axios from "axios";

import { Link } from 'react-router-dom';

function First() {
    const [image, setImage] = useState(null);




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



    const [planograma, setPlanograma] = useState(null);
    const [anaquelReal, setAnaquelReal] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!planograma || !anaquelReal) {
            alert("Por favor selecciona ambas imágenes.");
            return;
        }

        const formData = new FormData();
        formData.append("planograma", planograma);
        formData.append("anaquel_real", anaquelReal);

        try {
            const response = await axios.post("http://localhost:8000/comparar-anaquel/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("Respuesta:", response.data);

            sessionStorage.setItem("resultado", JSON.stringify(response.data));
            sessionStorage.setItem("anaquel_detectado", response.data.output_images.anaquel_detectado);

            window.location.href = "/herramienta";

        } catch (error) {
            console.error("Error al enviar imágenes:", error);
            alert("Hubo un error al comparar los anaqueles.");
        }
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            setAnaquelReal(e.target.files[0])

            try {
                const response = await fetch(logo); // URL procesada por Vite
                if (!response.ok) throw new Error("No se pudo cargar la imagen");

                const blob = await response.blob();
                const fileConversion = new File([blob], "test.jpg", { type: blob.type });
                setPlanograma(fileConversion);
            } catch (error) {
                console.warn("⚠️ Error cargando imagen:", error);
            }
        }
    };

    return (
        <div className="bg-[#fef9f4] min-h-screen flex flex-col items-center">
            {/* Header */}


            {/* Run Tool Button */}


            <div className="min-h-screen flex flex-col w-full justify-center items-center">
                {/* Contenido principal */}
                <main className="flex-grow w-full flex flex-col justify-center items-center">
                    <div className="w-full bg-[#d71f28] h-5"></div>
                    <div className="w-full flex justify-between items-center px-6 py-2 bg-[#f9c727]">

                        <h1 className="text-2xl font-bold text-[#333] hover:underline">OXXOgrama</h1>


                        <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
                            <span role="img" aria-label="profile">👤</span>
                        </div>
                    </div>

                    {/* Main Content: 100% height minus header/footer */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-24 flex-grow py-10">
                        {/* Upload Box */}
                        <div>
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

                            <button
                                onClick={handleSubmit}
                                className="w-full mt-8 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow">
                                Correr herramienta
                            </button>


                        </div>

                        {/* Example Photo */}
                        <div className="text-center">
                            <p className="text-lg font-black bg-yellow-400 px-3 py-1 rounded-md inline-block mb-4">
                                Ejemplo de foto a utilizar
                            </p>
                            <img
                                src={logo}
                                alt="Ejemplo"
                                className="w-90 h-102 rounded-2xl "
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col items-center gap-4 p-6">


                            {preguntas.map((pregunta, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => mostrarRespuesta(pregunta.respuesta)}
                                    className="w-80 text-lg bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded shadow text-center my-2"
                                >
                                    {pregunta.texto}
                                </button>
                            ))}

                            <div className='mt-4'>
                                <img src={oxxobutton} alt="" className="w-80 h-12" />
                            </div>

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
