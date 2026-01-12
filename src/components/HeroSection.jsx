import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Search, PawPrint } from "lucide-react";
import heroImage from "@/assets/hero-pets.jpg";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="Happy pets"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 hero-gradient" />
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 py-24 md:py-32">
                <div className="max-w-2xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
                        <Heart className="h-4 w-4 text-primary-foreground" />
                        <span className="text-sm font-medium text-primary-foreground">
                            Over 10,000 pets found homes
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                        Find Your Forever Friend
                        <span className="inline-block ml-2">🐾</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        Every pet deserves a loving home. Browse adorable dogs and cats waiting to meet you and start your journey to unconditional love.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                        <Link to="/#pets">
                            <Button size="lg" variant="secondary" className="font-bold shadow-lg hover:shadow-xl transition-all">
                                <Search className="mr-2 h-5 w-5" />
                                View Pets
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button size="lg" variant="outline" className="font-bold bg-card/20 border-primary-foreground/30 text-primary-foreground hover:bg-card/30 hover:text-primary-foreground">
                                <PawPrint className="mr-2 h-5 w-5" />
                                Start Adopting
                            </Button>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        {[
                            { number: "500+", label: "Pets Available" },
                            { number: "10k+", label: "Happy Adoptions" },
                            { number: "50+", label: "Partner Shelters" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path
                        d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        fill="hsl(var(--background))"
                    />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
