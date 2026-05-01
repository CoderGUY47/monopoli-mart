"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      
      console.log("Logging in with:", formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push("/");
    } catch (err: any) {
      setError(err.message || "Invalid credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-rose-50/50 px-4 py-8">
      <Link 
        href="/" 
        className="absolute top-8 left-8 flex items-center text-[#1a2b23] hover:gap-2 transition-all font-medium group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:mr-0" /> Back to Home
      </Link>

      <Card className="w-full max-w-5xl overflow-hidden border-none shadow-2xl rounded-none md:rounded-sm">
        <CardContent className="grid p-0 md:grid-cols-2 min-h-[600px]">
          
          <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
            <div className="mb-10 text-center md:text-left">
              <h1 className="text-4xl font-playfair font-bold text-[#1d1d1b] mb-3">Welcome Back</h1>
              <p className="text-gray-500 font-outfit">Sign in to your account to continue shopping.</p>
            </div>

            {error && (
              <div className="p-4 mb-6 text-sm text-red-600 bg-red-50 border border-red-100 rounded-sm">
                {error}
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#604235] font-semibold text-sm uppercase tracking-wider">Email Address</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="name@example.com" 
                  required 
                  className="rounded-none border-gray-200 focus:border-[#604235] focus:ring-0 h-12"
                  value={formData.email} 
                  onChange={handleChange} 
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-[#604235] font-semibold text-sm uppercase tracking-wider">Password</Label>
                  <Link href="#" className="text-xs text-gray-400 hover:text-[#604235] transition-colors">Forgot Password?</Link>
                </div>
                <Input 
                  id="password" 
                  name="password" 
                  type="password" 
                  placeholder="••••••••" 
                  required 
                  className="rounded-none border-gray-200 focus:border-[#604235] focus:ring-0 h-12"
                  value={formData.password} 
                  onChange={handleChange} 
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#1a2b23] hover:bg-rose-600 text-white font-bold h-14 rounded-none transition-all duration-300 transform active:scale-[0.98]" 
                disabled={loading}
              >
                {loading ? "Authenticating..." : "SIGN IN"}
              </Button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-100"></span>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold text-gray-400">
                <span className="bg-white px-4">Or continue with</span>
              </div>
            </div>

            <Button 
              type="button" 
              variant="outline" 
              className="w-full border-gray-200 rounded-none h-14 hover:bg-gray-50 flex items-center justify-center gap-3 font-semibold text-gray-700"
            >
              <FcGoogle className="w-5 h-5" />
              GOOGLE
            </Button>

            <p className="mt-10 text-center text-sm text-gray-500">
              New to Monopoly-Mart?{" "}
              <Link href="/signup" className="text-rose-600 font-bold italic hover:underline">
                Create Account
              </Link>
            </p>
          </div>

          
          <div className="relative hidden md:block overflow-hidden">
            <Image
              src={require("@/assets/vertical-12.jpg").default}
              alt="Premium Product"
              fill
              className="object-cover transition-transform duration-10000 hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#604235]/60 to-transparent"></div>
            <div className="absolute bottom-12 left-12 right-12 text-white">
              <h2 className="text-3xl font-playfair font-bold mb-4 leading-tight">
                Empowering your <span className="italic">natural</span> beauty every day.
              </h2>
              <p className="text-white/80 font-outfit text-sm max-w-xs">
                Join our community and discover premium skincare crafted for the cinematic life.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}