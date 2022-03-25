function Button ({ text, onClick }) {
    return (       
        <button onClick={onClick} className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            { text }
        </button>
    )   
}

export default Button;