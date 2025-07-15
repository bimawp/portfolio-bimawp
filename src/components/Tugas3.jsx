import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

const questions = [
  { text: "Kamu nyaman ngobrol sama orang yang baru dikenal?", type: "E" },
  { text: "Kamu suka banget ada di keramaian atau acara sosial?", type: "E" },
  { text: "Abis banyak ngobrol, kamu ngerasa perlu waktu sendiri?", type: "I" },
  { text: "Kamu lebih suka mikir dan nikmatin waktu sendiri?", type: "I" },
  { text: "Kamu ambil keputusan pakai logika dan data?", type: "AN" },
  { text: "Kamu suka banget mikirin semua kemungkinan sebelum bertindak?", type: "AN" },
  { text: "Kamu sering nurutin kata hati saat bikin pilihan?", type: "EM" },
  { text: "Perasaan orang lain sering ngaruh ke keputusan kamu?", type: "EM" },
  { text: "Kamu suka banget debat sehat dan diskusi terbuka?", type: "E" },
  { text: "Kamu lebih suka dengerin daripada ngomong?", type: "I" },
  { text: "Kamu gampang ngerti perasaan orang yang lagi susah?", type: "EM" },
  { text: "Buat kamu, emosi itu bagian penting dalam hidup?", type: "EM" },
  { text: "Kamu lebih percaya logika daripada perasaan?", type: "AN" },
  { text: "Kamu betah banget di tempat yang ramai dan penuh aktivitas?", type: "E" },
  { text: "Kamu bisa lebih fokus kalau sendirian?", type: "I" },
  { text: "Kamu suka banget hal-hal yang berhubungan sama data atau angka?", type: "AN" },
  { text: "Kamu ikut sedih kalau liat orang lain sedih?", type: "EM" },
  { text: "Kamu seneng jadi pusat perhatian?", type: "E" },
  { text: "Kamu lebih suka suasana yang tenang daripada yang ramai?", type: "I" },
  { text: "Menurut kamu, keputusan yang bagus harus lewat analisis dulu?", type: "AN" },
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
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  const finalResult = useMemo(() => {
    const maxScore = Math.max(...Object.values(scores));
    const topTypes = Object.keys(scores).filter((t) => scores[t] === maxScore);
    return topTypes.length === 1 ? results[topTypes[0]] : results.A;
  }, [scores]);

  // Text untuk share yang akan dikirim ke WA / IG bio
const shareText = encodeURIComponent(
  `Hai, aku baru saja mengikuti Tes Kepribadian dan hasilku adalah *${finalResult.title}*.\n${finalResult.description}\n\nCoba tes juga di sini!\nhttps://bimawiryadipraja.my.id/tugas/Tugas3`

  );

  // Link WhatsApp share (bisa ubah nomor atau hapus nomor kalau mau direct chat)
  const whatsappLink = `https://wa.me/?text=${shareText}`;

  // Instagram tidak punya URL share khusus, biasanya share bio atau story manual
  // Jadi kita buat link ke IG profile dan copy text manual
  const instagramLink = "https://instagram.com/yourinstagramhandle"; // Ganti dengan IG kamu

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
    }, 400);
  };

  const restart = () => {
    setStep(0);
    setScores({ E: 0, I: 0, AN: 0, EM: 0 });
    setShowResult(false);
    setHasStarted(false);
    setName("");
    setAge("");
  };

  return (
    <>
      <Helmet>
        <title>Tes Kepribadian | Sistem Pakar</title>
        <meta
          name="description"
          content="Tes kepribadian online untuk mengenali tipe kepribadian kamu: Ekstrovert, Introvert, Analitis, atau Emosional."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Tes Kepribadian | Sistem Pakar" />
        <meta
          property="og:description"
          content="Tes kepribadian online untuk mengenali tipe kepribadian kamu."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/social-preview.png" /> {/* sesuaikan */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tes Kepribadian | Sistem Pakar" />
        <meta
          name="twitter:description"
          content="Tes kepribadian online untuk mengenali tipe kepribadian kamu."
        />
        <meta name="twitter:image" content="/social-preview.png" /> {/* sesuaikan */}
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-blue-100 p-4 sm:p-6 flex items-center justify-center">
        <section className="w-full max-w-screen-sm bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
          <header className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-purple-700">
              Sistem Pakar Kepribadian
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Temukan tipe kepribadianmu melalui tes singkat ini.
            </p>
          </header>

          {/* Form */}
          {!hasStarted && !showResult && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (name.trim() && age.trim()) setHasStarted(true);
              }}
              className="space-y-4"
              aria-label="Form Identitas Pengguna"
            >
              <div>
                <label className="block text-gray-700">Nama</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Bima"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Umur</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Contoh: 20"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
                  required
                  min={1}
                />
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full w-full"
                >
                  Mulai Tes
                </button>
              </div>
            </form>
          )}

          {/* Pertanyaan */}
          {hasStarted && !showResult && (
            <AnimatePresence mode="wait">
              <motion.article
                key={step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.45 }}
                className="text-center"
              >
                <h2 className="text-xl sm:text-2xl font-semibold text-purple-700 mb-4">
                  Pertanyaan {step + 1} dari {questions.length}
                </h2>
                <p className="text-base sm:text-lg text-gray-800 mb-8 px-2 sm:px-6 leading-relaxed">
                  {questions[step].text}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 mb-6">
                  <button
                    onClick={() => handleAnswer("yes")}
                    disabled={isAnswering}
                    className="rounded-full bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700 transition disabled:opacity-50"
                  >
                    👍 Ya
                  </button>
                  <button
                    onClick={() => handleAnswer("no")}
                    disabled={isAnswering}
                    className="rounded-full bg-gray-300 px-6 py-3 font-semibold text-gray-800 hover:bg-gray-400 transition disabled:opacity-50"
                  >
                    👎 Tidak
                  </button>
                </div>

                <div className="h-3 w-full bg-purple-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-purple-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.article>
            </AnimatePresence>
          )}

          {/* Hasil */}
          {showResult && (
            <article className="text-center px-4">
              <h2
                className={`text-3xl font-bold mb-3 text-${finalResult.color}-700`}
                aria-label={`Hasil kepribadian: ${finalResult.title}`}
              >
                {finalResult.title}
              </h2>
              <p className="text-lg mb-3 text-gray-700">{finalResult.description}</p>
              <blockquote className="italic text-gray-600 mb-6">"{finalResult.quote}"</blockquote>

              <p className="text-sm text-gray-500 mb-6">
                Terima kasih, <strong>{name}</strong> (umur {age} tahun), sudah mengikuti tes.
              </p>

              {/* Tombol share */}
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-full shadow-md transition"
                  aria-label="Bagikan hasil ke WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48a11.932 11.932 0 0 0-16.87 0 11.93 11.93 0 0 0 0 16.87l-2.03 5.84 6.01-1.58a11.933 11.933 0 0 0 12.89-21.13zm-2.1 13.4c-.3.9-1.4 1.7-2.3 1.9-.6.1-1.3.2-2.4-.4-3.8-2-6.2-5.3-6.4-5.5-.2-.3-1.6-1.9-1.6-3.6 0-1.7 1-2.5 1.3-2.8.3-.3.6-.3.8-.3h.3c.2 0 .5 0 .7.6.2.6.7 2 1 2.7.3.7.5.9.9 1.3.3.3.7.8 1.2.6.3-.1 1-.4 1.4-.5.4-.1.7-.1.9.2.2.3.8 1.1 1 1.3.3.3.5.5.4.8-.1.3-.6.9-.9 1.1z" />
                  </svg>
                  WhatsApp
                </a>

                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-5 py-3 rounded-full shadow-md transition"
                  aria-label="Bagikan hasil ke Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 2C4.238 2 2 4.238 2 7v10c0 2.762 2.238 5 5 5h10c2.762 0 5-2.238 5-5V7c0-2.762-2.238-5-5-5H7zm10 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zM7 7a5 5 0 1 0 10 0 5 5 0 0 0-10 0z" />
                  </svg>
                  Instagram
                </a>
              </div>

              <button
                onClick={restart}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-full transition"
              >
                Coba Lagi
              </button>
            </article>
          )}
        </section>
      </main>
    </>
  );
}
