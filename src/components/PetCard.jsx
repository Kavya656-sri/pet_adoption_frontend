import { Link } from "react-router-dom";
import { MapPin, Calendar, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PetCard = ({ pet }) => {
    return (
        <div className="group bg-card rounded-2xl overflow-hidden card-hover border border-border">
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Type Badge */}
                <Badge
                    variant="secondary"
                    className="absolute top-3 left-3 font-semibold"
                >
                    {pet.type}
                </Badge>

                {/* Favorite Button */}
                <button className="absolute top-3 right-3 p-2 bg-card/80 backdrop-blur-sm rounded-full hover:bg-card transition-colors group/fav">
                    <Heart className="h-4 w-4 text-muted-foreground group-hover/fav:text-primary group-hover/fav:fill-primary transition-colors" />
                </button>

                {/* Quick Action */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <Link to={`/pet/${pet.id}`}>
                        <Button className="w-full font-bold shadow-lg">
                            View Details
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Name & Gender */}
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-display font-bold text-card-foreground">
                        {pet.name}
                    </h3>
                    <Badge variant={pet.gender === "Male" ? "default" : "outline"} className="text-xs">
                        {pet.gender}
                    </Badge>
                </div>

                {/* Breed */}
                <p className="text-muted-foreground text-sm mb-3">{pet.breed}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{pet.age}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{pet.location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetCard;
