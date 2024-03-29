export default function Page() {
    return (
        <main className="p-8">
            <h1>All your upcoming events</h1>
            <section className="py-3">
                <h2 className="text-3xl">Events created by you:</h2>
                <div>
                    {/* tarjeta con eventos que has creado */}
                </div>
            </section>
            <section className="py-3">
            <h2 className="text-3xl">Events you confirmed your assistance to:</h2>
                <div>
                    {/* tarjeta con eventos a los que has confirmado asistencia */}
                </div>
            </section>
        </main>
    )
}