import AboutSection from "./components/AboutSection.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Navbar from "./components/Navbar.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import EmailSection from "./components/EmailSection.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#22272E]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
