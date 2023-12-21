'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = usePathname();
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        const matchResult = router.match(/page(\d+)/);
        const currentPageNumber = matchResult ? parseInt(matchResult[1], 10) : 1;
        setPageNumber(currentPageNumber);
    }, [router]);
    return (
        <div className='flex flex-col flex-1 h-full justify-between'>
            <div>
                {children}
            </div>
            <div className='flex justify-end fixed bottom-4 right-4'>
                {pageNumber > 1 && <Link href={`/page${pageNumber - 1}`} onClick={() => setPageNumber(pageNumber - 1)}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded me-4">Previous</button>
                </Link>}
                {pageNumber < 4 && <Link href={`/page${pageNumber + 1}`} onClick={() => setPageNumber(pageNumber + 1)}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
                </Link>}
            </div>
        </div>

    )
}
