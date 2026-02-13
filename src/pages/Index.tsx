import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Creative from "@/components/Creative";
import Gallery from "@/components/Gallery";
import MediaCoverage from "@/components/MediaCoverage";
import TravelMap from "@/components/TravelMap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background"> {/* Changed to use theme color */}
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Creative />
        <Gallery />
        <MediaCoverage />
        <TravelMap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
