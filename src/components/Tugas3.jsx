import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  { text: "Kamu suka rame-rame dan ngobrol banyak orang gak?", type: "E" },
  { text: "Kalau capek, kamu lebih milih sendiri aja ya?", type: "I" },
  { text: "Kamu sering mulai ngobrol duluan gak sih?", type: "E" },
  { text: "Biasanya, kamu mikir dulu sebelum ngomong?", type: "I" },
  { text: "Suka jadi pusat perhatian gak nih?", type: "E" },
  { text: "Kamu suka banget rencanain segala hal sampai detail?", type: "AN" },
  { text: "Ikutin perasaan pas ambil keputusan, kamu?", type: "EM" },
  { text: "Suka pertimbangin risiko dulu sebelum bertindak?", type: "AN" },
  { text: "Mudah tersentuh sama film atau cerita sedih gak?", type: "EM" },
  { text: "Suka banget diskusi soal ide-ide baru?", type: "AN" },
  { text: "Kamu ekspresif banget ya?", type: "EM" },
  { text: "Suka banget ketemu banyak orang?", type: "E" },
  { text: "Suka banget waktu santai sendiri?", type: "I" },
  { text: "Suka banget perbaiki hal yang salah?", type: "AN" },
  { text: "Kamu orang yang peka dan empati banget?", type: "EM" },
  { text: "Suka spontan dan nyobain hal baru gak?", type: "E" },
  { text: "Suka rencana matang daripada dadakan?", type: "AN" },
  { text: "Lebih suka simpen perasaan daripada ungkapin?", type: "I" },
  { text: "Gampang banget terinspirasi sama orang lain?", type: "EM" },
  { text: "Nyaman banget bahas ide-ide seru?", type: "AN" },
];

const results = {
  E: {
    title: "Ekstrovert 🔊",
    description: "Kamu energik, spontan, dan suka bertemu orang banyak.",
    quote: "Dunia adalah panggungmu!",
    color: "indigo",
  },
  I: {
    title: "Introvert 🤫",
    description: "Kamu tenang, reflektif, dan suka suasana damai.",
    quote: "Kesendirian bukan kesepian, tapi kekuatan.",
    color: "purple",
  },
  AN: {
    title: "Analitis 🧠",
    description: "Kamu logis, detail, dan suka mikir dulu sebelum bertindak.",
    quote: "Logika adalah kompasmu.",
    color: "teal",
  },
  EM: {
    title: "Emosional 💖",
    description: "Kamu peka, empatik, dan penuh perasaan.",
    quote: "Hati yang hangat membuatmu spesial.",
    color: "pink",
  },
  A: {
    title: "Ambivert ⚖️",
    description: "Kamu fleksibel, nyaman di dua dunia, introvert dan ekstrovert.",
    quote: "Kamu bisa bersinar di dua dunia sekaligus.",
    color: "gray",
  },
};

export default function Tugas3Friendly() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({ E: 0, I: 0, AN: 0, EM: 0 });
  const [showResult, setShowResult] = useState(false);
  const [isAnswering, setIsAnswering] = useState(false);

  const finalResult = useMemo(() => {
    const maxScore = Math.max(...Object.values(scores));
    const topTypes = Object.keys(scores).filter((t) => scores[t] === maxScore);
    return topTypes.length === 1 ? results[topTypes[0]] : results.A;
  }, [scores]);

  const handleAnswer = (answer) => {
    if (isAnswering) return;
    setIsAnswering(true);

    setTimeout(() => {
      const current = questions[step];

      if (answer === "yes") {
        setScores((prev) => ({
          ...prev,
          [current.type]: prev[current.type] + 1,
        }));
      }

      if (step + 1 === questions.length) {
        setShowResult(true);
      } else {
        setStep(step + 1);
      }

      setIsAnswering(false);
    }, 450);
  };

  const restart = () => {
    setStep(0);
    setScores({ E: 0, I: 0, AN: 0, EM: 0 });
    setShowResult(false);
  };

  const testUrl = "https://contoh.link/teskepribadian";

  const shareText = `Hasil tes kepribadianku: ${finalResult.title}.\n${finalResult.description}\n"${finalResult.quote}"\nCoba deh tesnya di sini: ${testUrl}`;

  const encodedShareText = encodeURIComponent(shareText);

  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-100 p-8 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-10">
        {/* Header */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-2 tracking-wide">
            Sistem Pakar Kepribadian
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Sistem ini menentukan kepribadianmu berdasarkan jawaban-jawaban sederhana.
          </p>
        </section>

        {/* Tes atau Hasil */}
        <section className="relative min-h-[320px]">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="text-center"
              >
                <h2 className="text-3xl font-semibold text-indigo-700 mb-4 tracking-tight">
                  Pertanyaan {step + 1} dari {questions.length}
                </h2>
                <p className="text-xl font-medium text-gray-800 mb-10 px-6 leading-relaxed">
                  {questions[step].text}
                </p>

                <div className="flex justify-center gap-12">
                  <button
                    onClick={() => handleAnswer("yes")}
                    disabled={isAnswering}
                    className="relative inline-flex items-center justify-center rounded-full bg-indigo-600 px-10 py-4 font-semibold text-white shadow-lg transition duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 disabled:opacity-60 disabled:pointer-events-none select-none"
                  >
                    👍 Ya
                    <span className="ml-2 text-xl">✔️</span>
                  </button>
                  <button
                    onClick={() => handleAnswer("no")}
                    disabled={isAnswering}
                    className="relative inline-flex items-center justify-center rounded-full bg-gray-300 px-10 py-4 font-semibold text-gray-800 shadow-md transition duration-300 hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-400 disabled:opacity-60 disabled:pointer-events-none select-none"
                  >
                    👎 Tidak
                    <span className="ml-2 text-xl">✖️</span>
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="mt-14 h-4 w-full rounded-full bg-indigo-100 shadow-inner overflow-hidden">
                  <motion.div
                    className="h-full bg-indigo-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-xl mx-auto px-6"
              >
                <h3
              className={`text-4xl font-extrabold text-${finalResult.color}-700 mb-4 tracking-wide`}
            >
              {finalResult.title}
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              {finalResult.description}
            </p>
            <blockquote className="italic text-gray-600 border-l-4 border-gray-400 pl-4 text-sm mb-6">
              "{finalResult.quote}"
            </blockquote>

            <button
              onClick={restart}
              className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition"
            >
              🔁 Ulangi Tes
            </button>

            <div className="mt-6 flex justify-center gap-6">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodedShareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.522A8.18 8.18 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.631 4.07 4.07 0 0 0 1.804-2.23 8.18 8.18 0 0 1-2.605.981 4.1 4.1 0 0 0-6.993 3.733 11.65 11.65 0 0 1-8.457-4.25 4.04 4.04 0 0 0 1.27 5.467 4.09 4.09 0 0 1-1.858-.506v.05a4.1 4.1 0 0 0 3.293 4.015 4.09 4.09 0 0 1-1.852.07 4.1 4.1 0 0 0 3.834 2.83A8.233 8.233 0 0 1 2 18.13a11.616 11.616 0 0 0 6.29 1.84" />
                </svg>
                Bagikan ke Twitter
              </a>
              <button
                onClick={() => navigator.clipboard.writeText(testUrl)}
                className="text-green-600 hover:text-green-800 transition"
              >
                📋 Salin Link Tes
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  </div>
</main>
);
}
