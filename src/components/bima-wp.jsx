import Head from "next/head";

export default function BimaWP() {
  return (
    <>
      <Head>
        <title>Bima WP – Bima Wiryadi Praja</title>
        <meta name="description" content="Halaman khusus untuk mengenal lebih dekat Bima Wiryadi Praja, yang dikenal juga sebagai Bima WP. Mahasiswa Sistem Informasi STMIK Mardira Indonesia." />
        <meta name="keywords" content="Bima WP, Bima Wiryadi, Bima Wiryadi Praja, Mahasiswa Sistem Informasi, Web Developer" />
        <link rel="canonical" href="https://www.bimawiryadipraja.my.id/bima-wp" />
      </Head>

      <main className="min-h-screen py-12 px-4 text-center bg-gray-100 text-gray-800">
        <h1 className="text-4xl font-bold mb-6">Siapa itu Bima WP?</h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          <strong>Bima WP</strong> adalah singkatan dari <strong>Bima Wiryadi Praja</strong>, seorang Mahasiswa Sistem Informasi di STMIK Mardira Indonesia. 
          Bima memiliki minat besar dalam <strong>pengembangan web</strong>, teknologi digital, dan pembuatan sistem informasi yang bermanfaat.
        </p>

        <div className="mt-10">
          <img
            src="/profil1.jpg"
            alt="Bima WP"
            className="mx-auto rounded-full w-48 h-48 object-cover shadow-md border-4 border-white"
          />
          <p className="mt-4 text-gray-600 italic">"Membuat web bukan hanya tentang kode, tapi juga tentang solusi dan dampak."</p>
        </div>

        <div className="mt-10">
          <a href="/" className="text-blue-600 underline hover:text-blue-800">
            ← Kembali ke Beranda
          </a>
        </div>
      </main>
    </>
  );
}
