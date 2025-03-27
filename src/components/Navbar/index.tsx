"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { translations } from "@/lib/i18n";

export function Navbar({ lang, setLang }: { lang: "en" | "pt", setLang: (lang: "en" | "pt") => void }) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const t = translations[lang];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Digital Agency
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/" 
              className={pathname === "/" ? "text-primary" : "text-foreground hover:text-primary transition-colors"}
            >
              {t.nav.home}
            </Link>
            <Link 
              href="/about" 
              className={pathname === "/about" ? "text-primary" : "text-foreground hover:text-primary transition-colors"}
            >
              {t.nav.about}
            </Link>
            
            <select 
              value={lang}
              onChange={(e) => setLang(e.target.value as "en" | "pt")}
              className="bg-transparent border-none focus:outline-none"
            >
              <option value="pt">PT</option>
              <option value="en">EN</option>
            </select>
            
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
        </div>
      </div>
    </nav>
  );
}