import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceTracksExplorer } from "@/components/landing/ServiceTracksExplorer";

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <ServiceTracksExplorer />
      <Footer />
    </main>
  );
}
