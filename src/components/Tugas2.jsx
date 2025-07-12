import React from "react";
import { Helmet } from "react-helmet";
import PDFViewer from "./PDFSlideViewer"; // pastikan path-nya benar

export default function Tugas2() {
  return (
    <div>
      <Helmet>
        <title>Review Jurnal Sistem Pakar Penentuan Jenis
 Ekstrakurikuler Siswa 
Dengan Metode Forward Chaining
 di SDN Sukabumi Utara 05 Pagi</title>
        <meta
          name="description"
          content="Tugas 2 berupa file PDF tentang Demokrasi dan HAM. Lihat atau unduh file presentasinya."
        />
        <link rel="canonical" href="https://bimawiryadipraja.my.id/tugas/Tugas2" />
      </Helmet>

      <h1 className="text-2xl font-bold">Tugas 2</h1>
      <PDFViewer fileUrl="/ppt-spakar.pdf" />
    </div>
  );
}
