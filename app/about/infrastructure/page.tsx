"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

// Manufacturing facilities data
const manufacturingFacilities = [
  {
    id: 1,
    model: "LL15TL3-LMW",
    type: "Turning Centre",
    date: "JUL-2011",
    capacity: "Dia. 300 × 350 mm long",
  },
  {
    id: 2,
    model: "LT-20 - LOKESH",
    type: "Turning Centre",
    date: "AUG-2018",
    capacity: "Dia. 300 × 500 mm long",
  },
  {
    id: 3,
    model: "ALPHA- SRI YANTRA",
    type: "Turning Centre (Flat bed)",
    date: "DEC-2015",
    capacity: "Dia. 350 ×1500 mm long",
  },
  {
    id: 4,
    model: "RIG250-REKHA",
    type: "CNC ID Grinder",
    date: "MAY-2012",
    capacity: "ID 20 to 150 × 200 mm Long",
  },
  {
    id: 5,
    model: "AC255 NT- AMADA",
    type: "CNC Turret Punch Press",
    date: "APR-2014",
    capacity: "Sheet Size 2500 × 1250 mm",
  },
  {
    id: 6,
    model: "RG-80-AMADA",
    type: "NC Press Brake",
    date: "APR-2014",
    capacity: "80KN bending force",
  },
  {
    id: 7,
    model: "KAFO- KF840",
    type: "Vertical Machining Center",
    date: "APR-2019",
    capacity: "1270×650×650 mm traverse, ATC24",
  },
  {
    id: 8,
    model: "POWER PRESS",
    type: "Crank Type",
    date: "SEP-2013",
    capacity: "30 TON",
  },
  {
    id: 9,
    model: "MIG- 300i",
    type: "MIG WELDING IGBT",
    date: "AUG-2019",
    capacity: "300 AMP",
  },
];

// Metrological facilities data
const metrologicalFacilities = [
  { id: 1, instrument: "MICRO METER", type: "MECHANICAL", range: "0-300MM" },
  {
    id: 2,
    instrument: "VERNIER CALIPER",
    type: "MECHANICAL / DIGITAL",
    range: "0-600MM",
  },
  {
    id: 3,
    instrument: "DIAL INDICATOR",
    type: "MECHANICAL",
    range: "0.001-0.01 LC",
  },
  { id: 4, instrument: "HEIGHT VERNIER", type: "MECHANICAL", range: "0-600MM" },
  {
    id: 5,
    instrument: "BORE DIAL GAUGE",
    type: "DIAL TYPE / MECHANICAL",
    range: "18-150MM",
  },
  { id: 6, instrument: "SURFACE PLATE", type: "GRADE-I", range: "600×600MM" },
  {
    id: 7,
    instrument: "COMPARATOR STAND",
    type: "OD/ID",
    range: "OD: 30-150MM / ID: 20-140MM",
  },
  {
    id: 8,
    instrument: "SETTING RINGS",
    type: "ID MASTERS",
    range: "AS PER REGULAR COMPONENTS",
  },
  {
    id: 9,
    instrument: "SETTING MASTERS",
    type: "OD MASTERS",
    range: "AS PER REGULAR COMPONENTS",
  },
  {
    id: 10,
    instrument: "THREAD PLUG GAUGES",
    type: "INTERNAL THREADING",
    range: "AS PER REGULAR COMPONENTS",
  },
  {
    id: 11,
    instrument: "THREAD RINGS",
    type: "OUTER THREADING",
    range: "AS PER REGULAR COMPONENTS",
  },
];

// System Development data
const systemDevelopment = [
  {
    id: 1,
    activity: "LEAN IMPLEMENTATION",
    duration: "18 MONTHS",
    completion: "COMPLETED",
  },
  {
    id: 2,
    activity: "IATF-16949",
    duration: "12 MONTHS",
    completion: "24 STARTING JUNE 23th MAY, 24",
  },
];

export default function Infrastructure() {
  return (
    <>
      {/* Hero Section
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/infra-hero.jpg"
          alt="Infrastructure at Ascent Industries"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/30" />
        <h1 className="relative z-10 text-5xl font-bold text-white">Infrastructure</h1>
      </section> */}
      <section className="relative min-h-[calc(100vh-76px)] sm:min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        >
          <source src="/infrastructure_vid.mp4" type="video/mp4" />
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
              Infrastructure
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 italic">
              Innovating with cutting-edge technology to shape tomorrow’s
              manufacturing standards
            </p>
            <Button className="mt-10 mx-auto bg-orange-400 hover:bg-orange-500 text-white inline-flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Get a Quote
            </Button>
          </div>
        </Container>
      </section>

      {/* Fiber Laser Machine */}
      <section className="py-16 bg-muted/30">
        <Container className="grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="https://images.pexels.com/photos/29988963/pexels-photo-29988963.jpeg"
            alt="Fiber Laser Machine"
            width={600}
            height={500}
            className="rounded-xl shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Fiber Laser Metal Cutting Machine
            </h2>
            <ul className="space-y-2 text-foreground/80">
              <li>⚡ LASER source 6.0 KW</li>
              <li>📐 Pallet changer, cutting area 2500 × 6500 mm</li>
              <li>🔩 MS up to 25 mm</li>
              <li>🔧 Stainless Steel up to 16 mm</li>
              <li>🟠 Aluminum / Copper / Brass up to 10 mm</li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Manufacturing Facilities */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold mb-6 text-center">
            Manufacturing Facilities
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.No</TableHead>
                <TableHead>Machine Model & Make</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date of Commissioning</TableHead>
                <TableHead>Capacity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {manufacturingFacilities.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.model}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.capacity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Container>
      </section>

      {/* Metrological Facilities */}
      <section className="py-16 bg-muted/30">
        <Container>
          <h2 className="text-3xl font-bold mb-6 text-center">
            Metrological Facilities
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.No</TableHead>
                <TableHead>Instrument Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Range</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {metrologicalFacilities.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.instrument}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.range}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Container>
      </section>

      {/* System Development */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold mb-6 text-center">
            System Development
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.No</TableHead>
                <TableHead>Activities</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Proposed Completion</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {systemDevelopment.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.activity}</TableCell>
                  <TableCell>{item.duration}</TableCell>
                  <TableCell>{item.completion}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Container>
      </section>
    </>
  );
}
