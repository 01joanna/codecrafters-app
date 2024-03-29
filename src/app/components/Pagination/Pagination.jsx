import React, { useState } from "react";

export default function Pagination({ currentPage, totalPages, updatePage }) {
    // const [currentPageState, setCurrentPageState] = useState(currentPage);

    const prevPage = () => {
        if (currentPage > 1) {
            updatePage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            updatePage(currentPage + 1);
        }
    };

    return (
        <div className="flex gap-1 justify-center items-center p-10">
            <button
                className="py-2 px-8 rounded-xl items-center bg-lightmayonnaise text-black text-sm font-bold"
                onClick={prevPage}
                disabled={currentPage === 1}
            >
                Prev
            </button>
            <div className="p-2 rounded-xl items-center bg-lightmayonnaise text-black text-sm font-bold">{currentPage}</div>

            <button
                onClick={nextPage}
                className="py-2 px-8 rounded-xl items-center bg-lightmayonnaise text-black text-sm font-bold"
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
}
