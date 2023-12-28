"use client"

import { api } from "@/trpc/react"
import { useRouter } from "next/navigation";
export default function DeleteAccount({ session }: { session: string | undefined }) {
    const router = useRouter()
    const deleteAccount = api.post.deleteAccount.useMutation({
        onSuccess: () => {
            router.refresh()
        }
    })
    return (
        <>
            {session && <button onClick={() => deleteAccount.mutate({ id: session })}>Delete Account</button>}
        </>
    )
}
