import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, LogIn, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
    const navigate = useNavigate();
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        isAdmin: false,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        toast({
            title: "Login Successful! 🎉",
            description: formData.isAdmin
                ? "Welcome back, Admin!"
                : "Welcome back! Start exploring pets.",
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
                            Welcome Back!
                        </h1>
                        <p className="text-muted-foreground">
                            Sign in to continue your adoption journey
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
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
                                />
                            </div>
                        </div>

                        {/* Admin Toggle */}
                        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                            <Checkbox
                                id="admin"
                                checked={formData.isAdmin}
                                onCheckedChange={(checked) =>
                                    setFormData({ ...formData, isAdmin: checked })
                                }
                            />
                            <Label htmlFor="admin" className="text-sm cursor-pointer">
                                Login as Admin
                            </Label>
                        </div>

                        {/* Submit Button */}
                        <Button type="submit" size="lg" className="w-full font-bold">
                            <LogIn className="mr-2 h-5 w-5" />
                            Sign In
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-card px-4 text-muted-foreground">
                                New here?
                            </span>
                        </div>
                    </div>

                    {/* Register Link */}
                    <div className="text-center">
                        <p className="text-muted-foreground mb-4">
                            Don't have an account yet?
                        </p>
                        <Link to="/register">
                            <Button variant="outline" className="w-full font-semibold">
                                Create an Account
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
