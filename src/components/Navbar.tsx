
import Image from "next/image";
import Link from "next/link";
import NavbarMenus from "./NavbarMenus";
import { getServerAuthSession } from "@/server/auth";

export default async function Navbar() {
    const session = await getServerAuthSession();

    return (
        <header className="w-full">
            <nav className="border-gray-200 bg-white ">
                <div className=" mx-auto flex h-16 flex-wrap items-center justify-between text-center">
                    <Link href="/" className="flex items-center space-x-3 ml-4">
                        <Image
                            src="/logo.svg"
                            width={80}
                            height={80}
                            alt="Shortly Logo"
                            className="text-white"
                        />
                    </Link>
                    <NavbarMenus session={session} />
                </div>
            </nav>
        </header>
    );
}
