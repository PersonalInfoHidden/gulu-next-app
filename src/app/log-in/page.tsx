"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const supabase = createClientComponentClient();

    const handleSignUp = async () => {
        await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`,
            },
        });
        router.refresh();
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
        <div className="flex items-center flex-col w-full">
            <div className=" w-1/3">
                <Auth
                    providers={[]}
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                />
            </div>
            <input
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <div>
                <button onClick={handleSignUp}>Sign up</button>
                <button onClick={handleSignIn}>Sign in</button>
                <button onClick={handleSignOut}>Sign out</button>
            </div>
        </div>
    );
}
