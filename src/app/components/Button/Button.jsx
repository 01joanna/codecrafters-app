

export default function Button({to, text, className}) {
    return (
        <button>
        <a href={to} target="_blank" className={`${className}`}>
            {text}
        </a>
        </button>
    )
}