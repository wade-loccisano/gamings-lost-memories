"use client";

import React from 'react'
// import { useRouter } from 'next/navigation';

const Pagination = ({ currentPage, totalPages }: {
    currentPage: number,
    totalPages: number,
}) => {
    // const router = useRouter();
    console.log(currentPage);
    console.log(totalPages);

    // const handlePageChange = (newPage: any) => {
    //     // router.push({
    //     //     pathname: router.pathname,
    //     //     query: { ...router.query, page: newPage }
    //     // });
    // };

    return (
        <div>
            {/* {currentPage > 1 && <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button key={page} onClick={() => handlePageChange(page)}>{page}</button>
            ))}
            {currentPage < totalPages && <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>} */}
        </div>
    )
}

export default Pagination