import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Award,
  CheckCircle2,
  Eye,
  Factory,
  FileText,
  Leaf,
  Lightbulb,
  ShieldCheck,
  Target,
  UserCheck,
  Users,
} from "lucide-react";
import { Counter } from "@/components/counter";

const About = () => {
  const benefits = [
    "Tailor-made solutions built on proven industry standards",
    "Detailed part analysis for precision manufacturing",
    "End-to-end support throughout the production process",
    "Regularly issued tracking reports for full transparency",
    "Hands-on involvement of skilled personnel at every stage",
    "Accelerated lead times ensuring faster time-to-market",
    "Proactive issue detection using advanced FEA simulations",
    "Comprehensive tooling solutions aligned with product requirements",
  ];

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
          <source src="/grinding_vid.mp4" type="video/mp4" />
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
              Our Story
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 italic">
              From one CNC turning machine in 2011 to 180+ projects delivered
              globally
            </p>
            <Button className="mt-10 mx-auto bg-orange-400 hover:bg-orange-500 text-white inline-flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Get a Quote
            </Button>
          </div>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="py-12 bg-muted/30">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                We Create Structural Beauty Through Innovation
              </h2>
              <p className="text-foreground/80 mb-4">
                Founded by Sanjay Verma, a seasoned expert with over 25 years in
                manufacturing, Ascent Industries has grown into a trusted name
                in precision engineering. With deep expertise in CNC machining,
                milling, and grinding, we deliver reliable import substitutes
                that meet diverse industrial needs. Since our inception in late
                2011, we’ve specialized in CNC machining and grinding, serving
                the earthmoving equipment and automotive sectors with precision
                and quality.
              </p>

              {/* Badges */}
              <div className="flex gap-4">
                <div className="bg-background shadow-md rounded-lg px-4 py-2 flex items-center gap-2">
                  <Award className="h-5 w-5 text-orange-500" />
                  <span className="text-sm font-medium">Award Winning</span>
                </div>
                <div className="bg-background shadow-md rounded-lg px-4 py-2 flex items-center gap-2">
                  <Users className="h-5 w-5 text-orange-500" />
                  <span className="text-sm font-medium">Established Team</span>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-md">
              <Image
                src="https://images.pexels.com/photos/32845682/pexels-photo-32845682.jpeg"
                alt="Quality inspection process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Advanced Manufacturing Section */}
      <section className="py-12 bg-muted/30">
        <Container>
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Advancing Manufacturing Excellence
          </h2>

          {/* Text + Counters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: About Text */}
            <div className="text-foreground/80 leading-relaxed space-y-4">
              <p>
                In 2014, Ascent Industries strengthened its capabilities by
                introducing advanced CNC turret punch press (AMADA AC255NT) and
                NC press brake (AMADA RG80) machines. These upgrades enabled us
                to deliver high-precision sheet metal fabrication in mild steel,
                aluminum, and stainless steel. With this technology, we excel in
                CNC punching, shearing, and press brake operations. Every
                process is carried out under the watchful eye of experienced
                technocrats and guided by ISO 9001-2015 standards, ensuring
                zero-defect products customized to meet the unique needs of our
                customers.
              </p>
              {/* Right: Counters in boxes */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-background shadow-md rounded-xl p-6 text-center">
                  <h3 className="text-4xl font-bold text-orange-500">
                    <Counter from={0} to={13} suffix="+" />
                  </h3>
                  <p className="mt-2 text-sm font-medium text-foreground/70">
                    Years of Experience
                  </p>
                </div>
                <div className="bg-background shadow-md rounded-xl p-6 text-center">
                  <h3 className="text-4xl font-bold text-orange-500">
                    <Counter from={0} to={180} suffix="+" />
                  </h3>
                  <p className="mt-2 text-sm font-medium text-foreground/70">
                    Projects Delivered
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="https://images.pexels.com/photos/5846143/pexels-photo-5846143.jpeg"
                alt="Manufacturing process"
                width={600}
                height={500}
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className= "py-12 bg-muted/30">
        <Container>
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center italic">
            Why Choose Us?
          </h2>

          {/* Intro */}
          <div className="text-foreground/80 leading-relaxed space-y-4 text-center max-w-3xl mx-auto">
            <p>
              Guided by the vision and experience of our Director, Sanjay Verma,
              Ascent Industries has grown into a trusted name in precision
              manufacturing. His leadership and expertise empower us to deliver
              innovative, sustainable, and customer-focused solutions that meet
              global standards.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Innovation */}
            <div className="bg-background shadow-md rounded-xl p-6 text-center">
              <Lightbulb className="mx-auto h-10 w-10 text-orange-500" />
              <h4 className="mt-4 text-lg font-semibold">Innovation</h4>
              <p className="text-sm text-foreground/70">
                Pushing boundaries with cutting-edge technology and creative
                solutions.
              </p>
            </div>

            {/* Sustainability */}
            <div className="bg-background shadow-md rounded-xl p-6 text-center">
              <Leaf className="mx-auto h-10 w-10 text-orange-500" />
              <h4 className="mt-4 text-lg font-semibold">Sustainability</h4>
              <p className="text-sm text-foreground/70">
                Minimizing our footprint by integrating solar and eco-conscious
                practices.
              </p>
            </div>

            {/* Customer Focus */}
            <div className="bg-background shadow-md rounded-xl p-6 text-center">
              <UserCheck className="mx-auto h-10 w-10 text-orange-500" />
              <h4 className="mt-4 text-lg font-semibold">Customer Focus</h4>
              <p className="text-sm text-foreground/70">
                Tailor-made solutions built around each client’s specific
                requirements.
              </p>
            </div>

            {/* Experience */}
            <div className="bg-background shadow-md rounded-xl p-6 text-center">
              <Factory className="mx-auto h-10 w-10 text-orange-500" />
              <h4 className="mt-4 text-lg font-semibold">
                25+ Years Experience
              </h4>
              <p className="text-sm text-foreground/70">
                Proven expertise across industries with 180+ successful
                projects.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 border rounded-lg bg-background shadow-sm"
              >
                <CheckCircle2 className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-12 bg-muted/30">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-orange-500" />
                Quality Assurance
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                At <span className="font-semibold">Ascent Industries</span>,
                quality isn’t just a process — it’s our promise. Every component
                undergoes rigorous inspection to meet the highest standards of
                precision and reliability.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Guided by ISO 9001-2015 aligned policies and procedures, we
                ensure integrity at every stage of manufacturing. This
                commitment empowers our clients with zero-defect products that
                provide a competitive edge in their industries.
              </p>

              {/* Highlight Box */}
              <div className="bg-background border-l-4 border-orange-500 shadow-sm rounded-r-md p-4">
                <p className="italic text-foreground/80 font-medium">
                  “Zero-defect products, every time.”
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-md">
              <Image
                src="https://images.pexels.com/photos/32845692/pexels-photo-32845692.jpeg"
                alt="Quality inspection at Ascent Industries"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 bg-muted/30">
        <Container>
          {/* Section Intro */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Shaping the Future of Manufacturing
            </h2>
            <p className="text-foreground/70">
              Our Mission and Vision drive us forward, guided by sustainability,
              innovation, and customer-focused excellence.
            </p>
          </div>

          {/* Mission + Vision + Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-background border border-orange-200 rounded-xl shadow-md p-6">
              <Target className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Driving competitiveness through collaboration, transformation,
                and innovation while ensuring zero-defect manufacturing.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-background border border-orange-200 rounded-xl shadow-md p-6">
              <Eye className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                A sustainable future where renewable energy and innovation work
                hand in hand to redefine global manufacturing.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-background border border-orange-200 rounded-xl shadow-md p-6">
              <ShieldCheck className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Our Values</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Our values are rooted in integrity, customer-centricity, and a
                relentless drive for innovation and excellence, shaping
                everything we do.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
