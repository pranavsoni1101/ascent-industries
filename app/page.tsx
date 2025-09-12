import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-76px)] sm:min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        >
          <source src="/cnc_vid.mp4" type="video/mp4" />
        </video>

        {/* Overlay for extra readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content inside Container */}
        <Container className="relative z-10 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1
              className="scroll-m-20 
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl  
                font-bold tracking-tight text-white"
            >
              Precision That Powers Industries
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200">
              Since 2011, delivering high-quality machined components and sheet
              metal solutions that meet global standards
            </p>
            <Button className="mt-10 mx-auto bg-orange-400 hover:bg-orange-500 text-white inline-flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Get a Quote
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
