import { Toaster } from "react-hot-toast";
import NavBar from "./Components/NavBar";
import HeroSection from "./Section/HeroSection";
import HowItWorks from "./Section/HowItWorks";
import Features from "./Section/Features";
import Leaderboard from "./Section/LeaderBoard";
import Footer from "./Components/Footer";
import AuthModal from "./Components/AuthPage";

function App() {
  return (
    <main id="top" className="overflow-x-hidden bg-[radial-gradient(circle_at_50%_12%,rgba(21,88,201,0.1),transparent_28rem)] min-h-screen relative">
      {/* Toast notifications ke liye */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#0d1119',
            color: '#f6f8ff',
            border: '1px solid #3176ec',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '12px'
          }
        }}
      />

      <NavBar />
      <HeroSection />
      <HowItWorks />
      <Features />
      <Leaderboard />
      <Footer />
      <AuthModal />
    </main>
  );
}

export default App;