"use client";

import AuthForm from "@/components/auth-form";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
    return (
        <div className="flex items-center justify-center flex-col w-full min-h-screen">
            <a href="/">Back</a>
            <SignInForm />
        </div>
    );
}

function SignInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();
    const supabase = createClientComponentClient();

    const handleSignUp = async () => {
        const response = await supabase.auth.signUp({
            email: "caraja2203@anomgo.com",
            password: "caraja2203",
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`,
            },
        });
        router.refresh();
        setMessage(
            response.error === null
                ? "Confirmation email sent"
                : response.error.message
        );
    };

    const handleSignIn = async () => {
        await supabase.auth.signInWithPassword({
            email,
            password,
        });
        router.refresh();
    };

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.refresh();
    };

    return (
        <div className="shadow-xl rounded-lg grid px-12 py-8 gap-4 bg-neutral-400">
            <div className="shadow-xl rounded-lg grid px-12 py-8 gap-4 bg-neutral-400">
                <div>
                    <h1 className="text-3xl font-bold">Sign in</h1>
                    <h2 className="text-base">To personilize your catalog</h2>
                </div>
                <input
                    className="border rounded-md px-3 py-1 text-black"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    className="border rounded-md px-3 py-1 text-black"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <div className="grid place-items-center">
                    <button
                        onClick={handleSignUp}
                        className="bg-white text-neutral-400 px-6 py-2 rounded-xl font-bold"
                    >
                        Sign Up
                    </button>
                    <h2>{message}</h2>
                </div>
            </div>
        </div>
    );
}
