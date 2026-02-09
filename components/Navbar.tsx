
import { createClient } from "@/lib/supabase/server";
import NavbarClient from "./NavbarClient";

interface NavbarProps {
    transparent?: boolean;
}

export default async function Navbar({ transparent = false }: NavbarProps) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    let profile = null
    if (user) {
        const { data } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single()
        profile = data
    }

    return <NavbarClient user={user} profile={profile} transparent={transparent} />;
}
