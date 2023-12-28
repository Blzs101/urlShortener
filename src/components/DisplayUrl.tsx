
import CopyUrlButton from "./CopyUrlButton"
import DeleteUrlButton from "./DeleteUrlButton"

type DisplayUrlProps = {
    originalUrl: string,
    shortenedUrl: string,
    date: Date,
    id: string
}
export default function DisplayUrl({ originalUrl, shortenedUrl, date, id }: DisplayUrlProps) {

    return (

        <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {shortenedUrl}
                </th>
                <td className="px-6 py-4">
                    {originalUrl}
                </td>
                <td className="px-6 py-4">
                    {date.toUTCString()}
                </td>
                <td className="px-6 py-4">
                    <CopyUrlButton key={id} shortenedURL={shortenedUrl} />
                </td>
                <td className="px-6 py-4">
                    <DeleteUrlButton key={id} urlId={id} />
                </td>
            </tr>
        </tbody>
    )
}
