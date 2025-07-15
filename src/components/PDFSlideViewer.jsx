import React, { useState, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ClipLoader } from "react-spinners";

// Konfigurasi worker PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PDFViewer({ fileUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);
  const [loadingPage, setLoadingPage] = useState(false);

  const pdfRef = useRef(null); // Tambahkan referensi ke elemen PDF

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(error) {
    setError(error.message);
  }

  const width =
    typeof window !== "undefined" ? Math.min(window.innerWidth * 0.9, 800) : 800;

  return (
    <div className="w-full flex flex-col items-center px-4">
      <Document
        file={fileUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={
          <div className="my-6">
            <ClipLoader size={50} color="#2563eb" />
          </div>
        }
      >
        {numPages && (
          <div
            ref={pdfRef}
            className="w-full flex justify-center items-center"
          >
            <Page
              pageNumber={pageNumber}
              width={width}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              loading={() => {
                setLoadingPage(true);
                return <ClipLoader size={40} color="#2563eb" />;
              }}
              onRenderSuccess={() => {
                setLoadingPage(false);
                if (pdfRef.current) {
                  pdfRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            />
          </div>
        )}
      </Document>

      {error && (
        <div className="text-red-500 mt-2">
          Gagal memuat PDF: {error}
        </div>
      )}

      {/* Tombol Navigasi */}
      <div style={{ width }} className="flex flex-wrap justify-center items-center gap-2 mt-1">
        <button
          onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
          disabled={pageNumber <= 1 || loadingPage}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-300"
        >
          Prev
        </button>
        <span className="text-sm font-medium">
          {pageNumber} / {numPages || "-"}
        </span>
        <button
          onClick={() => setPageNumber((p) => Math.min(p + 1, numPages))}
          disabled={pageNumber >= numPages || loadingPage}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-300"
        >
          Next
        </button>
        <a
          href={fileUrl}
          download
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}
