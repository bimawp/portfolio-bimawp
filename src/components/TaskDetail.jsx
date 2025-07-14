// src/components/TaskDetail.jsx
import { useParams } from 'react-router-dom';
import SEO from './SEO';
import PDFViewer from './PDFSlideViewer';
import Tugas1 from './Tugas1';
import Tugas3 from './Tugas3';

export default function TaskDetail() {
  const { id } = useParams();

  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto">
      <SEO
        title={
          id === 'Tugas2'
            ? 'Tugas 2 – Presentasi Sistem Pakar'
            : `Detail Tugas ${id} – Bima Wiryadi Praja`
        }
        description={
          id === 'Tugas2'
            ? 'Presentasi Tugas 2 berupa PDF slide tentang Sistem Pakar oleh Bima Wiryadi Praja. Lihat dan unduh materi presentasi di sini.'
            : `Penjelasan detail tugas ${id} oleh Bima Wiryadi Praja.`
        }
        url={`https://www.bimawiryadipraja.my.id/tugas/${id}`}
        image="https://www.bimawiryadipraja.my.id/profil1.webp"
      />

      <h2 className="text-3xl font-semibold mb-8">Detail Tugas ID: {id}</h2>

      {id === 'Tugas1' && <Tugas1 />}
      {id === 'Tugas2' && (
        <section className="mb-8 p-4 bg-blue-50 rounded-lg">
          <h1 className="text-2xl font-semibold mb-4">Presentasi Tugas 2 (PDF)</h1>
          <PDFViewer fileUrl="/ppt-spakar.pdf" />
        </section>
      )}
      {id === 'Tugas3' && (
        <div className="mb-8 p-4 bg-green-50 rounded-lg">
          <h1 className="text-2xl font-semibold mb-4">Tes Kepribadian (Sistem Pakar)</h1>
          <Tugas3 />
        </div>
      )}
    </div>
  );
}
