
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SparkFeed from "@/components/SparkFeed";

export default function SparkPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <SparkFeed />
            <Footer />
        </main>
    );
}
