
import { createClient } from "@/lib/supabase/server";
import NavbarClient from "./NavbarClient";

interface NavbarProps {
    transparent?: boolean;
}

export default async function Navbar({ transparent = false }: NavbarProps) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    return <NavbarClient user={user} transparent={transparent} />;
}
