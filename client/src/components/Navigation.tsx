import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Home, Lightbulb, BookOpen } from "lucide-react";

export function Navigation() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Portfolio", icon: Home },
    { href: "/scenario-demo", label: "JS Scenarios", icon: Lightbulb },
    { href: "/microlearning", label: "Microlearning", icon: BookOpen },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#000b18]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,229,255,0.5)] transition-all">
              <span className="font-bold text-white text-sm">TM</span>
            </div>
            <span className="font-display font-bold text-lg text-white group-hover:text-primary transition-colors">
              Todd Morse
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = location === link.href;
              
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={cn(
                    "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex md:hidden">
            {/* Mobile menu could go here, keeping it simple for now */}
          </div>
        </div>
      </div>
    </nav>
  );
}
