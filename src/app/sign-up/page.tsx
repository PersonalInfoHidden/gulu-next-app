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
            <div className="col-6 auth-widget">
                <AuthForm />
            </div>
        </div>
    );
}
