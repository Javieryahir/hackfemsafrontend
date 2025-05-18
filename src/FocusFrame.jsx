// src/FocusFrame.jsx
function FocusFrame() {
    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
            <div className="w-full h-full flex items-center justify-center">
                <div className="border-4 border-yellow-400 w-72 h-72 md:w-[400px] md:h-[400px] rounded-lg animate-pulse"></div>
            </div>
        </div>
    );
}

export default FocusFrame;
