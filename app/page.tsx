import { Container } from "@/components/container";
import { Counter } from "@/components/counter";
import { Button } from "@/components/ui/button";
import { Factory, FileText, Globe, Handshake, Settings } from "lucide-react";

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

      <section className="py-20 bg-muted/30">
      <Container>
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Over a Decade of Precision Manufacturing
        </h2>

        {/* Text + Counters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: About Text */}
          <div className="text-foreground/80 leading-relaxed space-y-4">
            <p>
              Ascent Industries has been delivering precision-machined, milled,
              and sheet metal components since 2011. With over 13 years of
              expertise and 180+ successful projects, we continue to set
              benchmarks in quality and reliability for industries worldwide.
            </p>
            <p>
              Starting with a single CNC turning machine, we’ve grown into a
              trusted manufacturing partner equipped with advanced CNC and sheet
              metal fabrication facilities — helping industries achieve global
              standards with locally crafted precision.
            </p>
          </div>

          {/* Right: Counters in boxes */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-orange-500">
                <Counter from={0} to={13} suffix="+" />
              </h3>
              <p className="mt-2 text-sm font-medium text-foreground/70">
                Years of Experience
              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-orange-500">
                <Counter from={0} to={180} suffix="+" />
              </h3>
              <p className="mt-2 text-sm font-medium text-foreground/70">
                Projects Delivered
              </p>
            </div>
          </div>
        </div>

        {/* Pillars Below */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <Settings className="mx-auto h-10 w-10 text-orange-500" />
            <h4 className="mt-4 text-lg font-semibold">Advanced CNC</h4>
            <p className="text-sm text-foreground/70">
              Precision machining with cutting-edge technology.
            </p>
          </div>
          <div className="text-center">
            <Factory className="mx-auto h-10 w-10 text-orange-500" />
            <h4 className="mt-4 text-lg font-semibold">End-to-End Fabrication</h4>
            <p className="text-sm text-foreground/70">
              From machining to sheet metal, all under one roof.
            </p>
          </div>
          <div className="text-center">
            <Globe className="mx-auto h-10 w-10 text-orange-500" />
            <h4 className="mt-4 text-lg font-semibold">Global Standards</h4>
            <p className="text-sm text-foreground/70">
              Delivering quality that meets international benchmarks.
            </p>
          </div>
          <div className="text-center">
            <Handshake className="mx-auto h-10 w-10 text-orange-500" />
            <h4 className="mt-4 text-lg font-semibold">Trusted Partnerships</h4>
            <p className="text-sm text-foreground/70">
              180+ successful projects across industries.
            </p>
          </div>
        </div>
      </Container>
    </section>

    </>
  );
};

export default Home;
