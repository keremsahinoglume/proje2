'use client'

import { useRouter } from 'next/navigation'

interface BackButtonProps {
    className?: string
}

export default function BackButton({ className }: BackButtonProps) {
    const router = useRouter()

    const handleBack = () => {
        if (window.history.length > 1) {
            router.back()
        } else {
            router.push('/dashboard')
        }
    }

    return (
        <button
            onClick={handleBack}
            className={className}
        >
            ← Geri
        </button>
    )
}
