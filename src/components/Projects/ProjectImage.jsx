import React from "react";

function ProjectImage({ imgSrc, showLightbox, onShow, onClose }) {
  return (
    <>
      <div className="lg:w-7/12 w-full flex items-center justify-center p-5">
        <img src={imgSrc} alt="Project Preview" onClick={onShow} className="rounded-3xl border border-gray-200 shadow cursor-pointer w-full max-w-[680px] lg:h-[420px] object-cover" loading="lazy" />
      </div>

      {showLightbox && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-[90%]">
            <img src={imgSrc} alt="Project Full View" className="max-h-[90vh] w-auto rounded shadow-lg" loading="lazy" />

            <button onClick={onClose} aria-label="Cerrar" className="absolute top-2 right-2 text-white hover:text-gray-300 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectImage;
