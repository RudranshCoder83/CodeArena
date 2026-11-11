import NavBar from "./Components/NavBar";
import HeroSection from "./Section/HeroSection";
import HowItWorks from "./Section/HowItWorks";
import Features from "./Section/Features"; 
import Leaderboard from "./Section/LeaderBoard";
import Footer from "./Components/Footer";

function App() {
  return (
    // Yahan 'overflow-x-hidden' add kiya gaya hai
    <main id="top" className="overflow-x-hidden bg-[radial-gradient(circle_at_50%_12%,rgba(21,88,201,0.1),transparent_28rem)] min-h-screen">
      <NavBar />
      <HeroSection />
      <HowItWorks />
      <Features />
      <Leaderboard />
      <Footer />
    </main>
  );
}

export default App;