// src/components/PDFViewer.jsx
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PDFViewer({ fileUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(error) {
    setError(error.message);
  }

  // Lebar page supaya responsive dan max 800px
  const width =
    typeof window !== "undefined" ? Math.min(window.innerWidth * 0.9, 800) : 800;

  return (
    <div className="w-full flex flex-col items-center px-4">
      <Document
        file={fileUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
      >
        {numPages && (
          <Page
            pageNumber={pageNumber}
            width={width}
            renderTextLayer={false}       // matikan teks layer
            renderAnnotationLayer={false} // matikan annotation layer (opsional)
          />
        )}
      </Document>

      {error && (
        <div className="text-red-500 mt-2">Gagal memuat PDF: {error}</div>
      )}

      {/* Teks page di atas tombol */}
      <div className="mt-4 text-lg font-semibold text-gray-700">
        {pageNumber} / {numPages || "-"}
      </div>

      <div className="flex gap-2 mt-2">
        <button
          onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
          disabled={pageNumber <= 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Prev
        </button>
        <button
          onClick={() => setPageNumber((p) => Math.min(p + 1, numPages))}
          disabled={pageNumber >= numPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Next
        </button>
        <a
          href={fileUrl}
          download
          className="px-4 py-2 bg-green-600 text-white rounded ml-4"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}
