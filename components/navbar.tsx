import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link href="/blog" className="text-gray-700 hover:text-blue-600">
          Blog
        </Link>
        <Link href="/programmes" className="text-gray-700 hover:text-blue-600">
          Programmes
        </Link>
        <Link href="/team" className="text-gray-700 hover:text-blue-600">
          Team
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
