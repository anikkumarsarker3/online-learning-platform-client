// Header.jsx
import React, { useState } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services", hasDropdown: true },
        { name: "Contact", href: "/contact" },
        { name: "Blog", href: "/blog", hasDropdown: true },
    ];

    return (
        <header className="shadow-md bg-white">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
                {/* --- Logo --- */}
                <div className="flex items-center space-x-2">
                    <img
                        src="/logo.png"
                        alt="Chill IT"
                        className="w-28 object-contain"
                    />
                </div>

                {/* --- Desktop Nav --- */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1"
                        >
                            {link.name}
                            {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                        </a>
                    ))}

                    {/* Remote Support Button */}
                    <a
                        href="/support"
                        className="bg-sky-400 text-white font-semibold px-4 py-2 rounded hover:bg-sky-500 transition"
                    >
                        Remote Support
                    </a>

                    {/* Dynamic Search Icon */}
                    <button
                        onClick={() => setSearchVisible(!searchVisible)}
                        className="ml-3 text-gray-700 hover:text-blue-600"
                    >
                        <Search className="w-5 h-5" />
                    </button>
                </nav>

                {/* --- Mobile Menu Button --- */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-gray-800"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* --- Mobile Dropdown --- */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md border-t">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/support"
                        className="block m-3 bg-sky-400 text-white text-center py-2 rounded font-semibold"
                    >
                        Remote Support
                    </a>
                </div>
            )}

            {/* --- Search Input --- */}
            {searchVisible && (
                <div className="absolute top-full right-4 mt-2 bg-white shadow-md rounded-lg p-2 border">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
            )}
        </header>
    );
};

export default Header;
