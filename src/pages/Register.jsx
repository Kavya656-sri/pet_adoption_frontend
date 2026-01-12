import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, UserPlus, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
    const navigate = useNavigate();
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "user",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        toast({
            title: "Registration Successful! 🎉",
            description: "Welcome to PetAdopt! You can now browse and adopt pets.",
        });

        setTimeout(() => navigate("/"), 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 paw-pattern">
            <div className="w-full max-w-md">
                <div className="bg-card rounded-3xl shadow-card p-8 md:p-10 border border-border">
                    {/* Logo */}
                    <div className="text-center mb-8">
                        <Link to="/" className="inline-flex items-center gap-2 mb-6">
                            <div className="p-3 bg-primary rounded-2xl">
                                <PawPrint className="h-8 w-8 text-primary-foreground" />
                            </div>
                        </Link>
                        <h1 className="text-2xl font-display font-bold mb-2">
                            Join PetAdopt
                        </h1>
                        <p className="text-muted-foreground">
                            Create an account to start your adoption journey
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name */}
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="pl-10"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="pl-10"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="pl-10"
                                    required
                                    minLength={6}
                                />
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Must be at least 6 characters
                            </p>
                        </div>

                        {/* Role */}
                        <div className="space-y-2">
                            <Label>Account Type</Label>
                            <Select
                                value={formData.role}
                                onValueChange={(value) => setFormData({ ...formData, role: value })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="user">🐾 Pet Adopter</SelectItem>
                                    <SelectItem value="admin">🛡️ Admin / Shelter</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Submit Button */}
                        <Button type="submit" size="lg" className="w-full font-bold">
                            <UserPlus className="mr-2 h-5 w-5" />
                            Create Account
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-card px-4 text-muted-foreground">
                                Already have an account?
                            </span>
                        </div>
                    </div>

                    {/* Login Link */}
                    <div className="text-center">
                        <Link to="/login">
                            <Button variant="outline" className="w-full font-semibold">
                                Sign In Instead
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
