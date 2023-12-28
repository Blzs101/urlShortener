"use client"
export default function CopyUrlButton({ shortenedURL }: { shortenedURL: string }) {
    return (
        <button onClick={() => {
            navigator.clipboard.writeText(shortenedURL)
        }} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Copy</button>
    )
}
