"use client";
import "./globals.css";
import { Source_Sans_3 } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Key } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import Head from "next/head";
import { usePathname, useRouter } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleNavigation = (href: string) => {
    setIsNavigating(true);
    router.push(href);
  };

  return (
    <html lang="en">
      <Head>
        <title>Golden Key Foundation - Unlocking Christ's Compassion</title>
        <meta
          name="description"
          content="Inspiring and transforming lives through Christ's compassion, creating a global community built on faith, love, and service."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Golden Key Foundation, charity, Christian charity, community service, faith-based organization, volunteer, donate"
        />
        <meta name="author" content="Golden Key Foundation" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://goldenkeyfoundation.org/" />
        <meta
          property="og:title"
          content="Golden Key Foundation - Unlocking Christ's Compassion"
        />
        <meta
          property="og:description"
          content="Inspiring and transforming lives through Christ's compassion, creating a global community built on faith, love, and service."
        />
        <meta property="og:image" content="/app/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://goldenkeyfoundation.org/"
        />
        <meta
          property="twitter:title"
          content="Golden Key Foundation - Unlocking Christ's Compassion"
        />
        <meta
          property="twitter:description"
          content="Inspiring and transforming lives through Christ's compassion, creating a global community built on faith, love, and service."
        />
        <meta property="twitter:image" content="/app/logo.png" />

        {/* Favicon */}
        <link rel="icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://goldenkeyfoundation.org/" />
      </Head>
      <body className={`${sourceSans.className}`}>
        <header className="bg-gradient-to-r from-[#fdf3d5] to-[#cee1ba] shadow-sm">
          <nav className="fixed w-full bg-gradient-to-r from-[#fdf3d5] to-[#cee1ba] backdrop-blur-sm z-50 shadow-sm md:py-2">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center cursor-pointer h-14 w-14 max-md:h-10 max-md:w-10">
                  <Link
                    href="/"
                    className="text-black font-semibold hover:text-[#604a05] transition-colors"
                  >
                    <Image
                      src={"/app/logo.png"}
                      alt="logo"
                      width={100}
                      height={100}
                      className="rounded-full object-cover"
                    />
                  </Link>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  <Link
                    href="/"
                    className={`text-black font-semibold hover:text-[#604a05] transition-colors ${
                      pathname === "/" ? "text-[#604a05] font-medium" : ""
                    }`}
                    onClick={() => handleNavigation("/")}
                  >
                    {isNavigating && pathname === "/" ? (
                      <div className="flex items-center space-x-2">
                        <span>Home</span>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#604a05]"></div>
                      </div>
                    ) : (
                      "Home"
                    )}
                  </Link>
                  <Link
                    href="/about"
                    className={`text-black font-semibold hover:text-[#604a05] transition-colors ${
                      pathname === "/about" ? "text-[#604a05] font-medium" : ""
                    }`}
                    onClick={() => handleNavigation("/about")}
                  >
                    {isNavigating && pathname === "/about" ? (
                      <div className="flex items-center space-x-2">
                        <span>About</span>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#604a05]"></div>
                      </div>
                    ) : (
                      "About"
                    )}
                  </Link>
                  <Link
                    href="/programmes"
                    className={`text-black font-semibold hover:text-[#604a05] transition-colors ${
                      pathname === "/programmes"
                        ? "text-[#604a05] font-medium"
                        : ""
                    }`}
                    onClick={() => handleNavigation("/programmes")}
                  >
                    {isNavigating && pathname === "/programmes" ? (
                      <div className="flex items-center space-x-2">
                        <span>Programmes</span>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#604a05]"></div>
                      </div>
                    ) : (
                      "Programmes"
                    )}
                  </Link>
                  <Link
                    href="/team"
                    className={`text-black font-semibold hover:text-[#604a05] transition-colors ${
                      pathname === "/team" ? "text-[#604a05] font-medium" : ""
                    }`}
                    onClick={() => handleNavigation("/team")}
                  >
                    {isNavigating && pathname === "/team" ? (
                      <div className="flex items-center space-x-2">
                        <span>Team</span>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#604a05]"></div>
                      </div>
                    ) : (
                      "Team"
                    )}
                  </Link>
                  <Link
                    href="/volunteer"
                    className={`text-black font-semibold hover:text-[#604a05] transition-colors ${
                      pathname === "/volunteer"
                        ? "text-[#604a05] font-medium"
                        : ""
                    }`}
                    onClick={() => handleNavigation("/volunteer")}
                  >
                    {isNavigating && pathname === "/volunteer" ? (
                      <div className="flex items-center space-x-2">
                        <span>Volunteer</span>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#604a05]"></div>
                      </div>
                    ) : (
                      "Volunteer"
                    )}
                  </Link>
                  <Link
                    href="/blog"
                    className={`text-black font-semibold hover:text-[#604a05] transition-colors ${
                      pathname === "/blog" ? "text-[#604a05] font-medium" : ""
                    }`}
                    onClick={() => handleNavigation("/blog")}
                  >
                    {isNavigating && pathname === "/blog" ? (
                      <div className="flex items-center space-x-2">
                        <span>Blog</span>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#604a05]"></div>
                      </div>
                    ) : (
                      "Blog"
                    )}
                  </Link>
                  <Link
                    href="/contact"
                    className={`text-black font-semibold hover:text-[#604a05] transition-colors ${
                      pathname === "/contact"
                        ? "text-[#604a05] font-medium"
                        : ""
                    }`}
                    onClick={() => handleNavigation("/contact")}
                  >
                    {isNavigating && pathname === "/contact" ? (
                      <div className="flex items-center space-x-2">
                        <span>Contact</span>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#604a05]"></div>
                      </div>
                    ) : (
                      "Contact"
                    )}
                  </Link>
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://instagram.com/goldenkey_foundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#604a05]"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/goldenkeyf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#604a05]"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  {/* Mobile Menu Button */}
                  <button
                    className="md:hidden text-black hover:text-[#604a05] transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                  >
                    {isMenuOpen ? (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* Mobile Side Menu */}
        <div
          className={`fixed inset-0 z-50 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Side Menu Content */}
          <div className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#fdf3d5] to-[#cee1ba] shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="p-4 border-b border-[#604a05]/20">
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    className="text-black font-semibold hover:text-[#604a05] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Image
                      src={"/app/logo.png"}
                      alt="logo"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-black hover:text-[#604a05] transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 p-4 space-y-4">
                <Link
                  href="/"
                  className="block text-black font-semibold hover:text-[#604a05] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-black font-semibold hover:text-[#604a05] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/programmes"
                  className="block text-black font-semibold hover:text-[#604a05] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Programmes
                </Link>
                <Link
                  href="/team"
                  className="block text-black font-semibold hover:text-[#604a05] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Team
                </Link>
                <Link
                  href="/volunteer"
                  className="block text-black font-semibold hover:text-[#604a05] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Volunteer
                </Link>
                <Link
                  href="/blog"
                  className="block text-black font-semibold hover:text-[#604a05] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="block text-black font-semibold hover:text-[#604a05] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>

              {/* Social Links */}
              <div className="p-4 border-t border-[#604a05]/20">
                <div className="flex items-center space-x-4">
                  <a
                    href="https://instagram.com/goldenkey_foundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#604a05] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/goldenkeyf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#604a05] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main>{children}</main>
        <footer className="bg-gray-900 text-white py-12 relative">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/31744029/pexels-photo-31744029/free-photo-of-joyful-children-in-rural-abuja-nigeria.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="People helping community"
              fill
              className="object-cover brightness-50 opacity-40"
              priority
            />
          </div>
          <div className="relative container mx-auto h-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About GKF</h3>
                <p className="text-gray-300">
                  A global outreach and UK registered charity organization
                  delivering mission through faith-driven initiatives.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="/about" className="hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/programmes" className="hover:text-white">
                      Our Programs
                    </Link>
                  </li>
                  <li>
                    <Link href="/get-involved" className="hover:text-white">
                      Get Involved
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Flat 17, Tay Court</li>
                  <li>Moor Town, Leeds City, LS17 6UZ</li>
                  <li>Phone: +447375829701</li>
                  <li>
                    <div className="flex items-center space-x-4">
                      <div>Follow us:</div>
                      <a
                        href="https://instagram.com/goldenkey_foundation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#e3af0c]"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a
                        href="https://facebook.com/goldenkeyf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#e3af0c]"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                <p className="text-gray-300 mb-2">
                  Stay updated with our latest initiatives and community impact.
                </p>
                <Input
                  className="text-black"
                  placeholder="someone@domain.com"
                />
                <Button className="mt-2 w-full hover:bg-[#7bab4a] bg-[#67903e] text-white hover:text-white">
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-400 text-center text-gray-300">
              <p>
                &copy; {new Date().getFullYear()} Golden Key Foundation. All
                rights reserved.
              </p>
            </div>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
