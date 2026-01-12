import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Send, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { petsData } from "@/data/pets";
import { useToast } from "@/hooks/use-toast";

const AdoptForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { toast } = useToast();
    const pet = petsData.find((p) => p.id === id);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        reason: "",
        agreeTerms: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.agreeTerms) {
            toast({
                title: "Please agree to terms",
                description: "You must agree to the adoption terms to proceed.",
                variant: "destructive",
            });
            return;
        }

        toast({
            title: "Application Submitted! 🎉",
            description: `Thank you for your interest in adopting ${pet?.name}. We'll contact you soon!`,
        });

        setTimeout(() => navigate("/"), 2000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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
            <div className="container mx-auto px-4 max-w-2xl">
                {/* Back Button */}
                <Button
                    variant="ghost"
                    onClick={() => navigate(-1)}
                    className="mb-6 gap-2"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                </Button>

                <div className="bg-card rounded-3xl shadow-card p-8 md:p-12 border border-border">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                            <Heart className="h-4 w-4" />
                            <span className="font-semibold">Adoption Request</span>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-display font-bold mb-2">
                            Adopt {pet.name}
                        </h1>
                        <p className="text-muted-foreground">
                            Fill out the form below to express your interest in adopting this lovely {pet.type.toLowerCase()}.
                        </p>
                    </div>

                    {/* Pet Preview */}
                    <div className="flex items-center gap-4 bg-muted/50 rounded-2xl p-4 mb-8">
                        <img
                            src={pet.image}
                            alt={pet.name}
                            className="w-20 h-20 rounded-xl object-cover"
                        />
                        <div>
                            <h3 className="font-display font-bold">{pet.name}</h3>
                            <p className="text-sm text-muted-foreground">
                                {pet.breed} • {pet.age} • {pet.location}
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div className="space-y-2">
                            <Label htmlFor="name">Your Full Name *</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="(555) 123-4567"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Address */}
                        <div className="space-y-2">
                            <Label htmlFor="address">Your Address *</Label>
                            <Input
                                id="address"
                                name="address"
                                placeholder="123 Main St, City, State"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Reason */}
                        <div className="space-y-2">
                            <Label htmlFor="reason">Why do you want to adopt {pet.name}? *</Label>
                            <Textarea
                                id="reason"
                                name="reason"
                                placeholder={`Tell us why you'd be a great fit for ${pet.name}...`}
                                value={formData.reason}
                                onChange={handleChange}
                                rows={4}
                                required
                            />
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
                            <Checkbox
                                id="terms"
                                checked={formData.agreeTerms}
                                onCheckedChange={(checked) =>
                                    setFormData({ ...formData, agreeTerms: checked })
                                }
                            />
                            <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                                I agree to the adoption terms and conditions. I understand that pet ownership
                                is a responsibility and commitment to provide proper care, love, and attention.
                            </Label>
                        </div>

                        {/* Submit Button */}
                        <Button type="submit" size="lg" className="w-full font-bold text-lg">
                            <Send className="mr-2 h-5 w-5" />
                            Submit Request
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdoptForm;
