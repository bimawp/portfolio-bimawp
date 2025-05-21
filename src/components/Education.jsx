import SEO from './SEO';

export default function Education() {
  return (
    <>
      <SEO
        title="Riwayat Pendidikan & Pengalaman Kerja – Bima Wiryadi Praja"
        description="Riwayat pendidikan dan pengalaman kerja Bima Wiryadi Praja, mahasiswa Sistem Informasi STMIK Mardira Indonesia."
        url="https://www.bimawiryadipraja.my.id/education"
        image="https://www.bimawiryadipraja.my.id/profil1.jpg"
      />
      <section id="education" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">Riwayat Pendidikan & Pengalaman Kerja</h2>
          
          {/* Tombol Download CV */}
          <div className="flex justify-center mb-10">
            <a
              href="/cv-bima-wiryadi-praja.pdf"
              download
              className="inline-block bg-gray-800 text-white px-6 py-2 rounded shadow hover:bg-gray-700 transition-colors font-semibold"
            >
              Download CV (PDF)
            </a>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            {/* Riwayat Pendidikan */}
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-6 text-gray-700 text-center md:text-left">Riwayat Pendidikan</h3>
              <ul className="space-y-6">
                <li className="bg-gray-100 rounded-lg shadow p-5">
                  <strong className="block text-lg text-gray-800">S1 Teknik Informatika</strong>
                  <span>Sekolah Tinggi Manajemen Informatika dan Komputer (STMIK) Mardira Indonesia (2022 – 2026)</span><br />
                  <span className="text-sm text-gray-600">IPK: 3.50</span>
                </li>
                <li className="bg-gray-100 rounded-lg shadow p-5">
                  <strong className="block text-lg text-gray-800">Ilmu Pengetahuan Alam</strong>
                  <span>SMAN 10 Garut (2018 – 2021)</span><br />
                  <span className="text-sm text-gray-600">Rata-rata: 80</span>
                </li>
                <li className="bg-gray-100 rounded-lg shadow p-5">
                  <strong className="block text-lg text-gray-800">SMPN 1 Leuwigoong</strong>
                  <span>(2013 – 2015)</span><br />
                  <span className="text-sm text-gray-600">Rata-rata: 90</span>
                </li>
                <li className="bg-gray-100 rounded-lg shadow p-5">
                  <strong className="block text-lg text-gray-800">SDN 01 Karyasari</strong>
                  <span>(2007 – 2013)</span><br />
                  <span className="text-sm text-gray-600">Rata-rata: 92.3</span>
                </li>
              </ul>
            </div>
            {/* Pengalaman Kerja */}
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-6 text-gray-700 text-center md:text-left">Pengalaman Kerja</h3>
              <ul className="space-y-6">
                <li className="bg-gray-100 rounded-lg shadow p-5">
                  <strong className="block text-lg text-gray-800">Freelance Web Developer</strong>
                  <span>2022 – sekarang</span>
                </li>
                <li className="bg-gray-100 rounded-lg shadow p-5">
                  <strong className="block text-lg text-gray-800">Magang di PT GAP</strong>
                  <span>AppSheet & Data Management (2023)</span>
                </li>
                <li className="bg-gray-100 rounded-lg shadow p-5">
                  <strong className="block text-lg text-gray-800">Design Grafis di Percetakan AL - Karomah</strong>
                  <span>Digital Printing dan Formatur Cetak Kertas dan Buku (2009)</span>
                </li>
                <li className="bg-gray-100 rounded-lg shadow p-5">
                  <strong className="block text-lg text-gray-800">Analis Sistem</strong>
                  <span>Melakukan analisis sistem informasi manajemen dengan studi kasus sistem keuangan di MA As Siroji (2024)</span>
                </li>
                {/* <li className="bg-gray-100 rounded-lg shadow p-5">
                  <strong className="block text-lg text-gray-800">Nama Pengalaman Baru</strong>
                  <span>Deskripsi pengalaman baru (tahun)</span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}