"use client"


export default function CopyUrl({ latestUrl }: { latestUrl: string }) {

    return (
        <form className="w-3/4 " onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()

            await navigator.clipboard.writeText(latestUrl)
        }}>
            <label htmlFor="copyUrl" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Shorten Link</label>
            <div className="relative flex justify-center items-center">
                <input type="url" id="copUrl" name="copyUrl" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" defaultValue={latestUrl} disabled />
                <button type="submit" className="text-white absolute end-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2" >Copy Url</button>
            </div>
        </form>
    )
}
