import CopyUrl from "@/components/CopyUrl";
import { api } from "@/trpc/server";
import Link from "next/link";

export default async function Success() {
    const latestUrl = await api.url.findLatestURL.query()

    if (!latestUrl) return null
    return (
        <main className="flex flex-col justify-center items-center h-full">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                <CopyUrl latestUrl={latestUrl?.shortenedURL as string} />
            </div>
            <div>
                <Link href={"/"}>Shorten another link</Link>
            </div>
        </main>

    )
}
