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

  return (
    <div className="w-full flex flex-col items-center px-4">
      {/* Bungkus Document dengan overflow-hidden dan max-w agar teks tidak keluar */}
      <div className="w-full max-w-3xl mx-auto overflow-hidden rounded border border-gray-300 shadow relative">
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          className="overflow-hidden"
        >
          {numPages && (
            <Page
              pageNumber={pageNumber}
              width={
                typeof window !== "undefined"
                  ? Math.min(window.innerWidth * 0.9, 800)
                  : 800
              }
              className="relative overflow-hidden rounded"
            />
          )}
        </Document>
      </div>

      {error && (
        <div className="text-red-500 mt-2">Gagal memuat PDF: {error}</div>
      )}

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
          disabled={pageNumber <= 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Prev
        </button>
        <span>
          {pageNumber} / {numPages || "-"}
        </span>
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
