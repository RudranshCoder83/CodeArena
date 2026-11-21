import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./Context/AuthContext";

// Landing page
import NavBar from "./Components/NavBar";
import HeroSection from "./Section/HeroSection";
import HowItWorks from "./Section/HowItWorks";
import Features from "./Section/Features";
import Leaderboard from "./Section/LeaderBoard";
import Footer from "./Components/Footer";
import AuthModal from "./Components/AuthPage";

// Dashboard
import DashboardLayout from "./dashboard/DashboardLayout";
import HomePage from "./dashboard/HomePage";
import LeaderboardPage from "./dashboard/LeaderboardPage";
import HistoryPage from "./dashboard/HistoryPage";
import FriendsPage from "./dashboard/FriendsPage";
import ProfilePage from "./dashboard/ProfilePage";

// Auth
import AuthSuccess from "./pages/AuthSuccess";

function LandingPage() {
  return (
    <main id="top" className="overflow-x-hidden bg-[radial-gradient(circle_at_50%_12%,rgba(21,88,201,0.1),transparent_28rem)] min-h-screen relative">
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

// Protected route — login nahi hai to landing pe bhejo
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAppContext();
  if (loading) return (
    <div className="min-h-screen bg-[#030407] flex items-center justify-center">
      <p className="text-[#5f8bdb] font-['JetBrains_Mono',monospace] text-[11px] tracking-[0.2em]">LOADING...</p>
    </div>
  );
  if (!user) return <Navigate to="/" replace />;
  return <>{children}</>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#0d1119",
            color: "#f6f8ff",
            border: "1px solid #3176ec",
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "12px",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/success" element={<AuthSuccess />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="leaderboard" element={<LeaderboardPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="friends" element={<FriendsPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
