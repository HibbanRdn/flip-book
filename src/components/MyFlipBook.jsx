import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { motion } from "framer-motion";

function MyFlipBook() {
  const pages = [
    "cover.jpg",
    "page1.jpg",
    "page2.jpg",
    "page3.jpg",
    "page4.jpg",
    "page5.jpg",
    "page6.jpg",
    "page7.jpg",
    "page8.jpg",
    "cover-back.jpg",
  ];

  const bookRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);

  const currentLeft = currentPage % 2 === 0 ? currentPage : currentPage - 1;
  const currentRight = currentLeft + 1;

  const handleFlip = (e) => {
    setCurrentPage(e.data);
  };

  const nextPage = () => {
    bookRef.current.pageFlip().flipNext();
  };

  const prevPage = () => {
    bookRef.current.pageFlip().flipPrev();
  };

  const goToCover = () => {
    bookRef.current.pageFlip().flip(0);
  };

  const goToLastPage = () => {
    bookRef.current.pageFlip().flip(pages.length - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <div className="flipbook-wrapper">
        <HTMLFlipBook
          width={500}
          height={700}
          showCover={true}
          ref={bookRef}
          onFlip={handleFlip}
          className="flipbook"
        >
          {pages.map((img, idx) => (
            <div key={idx} className="page">
              <motion.img
                src={`/images/${img}`}
                alt={`page-${idx}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="page-img"
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      {/* Navigasi */}
      <div className="nav-container flex items-center justify-center gap-4 mt-4">
        <button className="nav-button" onClick={goToCover}>🏠 Cover</button>
        <button className="nav-button" onClick={prevPage}>⬅️ Prev</button>
        <span className="font-semibold text-lg text-gray-700">
          {currentLeft + 1}-{currentRight + 1} / {pages.length}
        </span>
        <button className="nav-button" onClick={nextPage}>Next ➡️</button>
        <button className="nav-button" onClick={goToLastPage}>📘 Last</button>
      </div>
    </div>
  );
}

export default MyFlipBook;
