import CreateUrlWithSession from "@/components/CreateUrlWithSession";
import CreateUrlWithoutSession from "@/components/CreateUrlWithoutSession";
import { getServerAuthSession } from "@/server/auth";

export default async function Home() {
  const session = await getServerAuthSession()
  return (
    <main className="flex flex-col justify-center items-center h-full">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        {session ?
          <CreateUrlWithSession /> : <CreateUrlWithoutSession />}
      </div>
    </main>
  );
}
