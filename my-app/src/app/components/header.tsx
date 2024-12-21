'use client';
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    let currentPath:string = usePathname();
    const isAuthRoute = currentPath.startsWith("/auth");

    if(isAuthRoute) {
        return null;
    }

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <aside
            className={`w-[250px] h-full bg-white shadow-md fixed top-0 left-0 p-4 transition-all text-black mr-[50px] ${isSidebarVisible ? "block" : "w-[50px]"
                }`}
                onClick={toggleSidebar}
        >
            {isSidebarVisible ? "" : "|||"}
            {isSidebarVisible ? (
                <>
                    <div>
                        <h1 className="text-xl font-bold text-black">Site Header</h1>
                        {/* <button
                            onClick={toggleSidebar}
                            className="absolute top-4 right-4 p-2 bg-blue-500 text-white rounded-full"
                        >
                            {isSidebarVisible ? "Hide" : "Show"}
                        </button> */}
                    </div>
                    <nav className="flex flex-col place-content-between h-[90vh]">
                        <ul className="space-y-2">
                            <li><a href="/" className="text-blue-500">Home</a></li>
                            <li><a href="/about" className="text-blue-500">About</a></li>
                            <li><a href="/contact" className="text-blue-500">Contact</a></li>
                        </ul>
                        <ul>
                            <li>
                                <a href="/auth/login" className="text-blue-500">Log out</a>
                            </li>
                        </ul>
                    </nav>
                </>
            ) : (
                null
            )
            }

        </aside>
    );
};

export default Header;
