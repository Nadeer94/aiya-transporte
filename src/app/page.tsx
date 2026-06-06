export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            AIYA Transporte
          </h1>

          <p className="text-xl max-w-2xl mb-8">
            Zuverlässige Transport- und Logistiklösungen für Unternehmen
            im Raum Karlsruhe und darüber hinaus.
          </p>

          <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-lg">
            Jetzt anfragen
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">
            Unsere Leistungen
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Kurierfahrten
              </h3>
              <p>
                Schnelle Direktfahrten für wichtige Sendungen.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Expresslieferungen
              </h3>
              <p>
                Flexible Lösungen für zeitkritische Transporte.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Geschäftskunden
              </h3>
              <p>
                Langfristige Transportlösungen für Unternehmen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Über AIYA Transporte
          </h2>

          <p className="max-w-3xl text-lg">
            AIYA Transporte steht für Zuverlässigkeit,
            Pünktlichkeit und professionelle Transportdienstleistungen.
            Unser Ziel ist es, Unternehmen mit flexiblen und
            effizienten Logistiklösungen zu unterstützen.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Kontakt
          </h2>

          <p>
            Haben Sie Fragen oder benötigen Sie ein Angebot?
          </p>

          <p className="mt-4 font-semibold">
            E-Mail: aiyatransporte@hotmail.de
          </p>
        </div>
      </section>
    </main>
  );
}