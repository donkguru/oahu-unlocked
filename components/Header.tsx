'use client'

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Utensils, Map, Info, Flag, BedDouble, BookOpen, Users } from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Utensils },
  { name: "Restaurants", href: "#featured-restaurants", icon: Utensils },
  { name: "Adventures", href: "#adventures", icon: Map },
  { name: "Golf", href: "#golf", icon: Flag },
  { name: "Where to Stay", href: "#where-to-stay", icon: BedDouble },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "About", href: "/about", icon: Users },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    if (href === "/") {
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/");
      }
    } else if (href.startsWith("#")) {
      if (pathname === "/") {
        const element = document.getElementById(href.substring(1));
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/" + href);
      }
    }
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (!href.startsWith("#")) return pathname.startsWith(href);
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Utensils className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">OahuUnlocked</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => {
            const Icon = item.icon;
            const cls = `flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground ${
              isActive(item.href) ? "bg-accent text-accent-foreground" : "text-muted-foreground"
            }`
            if (!item.href.startsWith("#") && item.href !== "/") {
              return (
                <Link key={item.name} href={item.href} className={cls}>
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            }
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cls}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center space-x-4" />

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="md:hidden">
            <Button variant="ghost" size="sm" onClick={(e) => e.stopPropagation()}>
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col space-y-4 mt-6">
              <div className="flex items-center space-x-2 pb-4 border-b">
                <Utensils className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold">OahuUnlocked</span>
              </div>

              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground ${
                      isActive(item.href) ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
