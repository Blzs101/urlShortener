import DisplayUrl from "@/components/DisplayUrl";
import { api } from "@/trpc/server";

export default async function links() {
    const allUrls = await api.url.getAllURL.query()

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Shortened Link
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Original Link
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Created At
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Copy
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                {allUrls.map(({ id, createdAt, shortenedURL, url }) => {
                    return <DisplayUrl key={id} date={createdAt} originalUrl={url} shortenedUrl={shortenedURL} id={id} />
                })}

            </table>
        </div>
    )
}
