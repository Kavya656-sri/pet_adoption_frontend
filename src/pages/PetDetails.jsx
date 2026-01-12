import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Heart, Shield, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { petsData } from "@/data/pets";

const PetDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const pet = petsData.find((p) => p.id === id);

    if (!pet) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">🐾</div>
                    <h2 className="text-2xl font-display font-bold mb-4">Pet Not Found</h2>
                    <Link to="/">
                        <Button>Back to Home</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-8 paw-pattern">
            <div className="container mx-auto px-4">
                {/* Back Button */}
                <Button
                    variant="ghost"
                    onClick={() => navigate(-1)}
                    className="mb-6 gap-2"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                </Button>

                <div className="bg-card rounded-3xl shadow-card overflow-hidden border border-border">
                    <div className="grid md:grid-cols-2 gap-0">
                        {/* Image Section */}
                        <div className="relative aspect-square md:aspect-auto">
                            <img
                                src={pet.image}
                                alt={pet.name}
                                className="w-full h-full object-cover"
                            />
                            <button className="absolute top-4 right-4 p-3 bg-card/80 backdrop-blur-sm rounded-full hover:bg-card transition-colors group">
                                <Heart className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:fill-primary transition-colors" />
                            </button>
                        </div>

                        {/* Details Section */}
                        <div className="p-8 md:p-12 flex flex-col">
                            {/* Header */}
                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <Badge variant="secondary" className="text-sm font-semibold">
                                        {pet.type}
                                    </Badge>
                                    <Badge variant={pet.gender === "Male" ? "default" : "outline"}>
                                        {pet.gender}
                                    </Badge>
                                </div>
                                <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
                                    {pet.name}
                                </h1>
                                <p className="text-lg text-muted-foreground">{pet.breed}</p>
                            </div>

                            {/* Info Cards */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-muted/50 rounded-xl p-4">
                                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                        <Calendar className="h-4 w-4" />
                                        <span className="text-sm">Age</span>
                                    </div>
                                    <p className="font-semibold">{pet.age}</p>
                                </div>
                                <div className="bg-muted/50 rounded-xl p-4">
                                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                        <MapPin className="h-4 w-4" />
                                        <span className="text-sm">Location</span>
                                    </div>
                                    <p className="font-semibold">{pet.location}</p>
                                </div>
                                <div className="bg-muted/50 rounded-xl p-4">
                                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                        <User className="h-4 w-4" />
                                        <span className="text-sm">Gender</span>
                                    </div>
                                    <p className="font-semibold">{pet.gender}</p>
                                </div>
                                <div className="bg-muted/50 rounded-xl p-4">
                                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                        <Shield className="h-4 w-4" />
                                        <span className="text-sm">Vaccinated</span>
                                    </div>
                                    <p className={`font-semibold ${pet.vaccinated ? "text-secondary" : "text-destructive"}`}>
                                        {pet.vaccinated ? "Yes ✓" : "Pending"}
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-8 flex-1">
                                <h3 className="font-display font-bold text-lg mb-3">About {pet.name}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {pet.description}
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                                <Link to={`/adopt/${pet.id}`} className="flex-1">
                                    <Button size="lg" className="w-full font-bold text-lg">
                                        <Heart className="mr-2 h-5 w-5" />
                                        Adopt Me
                                    </Button>
                                </Link>
                                <Link to="/">
                                    <Button size="lg" variant="outline" className="w-full font-bold">
                                        <ArrowLeft className="mr-2 h-5 w-5" />
                                        Back to Home
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetails;
