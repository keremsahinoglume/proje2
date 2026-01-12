'use client'

import { useSearchParams } from 'next/navigation';

export default function Search() {
    const searchParams = useSearchParams();

    // Dinamik olarak tüm parametreleri obje haline getirmek
    const paramsObj: Record<string, string> = {};
    searchParams.forEach((value, key) => {
        paramsObj[key] = value;
    });

    return (
        <div>
            <h1>Arama Sonuçları:</h1>
            <ul>
                {Object.entries(paramsObj).map(([key, value]) => (
                    <li key={key}>
                        {key}: {value}
                    </li>
                ))}
            </ul>
        </div>
    );
}
