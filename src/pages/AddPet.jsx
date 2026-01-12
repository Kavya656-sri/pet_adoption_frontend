import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, RotateCcw, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const AddPet = () => {
    const navigate = useNavigate();
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        name: "",
        type: "",
        breed: "",
        age: "",
        gender: "",
        location: "",
        description: "",
        imageUrl: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleReset = () => {
        setFormData({
            name: "",
            type: "",
            breed: "",
            age: "",
            gender: "",
            location: "",
            description: "",
            imageUrl: "",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        toast({
            title: "Pet Added Successfully! 🐾",
            description: `${formData.name} has been added to the adoption list.`,
        });

        setTimeout(() => navigate("/"), 2000);
    };

    return (
        <div className="min-h-screen py-8 paw-pattern">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="bg-card rounded-3xl shadow-card p-8 md:p-12 border border-border">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary rounded-full px-4 py-2 mb-4">
                            <Shield className="h-4 w-4" />
                            <span className="font-semibold">Admin Panel</span>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-display font-bold mb-2">
                            Add New Pet
                        </h1>
                        <p className="text-muted-foreground">
                            Add a new pet to the adoption database.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div className="space-y-2">
                            <Label htmlFor="name">Pet Name *</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="e.g., Max, Luna, Buddy"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Pet Type & Breed */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Pet Type *</Label>
                                <Select
                                    value={formData.type}
                                    onValueChange={(value) => handleSelectChange("type", value)}
                                    required
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Dog">🐕 Dog</SelectItem>
                                        <SelectItem value="Cat">🐈 Cat</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="breed">Breed *</Label>
                                <Input
                                    id="breed"
                                    name="breed"
                                    placeholder="e.g., Golden Retriever"
                                    value={formData.breed}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Age & Gender */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="age">Age *</Label>
                                <Input
                                    id="age"
                                    name="age"
                                    placeholder="e.g., 2 years, 6 months"
                                    value={formData.age}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Gender *</Label>
                                <Select
                                    value={formData.gender}
                                    onValueChange={(value) => handleSelectChange("gender", value)}
                                    required
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Male">Male</SelectItem>
                                        <SelectItem value="Female">Female</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="space-y-2">
                            <Label htmlFor="location">Location *</Label>
                            <Input
                                id="location"
                                name="location"
                                placeholder="e.g., New York, Los Angeles"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Image URL */}
                        <div className="space-y-2">
                            <Label htmlFor="imageUrl">Image URL</Label>
                            <Input
                                id="imageUrl"
                                name="imageUrl"
                                type="url"
                                placeholder="https://example.com/pet-image.jpg"
                                value={formData.imageUrl}
                                onChange={handleChange}
                            />
                            <p className="text-xs text-muted-foreground">
                                Paste a URL to the pet's photo
                            </p>
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <Label htmlFor="description">Description *</Label>
                            <Textarea
                                id="description"
                                name="description"
                                placeholder="Describe the pet's personality, habits, and what makes them special..."
                                value={formData.description}
                                onChange={handleChange}
                                rows={4}
                                required
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button type="submit" size="lg" className="flex-1 font-bold">
                                <Plus className="mr-2 h-5 w-5" />
                                Add Pet
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                size="lg"
                                onClick={handleReset}
                                className="font-bold"
                            >
                                <RotateCcw className="mr-2 h-5 w-5" />
                                Reset
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPet;
