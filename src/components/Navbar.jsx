import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Login", path: "/login" },
        { name: "Register", path: "/register" },
        { name: "Add Pet", path: "/add-pet" },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="p-2 bg-primary rounded-xl group-hover:animate-wiggle transition-transform">
                            <PawPrint className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <span className="text-xl font-display font-bold text-foreground">
                            Pet<span className="text-primary">Adopt</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link key={link.path} to={link.path}>
                                <Button
                                    variant={isActive(link.path) ? "default" : "ghost"}
                                    className={`font-semibold ${isActive(link.path) ? "" : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {link.name}
                                </Button>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-border animate-fade-in">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Button
                                        variant={isActive(link.path) ? "default" : "ghost"}
                                        className={`w-full justify-start font-semibold ${isActive(link.path) ? "" : "text-muted-foreground"
                                            }`}
                                    >
                                        {link.name}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
