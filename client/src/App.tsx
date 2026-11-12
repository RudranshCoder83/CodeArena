import { useState } from "react";
import NavBar from "./Components/NavBar";
import HeroSection from "./Section/HeroSection";
import HowItWorks from "./Section/HowItWorks";
import Features from "./Section/Features"; 
import Leaderboard from "./Section/LeaderBoard";
import Footer from "./Components/Footer";
import AuthModal from "./Components/AuthPage"; // Naya component

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <main id="top" className="overflow-x-hidden bg-[radial-gradient(circle_at_50%_12%,rgba(21,88,201,0.1),transparent_28rem)] min-h-screen relative">
      {/* NavBar ko function pass kiya taaki wo button click pe modal khol sake */}
      <NavBar onOpenAuth={() => setIsAuthOpen(true)} />
      
      <HeroSection />
      <HowItWorks />
      <Features />
      <Leaderboard />
      <Footer />

      {/* Agar isAuthOpen true hai, toh modal website ke upar dikhega */}
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </main>
  );
}

export default App;