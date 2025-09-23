"use client";

import { useParams } from "next/navigation";
import { productsData } from "@/utils/products";
import { Container } from "@/components/container";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const ProductPage = () => {
  const { slug } = useParams();
  const product = productsData[slug as keyof typeof productsData];

  if (!product) return <div>Product not found</div>;

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        >
          <source src={product.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <Container className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">{product.title}</h1>
          <p className="mt-4 text-lg italic">{product.subtitle}</p>
        </Container>
      </section>

      {/* Description */}
      <section className="py-12 bg-muted/30">
        <Container className="text-center max-w-3xl">
          <p className="text-foreground/80 leading-relaxed">
            {product.description}
          </p>
        </Container>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-background">
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {product.highlights.map((point, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-xl shadow-sm text-center bg-muted/10"
            >
              <CheckCircle2 className="h-8 w-8 mx-auto text-orange-500 mb-4" />
              <p className="text-sm text-foreground/70">{point}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-muted/20">
        <Container className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {product.gallery.map((img, idx) => (
            <div
              key={idx}
              className="relative w-full h-60 rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={img}
                alt={`${product.title} image ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </Container>
      </section>
    </>
  );
};

export default ProductPage;
