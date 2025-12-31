import Image from "next/image";
import { Container } from "@/components/container";

const brands = [
  { name: "Case Construction", logo: "/case-construction-equipment-logo-black.svg" },
  { name: "Eicher", logo: "/eicher.svg" },
  { name: "Metalman", logo: "/metalman-logo.svg" },
  { name: "John Deere", logo: "/john-deere.svg" },
  { name: "Cummins", logo: "/ctt.png" },
  { name: "Methodex", logo: "/methodex.png" },
  { name: "VE Commercial Vehicles", logo: "/ve-commercial-vehicles.png" },
  { name: "Jash", logo: "/jash.png" },
  { name: "Caparo", logo: "/caparo.png" },
  { name: "Erawat Pharma", logo: "/erawat.png" },
  { name: "Diversitech", logo: "/diversitech.png" },
  { name: "Gatiman Auto", logo: "/gatiman.png" },
  { name: "Fort Caps", logo: "/fort-caps.png" },
];

const BrandShowcase = () => {
  return (
    <section className="py-20 bg-muted/30">
      <Container>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
          Trusted by Leading Brands
        </h2>
        <p className="text-foreground/70 text-center max-w-2xl mx-auto mb-12">
          Proudly serving 180+ successful projects across automotive,
          construction, and industrial sectors.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
  {brands.map((brand, idx) => {
    const isLast = idx === brands.length - 1;

    return (
      <div
        key={idx}
        className={[
          "justify-self-center grayscale hover:grayscale-0 transition-all duration-300",
          // On md:grid-cols-4, make the last item sit in the middle
          isLast ? "md:col-start-2 md:col-span-2" : "",
        ].join(" ")}
      >
        <Image
          src={brand.logo}
          alt={brand.name}
          width={160}
          height={80}
          className="object-contain"
        />
      </div>
    );
  })}
</div>

      </Container>
    </section>
  );
};

export default BrandShowcase;
