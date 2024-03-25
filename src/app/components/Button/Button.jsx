

export default function Button({to, text, className}) {
    return (
        <button>
        <a href={to} target="_blank" className={`${className} px-10 py-2 rounded-xl bg-lightmayonnaise text-black text-sm hover:bg-yellow`}>
            {text}
        </a>
        </button>
    )
}