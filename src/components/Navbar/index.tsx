"use client";

import {useEffect, useState} from "react";
import {Moon, Sun} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Button} from "@/components/ui/button";
import {useTheme} from "next-themes";
import Image from "next/image";
import Silo from "@/assets/silo-logo.svg";
import {cn} from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  const {theme, setTheme} = useTheme();
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      const handleScroll = () => {
        setShowNavbar(window.scrollY > window.innerHeight / 1.8);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setShowNavbar(true);
    }
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-background/80 backdrop-blur-md border rounded-xl shadow-lg transition-all duration-300",
        showNavbar
          ? "opacity-100 visible transition-opacity transition-600"
          : "opacity-0 invisible transition-opacity transition-300"
      )}
    >
      <div className="flex items-center gap-6 px-6 py-3">
        <Link href="/" className="text-xl font-bold">
          <Image src={Silo} alt="Silo Logo" className="logo-style" />
        </Link>

        <Link
          href="/"
          className={cn(
            "text-sm font-medium transition-colors",
            pathname === "/"
              ? "text-primary"
              : "text-foreground hover:text-primary"
          )}
        >
          Início
        </Link>
        <Link
          href="/about"
          className={cn(
            "text-sm font-medium transition-colors",
            pathname === "/about"
              ? "text-primary"
              : "text-foreground hover:text-primary"
          )}
        >
          Sobre
        </Link>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
