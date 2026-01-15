import { Spinner } from '@/components/ui/spinner'

const loading = () => {
    return (
        <div className="flex h-full items-center justify-center">
            <Spinner />
        </div>
    )
}

export default loading
