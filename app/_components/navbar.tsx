"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="flex items-center justify-between border-b border-solid px-8 py-4">
        <div className="flex items-center gap-10">
          <Image src={"/logo.svg"} width={173} height={39} alt="VRL Finance" />
          <Link
            href={"/"}
            className={
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            }
          >
            Dashboard
          </Link>
          <Link
            href={"transactions"}
            className={
              pathname === "/transactions"
                ? "text-primary"
                : "text-muted-foreground"
            }
          >
            Transações
          </Link>
          <Link
            href={"subscription"}
            className={
              pathname === "/subscription"
                ? "text-primary"
                : "text-muted-foreground"
            }
          >
            Assinatura
          </Link>
        </div>

        <UserButton showName />
      </nav>
    </>
  );
};

export default Navbar;
