import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import MediaCoverage from "@/components/MediaCoverage";
import Portfolio from "@/components/Portfolio";
import TravelMap from "@/components/TravelMap";

const SectionPage = ({
  section,
}: {
  section:
    | "about"
    | "experience"
    | "portfolio"
    | "gallery"
    | "media"
    | "travel"
    | "contact";
}) => {
  const renderSection = () => {
    switch (section) {
      case "about":
        return <About />;
      case "experience":
        return <Experience />;
      case "portfolio":
        return <Portfolio />;
      case "gallery":
        return <Gallery />;
      case "media":
        return <MediaCoverage />;
      case "travel":
        return <TravelMap />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
};

export default SectionPage;
