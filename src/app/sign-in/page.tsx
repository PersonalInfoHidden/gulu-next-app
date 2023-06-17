"use client";

import NavBar from "@/components/nav-bar";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();

    const supabase = createClientComponentClient();
    const handleSignIn = async () => {
        await supabase.auth.signInWithPassword({
            email: "liyeno6535@onlcool.com",
            password: "liyeno6535",
        });
        router.refresh();
    };

    return (
        <div className="min-h-screen">
            <NavBar />
            <div className="flex items-center justify-center flex-col w-full mt-36">
                <div className="shadow-xl rounded-lg grid px-12 py-8 gap-4 bg-neutral-400">
                    <div>
                        <h1 className="text-3xl font-bold">Sign in</h1>
                        <h2 className="text-base">
                            To personilize your catalog
                        </h2>
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
                            onClick={handleSignIn}
                            className="bg-white text-neutral-400 px-6 py-2 rounded-xl font-bold"
                        >
                            Sign in
                        </button>
                        <h2>{message}</h2>
                    </div>
                    <div className="flex justify-around items-center gap-4">
                        <hr className="w-full border"></hr>
                        <h2>Or</h2>
                        <hr className="w-full border"></hr>
                    </div>
                    <div className="grid place-items-center">
                        <a href="/sign-up" className="text-lg hover:underline">
                            Sign up
                        </a>
                        <h2>{message}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
