// src/components/Tugas3.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet";

const questions = [
  { text: "Apakah kamu merasa bersemangat saat berada di keramaian?", type: "E" },
  { text: "Apakah kamu lebih nyaman menyendiri saat lelah?", type: "I" },
  { text: "Apakah kamu mudah memulai percakapan dengan orang baru?", type: "E" },
  { text: "Apakah kamu sering berpikir panjang sebelum berbicara?", type: "I" },
  { text: "Apakah kamu senang menjadi pusat perhatian?", type: "E" },
  { text: "Apakah kamu suka mengatur dan merencanakan segala sesuatu secara detail?", type: "AN" },
  { text: "Apakah kamu sering mengikuti perasaanmu dalam mengambil keputusan?", type: "EM" },
  { text: "Apakah kamu suka mengevaluasi risiko sebelum bertindak?", type: "AN" },
  { text: "Apakah kamu mudah merasa sedih atau terharu oleh film/situasi?", type: "EM" },
  { text: "Apakah kamu senang berdiskusi dengan ide-ide baru?", type: "AN" },
  { text: "Apakah kamu sering menunjukkan perasaanmu secara terbuka?", type: "EM" },
  { text: "Apakah kamu senang berinteraksi dengan banyak orang?", type: "E" },
  { text: "Apakah kamu lebih suka waktu tenang daripada keramaian?", type: "I" },
  { text: "Apakah kamu suka mengkritik dan memperbaiki sesuatu yang kurang baik?", type: "AN" },
  { text: "Apakah kamu mudah merasa empati kepada orang lain?", type: "EM" },
  { text: "Apakah kamu suka mencoba hal baru dan spontan?", type: "E" },
  { text: "Apakah kamu lebih suka rencana matang daripada improvisasi?", type: "AN" },
  { text: "Apakah kamu cenderung menyimpan perasaan daripada mengungkapkan?", type: "I" },
  { text: "Apakah kamu mudah terinspirasi oleh orang lain?", type: "EM" },
  { text: "Apakah kamu nyaman berada di tengah diskusi ide dan pemikiran?", type: "AN" },
];

const results = {
  E: {
    title: "Ekstrovert 🔊",
    description:
      "Kamu energik, spontan, dan suka berada di tengah banyak orang.",
    quote: "Dunia adalah panggungmu!",
  },
  I: {
    title: "Introvert 🤫",
    description:
      "Kamu tenang, reflektif, dan lebih suka hubungan yang mendalam.",
    quote: "Kesendirian bukan kesepian — tapi kekuatan.",
  },
  AN: {
    title: "Analitis 🧠",
    description:
      "Kamu logis, detail, dan suka berpikir sebelum bertindak.",
    quote: "Logika adalah kompasmu.",
  },
  EM: {
    title: "Emosional 💖",
    description:
      "Kamu empatik, peka, dan penuh perasaan.",
    quote: "Hati dan intuisi membimbingmu.",
  },
  A: {
    title: "Ambivert ⚖️",
    description:
      "Kamu fleksibel dan bisa menyesuaikan diri dengan mudah.",
    quote: "Kamu bisa bersinar di dua dunia sekaligus.",
  },
};

export default function Tugas3() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({ E: 0, I: 0, AN: 0, EM: 0 });
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    const current = questions[step];
    if (answer === "yes") {
      setScores((prev) => ({ ...prev, [current.type]: prev[current.type] + 1 }));
    }
    if (step + 1 === questions.length) {
      setShowResult(true);
    } else {
      setStep(step + 1);
    }
  };

  const getFinalResult = () => {
    const max = Math.max(...Object.values(scores));
    const types = Object.keys(scores).filter((k) => scores[k] === max);
    if (types.length === 1) return results[types[0]];
    return results["A"];
  };

  const restart = () => {
    setStep(0);
    setScores({ E: 0, I: 0, AN: 0, EM: 0 });
    setShowResult(false);
  };

  return (
    <>
      <Helmet>
        <title>Tes Kepribadian - Temukan Karakter Aslimu</title>
        <meta
          name="description"
          content="Ikuti tes kepribadian singkat untuk mengetahui tipe karaktermu: Ekstrovert, Introvert, Analitis, Emosional, atau Ambivert. Mudah dan cepat!"
        />
        <meta name="keywords" content="tes kepribadian, personality test, psikologi, introvert, ekstrovert, ambivert, analitis, emosional" />
        <meta name="author" content="Bima Wiryadi Praja" />
        <meta property="og:title" content="Tes Kepribadian - Temukan Karakter Aslimu" />
        <meta
          property="og:description"
          content="Ikuti tes kepribadian singkat untuk mengetahui tipe karaktermu: Ekstrovert, Introvert, Analitis, Emosional, atau Ambivert. Mudah dan cepat!"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-6">
        <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-2xl w-full">
          {!showResult ? (
            <>
              <div className="mb-6 text-center">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
                  Tes Kepribadian
                </h1>
                <p className="text-gray-600">Pertanyaan {step + 1} dari {questions.length}</p>
              </div>
              <div className="mb-8 text-center text-xl font-medium text-gray-700">
                {questions[step].text}
              </div>
              <div className="flex justify-center gap-6">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-md transition duration-300"
                  onClick={() => handleAnswer("yes")}
                >
                  Ya
                </button>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-8 py-3 rounded-full shadow-md transition duration-300"
                  onClick={() => handleAnswer("no")}
                >
                  Tidak
                </button>
              </div>
              <div className="mt-8 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="bg-blue-600 h-full transition-all duration-500"
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </>
          ) : (
            <div className="text-center px-4">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{getFinalResult().title}</h2>
              <p className="text-lg text-gray-700 mb-4">{getFinalResult().description}</p>
              <blockquote className="italic text-purple-700 text-xl">“{getFinalResult().quote}”</blockquote>
              <button
                className="mt-10 bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-full shadow-lg transition duration-300"
                onClick={restart}
              >
                Coba Lagi
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
