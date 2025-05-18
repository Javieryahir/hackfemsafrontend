import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import estanteriaImg from './assets/estanteria.jpg'
import { Link } from 'react-router-dom';

function Secondary() {
    const [image, setImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
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
                        <Link to="/">
                            <h1 className="text-2xl font-bold text-[#333] hover:underline color:red">OXXOgrama</h1>
                        </Link>
                        <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
                            <img
                                src={estanteriaImg}
                                alt="Planograma"
                                className="  h-auto "
                            />
                        </div>
                        <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
                            <span role="img" aria-label="profile">👤</span>
                        </div>
                    </div>

                    {/* Main Content: 100% height minus header/footer */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-24 flex-grow py-10">
                        <div className="rounded-lg    p-4">
                            <img
                                src={estanteriaImg}
                                alt="Planograma"
                                className="w-[750px]  h-auto rounded-md"
                            />
                        </div>
                        <div className="bg-white rounded-lg border border-gray-400 shadow-md p-4 w-full max-w-md h-[550px]">
                            <h2 className="text-lg font-semibold mb-2">Reporte del planograma</h2>
                            <p className="text-gray-700 text-sm">Aquí irá el contenido del reporte...</p>
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

export default Secondary
