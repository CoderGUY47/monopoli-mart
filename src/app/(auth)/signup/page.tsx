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
import { authClient } from "@/lib/auth-client";



export default function SignupPage() {
  const router = useRouter();  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("")

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const image = formData.get("image") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await authClient.signUp.email({
      name,
      image,
      email,
      password,
    },{
      onSuccess: (ctx) => {
            router.push("/login")
        },
        onError: (ctx) => {
            setError(ctx.error.message || "Failed to create account")
        },
    });
    setLoading(false)
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
          
          <div className="relative hidden md:block overflow-hidden order-2">
            <Image
              src={require("@/assets/vertical-15.jpg").default}
              alt="Natural Beauty"
              fill
              className="object-cover transition-transform duration-10000 hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#604235]/60 to-transparent"></div>
            <div className="absolute bottom-12 left-12 right-12 text-white">
              <h2 className="text-3xl font-playfair font-bold mb-4 leading-tight text-right">
                Your journey to <span className="italic">radiant</span> skin
                starts here.
              </h2>
              <p className="text-white/80 font-outfit text-sm max-w-xs ml-auto text-right">
                Create an account to track orders and save your favorite glow
                products.
              </p>
            </div>
          </div>

          
          <div className="p-8 md:p-12 flex flex-col justify-center bg-white order-1">
            <div className="mb-8 text-center md:text-left">
              <h1 className="text-4xl font-playfair font-bold text-[#1d1d1b] mb-3 text-nowrap">
                Join Monopoly-Mart
              </h1>
              <p className="text-gray-500 font-outfit">
                Create your premium account in seconds.
              </p>
            </div>

            {error && (
              <div className="p-4 mb-6 text-sm text-red-600 bg-red-50 border border-red-100 rounded-sm">
                {error}
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-1.5">
                <Label
                  htmlFor="name"
                  className="text-[#604235] font-bold text-[10px] uppercase tracking-[0.2em]"
                >
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Admin CoderGUY47"
                  className="rounded-none border-0 border-b border-gray-200 focus:border-[#604235] focus:ring-0 h-10 px-0 bg-transparent transition-all duration-300 placeholder:text-gray-300"
                />
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="image"
                  className="text-[#604235] font-bold text-[10px] uppercase tracking-[0.2em]"
                >
                  Profile Image URL
                </Label>
                <Input
                  id="image"
                  name="image"
                  type="text"
                  placeholder="https://example.com/avatar.jpg"
                  className="rounded-none border-0 border-b border-gray-200 focus:border-[#604235] focus:ring-0 h-10 px-0 bg-transparent transition-all duration-300 placeholder:text-gray-300"
                />
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="email"
                  className="text-[#604235] font-bold text-[10px] uppercase tracking-[0.2em]"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="username@gmail.com"
                  className="rounded-none border-0 border-b border-gray-200 focus:border-[#604235] focus:ring-0 h-10 px-0 bg-transparent transition-all duration-300 placeholder:text-gray-300"
                />
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="password"
                  college-info=""
                  className="text-[#604235] font-bold text-[10px] uppercase tracking-[0.2em]"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="rounded-none border-0 border-b border-gray-200 focus:border-[#604235] focus:ring-0 h-10 px-0 bg-transparent transition-all duration-300 placeholder:text-gray-300"
                />
              </div>

              <div className="pt-4 space-y-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1a2b23] hover:bg-rose-600 text-white font-bold h-14 rounded-none transition-all duration-500 tracking-widest text-xs"
                >
                  {loading ? "Creating Account ..." : "Create Account"}
                </Button>

                <div className="relative flex items-center py-2">
                  <div className="grow border-t border-gray-100"></div>
                  <span className="shrink mx-4 text-[9px] uppercase tracking-widest text-gray-400 font-medium">
                    Or continue with
                  </span>
                  <div className="grow border-t border-gray-100"></div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-gray-200 rounded-none h-14 hover:bg-gray-50 flex items-center justify-center gap-3 font-bold text-[10px] tracking-widest text-gray-700 transition-all duration-300"
                >
                  <FcGoogle className="w-5 h-5" />
                  GOOGLE
                </Button>
              </div>
            </form>

            <p className="mt-8 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-rose-500 font-bold italic hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
