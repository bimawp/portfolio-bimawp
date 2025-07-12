// src/components/PDFViewer.jsx
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PDFViewer({ fileUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(600); // default width
  const [error, setError] = useState(null);

  useEffect(() => {
    function updateWidth() {
      if (typeof window !== "undefined") {
        setWidth(Math.min(window.innerWidth * 0.9, 800));
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(error) {
    setError(error.message);
  }

  return (
    <div className="w-full flex flex-col items-center px-4">
      {/* Wrapper div penting supaya textLayer tidak keluar */}
      <div className="relative overflow-hidden rounded border border-gray-300 shadow max-w-3xl w-full">
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          options={{ disableTextLayer: false }}
        >
          {numPages && (
            <Page
              pageNumber={pageNumber}
              width={width}
              renderTextLayer={true}
              renderAnnotationLayer={false}
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
