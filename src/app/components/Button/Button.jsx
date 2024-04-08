

export default function Button({to, text, className, onClick}) {
    return (
        <button>
        <a href={to} target="_blank" className={`${className} px-10 py-2 rounded-xl bg-black text-lightmayonnaise text-sm hover:bg-yellow`} onClick={onClick}>
            {text}
        </a>
        </button>
    )
}