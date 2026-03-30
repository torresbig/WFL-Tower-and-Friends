import { useState } from "react";

export function InfoAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-10 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left text-2xl md:text-3xl font-bold text-red-600 hover:text-red-800 transition-colors duration-200 flex items-center justify-between p-4 bg-white rounded-lg shadow-md border border-red-200"
        >
          Klick für mehr Infos zum World Run
          <span className={`transform transition-transform duration-200 text-3xl ${isOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        {isOpen && (
          <div className="mt-6 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-red-600 mb-2 flex items-center">
                🏃‍♂️ Was ist der Wings for Life World Run?
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Der Wings for Life World Run ist ein weltweit synchron stattfindender Lauf, bei dem alle Teilnehmer zur selben Zeit starten, egal in welchem Land sie sich befinden.<br />
                Das Besondere: Es gibt keine feste Distanz und keine Ziellinie. Stattdessen läuft man so weit, wie man kann – bis das Catcher Car einen einholt.<br />
                Beim App-Run wird die Aktivität über eine App auf dem Handy getrackt. Ohne App, ist keine Teilnahme möglich! Daher kann jeder von überall auf der Welt teilnehmen. Auch Teammitglieder müssen nicht vor Ort sein.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-red-600 mb-2 flex items-center">
                🚗 Das Catcher Car – die mobile Ziellinie
              </h3>
              <ul className="text-gray-800 leading-relaxed list-disc list-inside space-y-1">
                <li>Startet 30 Minuten nach dem offiziellen Laufstart.</li>
                <li>Beginnt langsam und erhöht kontinuierlich die Geschwindigkeit.</li>
                <li>Sobald es dich überholt, ist dein persönlicher Lauf beendet.</li>
                <li>Dadurch hat jeder Teilnehmer sein eigenes Ziel – abhängig von Tempo und Ausdauer.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-red-600 mb-2 flex items-center">
                🌍 Wer kann teilnehmen?
              </h3>
              <p className="text-gray-800 leading-relaxed mb-2">
                Der Lauf ist für alle offen:
              </p>
              <ul className="text-gray-800 leading-relaxed list-disc list-inside space-y-1">
                <li>Hobbyläufer</li>
                <li>Profis</li>
                <li>Rollstuhlfahrer</li>
                <li>Walker</li>
                <li>Komplette Anfänger</li>
              </ul>
              <p className="text-gray-800 leading-relaxed mt-2">
                Alle starten gemeinsam und werden gleich behandelt – das macht das Event besonders inklusiv.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-red-600 mb-2 flex items-center">
                🧭 Wie funktioniert das Rennen genau?
              </h3>
              <div className="space-y-2">
                <div>
                  <strong>Start</strong><br />
                  <ul className="text-gray-800 leading-relaxed list-disc list-inside ml-4">
                    <li>Weltweiter Start zur gleichen Uhrzeit (Deutschland 10.05. 13 Uhr).</li>
                    <li>Du läufst, gehst oder rollst in deinem eigenen Tempo.</li>
                  </ul>
                </div>
                <div>
                  <strong>30 Minuten später</strong><br />
                  <ul className="text-gray-800 leading-relaxed list-disc list-inside ml-4">
                    <li>Das Catcher Car setzt sich in Bewegung.</li>
                  </ul>
                </div>
                <div>
                  <strong>Während des Rennens</strong><br />
                  <ul className="text-gray-800 leading-relaxed list-disc list-inside ml-4">
                    <li>Du versuchst, <strong>so weit wie möglich zu kommen</strong>, bevor das Auto dich einholt.</li>
                  </ul>
                </div>
                <div>
                  <strong>Ende</strong><br />
                  <ul className="text-gray-800 leading-relaxed list-disc list-inside ml-4">
                    <li>Sobald das Catcher Car dich erreicht, ist dein Lauf vorbei. Vor Ort im optimalen Fall wieder am Start!</li>
                    <li>Deine Distanz wird automatisch erfasst.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}