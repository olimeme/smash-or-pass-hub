import * as React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { LuPlus } from "react-icons/lu";

export function Navbar() {
  return (
    <nav className="flex h-14">
      <div className="flex-none">
        <Link href="/">
          <p className="py-2 text-2xl font-bold">Smash or Pass hub</p>
        </Link>
      </div>
      <div className="grow"></div>
      <div className="flex-none">
        <div className="flex space-x-4">
          <Link href="/create">
            <Button>
              Create <LuPlus className="ml-2" />
            </Button>
          </Link>
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
