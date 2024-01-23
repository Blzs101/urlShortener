import CopyUrl from "@/components/CopyUrl";
import { api } from "@/trpc/server";
import Link from "next/link";

export default async function Success() {
    const latestUrl = await api.url.findLatestURL.query()

    if (!latestUrl) return null
    return (
        <main className="flex flex-col justify-center items-center h-full">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                <CopyUrl latestUrl={latestUrl.shortenedURL} />
            </div>
            <div>
                <Link href={"/"} className="text-white end-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2">Shorten another link</Link>
            </div>
        </main>

    )
}
