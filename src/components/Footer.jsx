import { PawPrint, Heart, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-card border-t border-border mt-auto">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="p-2 bg-primary rounded-xl">
                                <PawPrint className="h-5 w-5 text-primary-foreground" />
                            </div>
                            <span className="text-lg font-display font-bold">
                                Pet<span className="text-primary">Adopt</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm">
                            Connecting loving families with pets who need a forever home. Every pet deserves love.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {["Home", "About Us", "Available Pets", "Adoption Process"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pet Types */}
                    <div>
                        <h4 className="font-display font-bold mb-4">Find Pets</h4>
                        <ul className="space-y-2">
                            {["Dogs", "Cats", "Puppies", "Kittens"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display font-bold mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Mail className="h-4 w-4 text-primary" />
                                hello@petadopt.com
                            </li>
                            <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Phone className="h-4 w-4 text-primary" />
                                (555) 123-4567
                            </li>
                            <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4 text-primary" />
                                123 Pet Street, City
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © 2025 PetAdopt. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                        Made with <Heart className="h-4 w-4 text-primary fill-primary" /> for pets everywhere
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
