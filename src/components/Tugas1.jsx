import { useNavigate } from 'react-router-dom';

export default function Tugas1() {
  const navigate = useNavigate();

  return (
    <div className="mb-8 p-4 bg-gray-100 rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">Konversi Kalimat ke Logika First Order dan Pembuktian</h3>
      <p className="mb-4">
        <strong>Pernyataan yang diberikan:</strong>
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Setiap apel atau pear adalah buah</li>
        <li>Setiap buah memiliki warna kuning atau hijau atau merah</li>
        <li>Tidak ada pear berwarna merah</li>
        <li>Setiap buah manis tidak berwarna hijau</li>
      </ul>
      <p className="mb-4">
        <strong>Notasi:</strong>
        <ul className="list-disc pl-6">
          <li>A(x): x adalah apel</li>
          <li>R(x): x adalah pear</li>
          <li>B(x): x adalah buah</li>
          <li>W(x,y): x berwarna y</li>
          <li>S(x): x manis</li>
        </ul>
      </p>
      <p className="mb-4">
        <strong>Terjemahan dalam FOL:</strong>
        <ul className="list-disc pl-6">
          <li>∀x ((A(x) ∨ R(x)) → B(x))</li>
          <li>∀x (B(x) → (W(x,kuning) ∨ W(x,hijau) ∨ W(x,merah)))</li>
          <li>∀x (R(x) → ¬W(x,merah))</li>
          <li>∀x ((B(x) ∧ S(x)) → ¬W(x,hijau))</li>
        </ul>
      </p>
      <p className="mb-4">
        <strong>Pernyataan yang ingin dibuktikan:</strong> Jika pear tidak kuning maka pear tidak manis<br />
        Dalam logika: ∀x (R(x) ∧ ¬W(x,kuning) → ¬S(x))
      </p>
      <p className="mb-4">
        <strong>Pembuktian langkah demi langkah:</strong>
        <ul className="list-decimal pl-6">
          <li>Asumsikan x adalah pear dan tidak kuning → R(x) ∧ ¬W(x,kuning)</li>
          <li>Dari (1): pear adalah buah → B(x)</li>
          <li>Dari (2): karena buah harus berwarna kuning, hijau, atau merah, dan pear tidak boleh merah (3), dan tidak kuning → maka W(x,hijau)</li>
          <li>Dari (4): jika buah berwarna hijau → tidak manis → W(x,hijau) → ¬S(x)</li>
          <li>Karena pear berwarna hijau → pear tidak manis</li>
        </ul>
      </p>
      <p className="font-semibold text-green-500">
        Kesimpulan: ✅ Pernyataan "Jika pear tidak kuning maka pear tidak manis" adalah BENAR dan terbukti logis dari premis yang ada.
      </p>

      <div className="text-center mt-12">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          ← Kembali
        </button>
      </div>
    </div>
  );
}
