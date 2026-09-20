import Hero from "./components/Hero";
import StatsStrip from "./components/StatsStrip";
import QuickInfo from "./components/QuickInfo";
import MessageSection from "./components/MessageSection";
import VisionPriorities from "./components/VisionPriorities";
import ExperienceCards from "./components/ExperienceCards";
import FeaturedVideo from "./components/FeaturedVideo";
import PhotoGallery from "./components/PhotoGallery";
import ConnectSection from "./components/ConnectSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <QuickInfo />
      <MessageSection />
      <VisionPriorities />
      <ExperienceCards />
      <FeaturedVideo />
      <PhotoGallery />
      <ConnectSection />
      <Footer />
    </>
  );
}
