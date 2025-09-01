import { useState } from "react";

function FullscreenImageModal({ src, alt }: { src: string; alt: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail / Normal Image */}
      <img
        src={src}
        alt={alt}
        onClick={() => setIsOpen(true)}
        className="cursor-pointer rounded-lg shadow-md hover:opacity-90 transition"
      />

      {/* Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 bg-opacity-80 flex items-center justify-center z-50"
        >
          <img
            src={src}
            alt={alt}
            className=" xl:h-[40rem] md:h-[23rem] sm:h-[20rem] h-[9.5rem] rounded-lg shadow-lg mx-3"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}

export default FullscreenImageModal;
