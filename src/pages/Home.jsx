import { useState } from "react";
import { Search, Filter, Dog, Cat } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import PetCard from "@/components/PetCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { petsData } from "@/data/pets";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [petType, setPetType] = useState("all");
    const [ageFilter, setAgeFilter] = useState("all");

    const filteredPets = petsData.filter((pet) => {
        const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = petType === "all" || pet.type === petType;

        let matchesAge = true;
        if (ageFilter === "puppy") matchesAge = pet.age.includes("month") || (parseInt(pet.age) <= 1);
        else if (ageFilter === "young") matchesAge = parseInt(pet.age) >= 1 && parseInt(pet.age) <= 3;
        else if (ageFilter === "adult") matchesAge = parseInt(pet.age) > 3;

        return matchesSearch && matchesType && matchesAge;
    });

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <HeroSection />

            {/* Pets Section */}
            <section id="pets" className="py-16 paw-pattern">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            Meet Our <span className="text-gradient">Adorable Pets</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Browse through our collection of lovable pets looking for their forever homes.
                            Use the filters to find your perfect match!
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="bg-card rounded-2xl p-4 md:p-6 shadow-card mb-10 border border-border">
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Search */}
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search by name or breed..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>

                            {/* Pet Type Filter */}
                            <Select value={petType} onValueChange={setPetType}>
                                <SelectTrigger className="w-full md:w-40">
                                    <SelectValue placeholder="Pet Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Pets</SelectItem>
                                    <SelectItem value="Dog">
                                        <div className="flex items-center gap-2">
                                            <Dog className="h-4 w-4" /> Dogs
                                        </div>
                                    </SelectItem>
                                    <SelectItem value="Cat">
                                        <div className="flex items-center gap-2">
                                            <Cat className="h-4 w-4" /> Cats
                                        </div>
                                    </SelectItem>
                                </SelectContent>
                            </Select>

                            {/* Age Filter */}
                            <Select value={ageFilter} onValueChange={setAgeFilter}>
                                <SelectTrigger className="w-full md:w-40">
                                    <SelectValue placeholder="Age" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Ages</SelectItem>
                                    <SelectItem value="puppy">Puppy/Kitten</SelectItem>
                                    <SelectItem value="young">Young (1-3 yrs)</SelectItem>
                                    <SelectItem value="adult">Adult (3+ yrs)</SelectItem>
                                </SelectContent>
                            </Select>

                            {/* Reset Button */}
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setSearchTerm("");
                                    setPetType("all");
                                    setAgeFilter("all");
                                }}
                                className="gap-2"
                            >
                                <Filter className="h-4 w-4" />
                                Reset
                            </Button>
                        </div>
                    </div>

                    {/* Results Count */}
                    <p className="text-muted-foreground mb-6">
                        Showing <span className="font-semibold text-foreground">{filteredPets.length}</span> pets
                    </p>

                    {/* Pet Grid */}
                    {filteredPets.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredPets.map((pet, index) => (
                                <div
                                    key={pet.id}
                                    className="animate-fade-in"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <PetCard pet={pet} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">🐾</div>
                            <h3 className="text-xl font-display font-bold mb-2">No pets found</h3>
                            <p className="text-muted-foreground">
                                Try adjusting your filters to see more adorable pets!
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Home;
