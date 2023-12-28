"use client"

import { api } from "@/trpc/react"
import { useRouter } from "next/navigation"

export default function DeleteUrlButton({ urlId }: { urlId: string }) {
    const router = useRouter();
    const deleteUrl = api.url.deleteURL.useMutation({
        onSuccess: () => {
            router.refresh()
        }
    })
    return (
        <button onClick={() => {
            deleteUrl.mutate({ id: urlId })
        }} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
    )
}
