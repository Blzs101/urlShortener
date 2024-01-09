"use client"

import { shortenUrlAPi } from "@/util/shortenUrlAPi";
import { useState } from "react"

export default function CreateUrlWithoutSession() {

    const [typedUrl, setTypedUrl] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState("");

    async function getShortenedUrl(e: React.FormEvent) {
        e.preventDefault();
        const shortenedUrlApi = await shortenUrlAPi(typedUrl)
        setShortenedUrl(shortenedUrlApi!)
        setTypedUrl("")
    }
    return (
        <>
            {shortenedUrl === "" ?
                <form className="w-3/4 " onSubmit={getShortenedUrl}>
                    <label htmlFor="getUrl" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Shorten Link</label>
                    <div className="relative flex justify-center items-center">
                        <input type="url" id="getUrl" name="getUrl" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" value={typedUrl} onChange={(e) => { setTypedUrl(e.target.value) }} placeholder="Enter Link here" required />
                        <button type="submit" className="text-white absolute end-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2" >Shorten Link</button>
                    </div>
                </form> :
                <>
                    <form className="w-3/4 " onSubmit={async (e: React.FormEvent<Element>) => {
                        e.preventDefault()
                        await navigator.clipboard.writeText(shortenedUrl)
                    }}>
                        <label htmlFor="copyUrl" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Shorten Link</label>
                        <div className="relative flex justify-center items-center">
                            <input type="url" id="copyUrl" name="copyUrl" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" value={shortenedUrl} disabled />
                            <button type="submit" className="text-white absolute end-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2" >Copy Link</button>
                        </div>
                    </form>
                    <button onClick={() => setShortenedUrl("")}>Shorten another link</button>
                </>

            }
        </>
    )
}
