"use client";

import { User } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

type HeaderClientProps = {
  user: User | null;
};

const HeaderClient = ({ user }: HeaderClientProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow flex justify-between items-center px-6 py-4">
      <Link href="/">
        <div className="text-xl font-bold tracking-tight">Product Catalog</div>
      </Link>

      <div className="relative">
        {user ? (
          <>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Welcome, {user.name}
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow border rounded-md">
                <button
                  onClick={() => signOut()}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (
          <a
            href="/api/auth/signin"
            className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200"
          >
            Login
          </a>
        )}
      </div>
    </header>
  );
};

export default HeaderClient;
