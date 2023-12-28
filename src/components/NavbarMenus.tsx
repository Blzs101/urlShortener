"use client"
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DeleteAccount from "./deleteAccount";

export default function NavbarMenus({ session }: { session: Session | null }) {
    const [profileDropDown, setProfileDropDown] = useState(false);
    const [hamburgerDropDown, setHamburgerDropDown] = useState(false);

    return (
        <>
            <div className="flex items-center justify-center space-x-3 md:order-2 md:space-x-0">
                {session ? (
                    <button
                        type="button"
                        className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 md:me-0 md:mr-2"
                        id="user-menu-button"
                        aria-expanded={profileDropDown}
                        data-dropdown-toggle="user-dropdown"
                        data-dropdown-placement="bottom"
                        onClick={() => setProfileDropDown(!profileDropDown)}
                    >
                        <span className="sr-only">Open user menu</span>
                        <Image
                            className="rounded-full"
                            width={40}
                            height={40}
                            src={session.user.image as string}
                            alt="user photo"
                        />
                    </button>
                ) : (
                    <Link href="/api/auth/signin" className="text-black mr-2">
                        Login
                    </Link>
                )}

                {/* dropdown menu*/}
                <div
                    className={`z-50 ${profileDropDown ? "block" : "hidden"
                        }  absolute right-4 top-[8%] my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow lg:top-[7%] `}
                    id="user-dropdown"
                >
                    <div className="px-4 py-3">
                        <span className="block text-sm text-gray-900 ">
                            {session?.user.name}
                        </span>
                        <span className="block truncate  text-sm text-gray-500">
                            {session?.user.email}
                        </span>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                            >
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Settings
                            </a>
                        </li>
                        <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setProfileDropDown(false)}>
                            <DeleteAccount session={session?.user.id} />
                        </li>
                        <li>
                            <Link
                                href="api/auth/signout"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-700"
                                onClick={() => setProfileDropDown(false)}
                            >
                                Sign out
                            </Link>
                        </li>
                    </ul>
                </div>
                <button
                    data-collapse-toggle="navbar-user"
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
                    aria-controls="navbar-user"
                    aria-expanded={hamburgerDropDown}
                    onClick={() => setHamburgerDropDown(!hamburgerDropDown)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
            </div>

            <div
                className={`${hamburgerDropDown ? "block" : "hidden"
                    } z-20 w-full items-center justify-between md:order-1 text-center md:flex md:w-auto`}
                id="navbar-user"
            >
                {session ?
                    <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0">
                        <li>
                            <Link
                                href="/"
                                className="md::text-blue-500 block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/links"
                                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                            >
                                Links
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul> : null}
            </div>
        </>
    )
}
