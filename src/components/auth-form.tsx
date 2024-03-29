"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AuthForm() {
    const supabase = createClientComponentClient();
    const origin = location.origin;
    return (
        <Auth
            supabaseClient={supabase}
            view="magic_link"
            appearance={{ theme: ThemeSupa }}
            theme="dark"
            showLinks={false}
            providers={[]}
            redirectTo={`${origin}/auth/callback`}
        />
    );
}
