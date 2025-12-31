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
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FileText } from "lucide-react";

/** -----------------------------
 * Manufacturing facilities data
 * (added category + optional status)
 * ------------------------------ */
const manufacturingFacilities = [
  {
    id: 1,
    model: "LL15TL3-LMW",
    type: "Turning Centre",
    date: "JUL-2011",
    capacity: "Dia. 300 × 350 mm long",
    category: "Turning",
    status: "Operational",
  },
  {
    id: 2,
    model: "LT-20 - LOKESH",
    type: "Turning Centre",
    date: "AUG-2018",
    capacity: "Dia. 300 × 500 mm long",
    category: "Turning",
    status: "Operational",
  },
  {
    id: 3,
    model: "ALPHA- SRI YANTRA",
    type: "Turning Centre (Flat bed)",
    date: "DEC-2015",
    capacity: "Dia. 350 × 1500 mm long",
    category: "Turning",
    status: "Operational",
  },
  {
    id: 6,
    model: "KAFO- KF840",
    type: "Vertical Machining Center",
    date: "APR-2019",
    capacity: "1270×650×650 mm traverse, ATC24",
    category: "Machining",
    status: "Operational",
  },
  {
    id: 4,
    model: "AC255 NT- AMADA",
    type: "CNC Turret Punch Press",
    date: "APR-2014",
    capacity: "Sheet Size 2500 × 1250 mm",
    category: "Sheet Metal & Fabrication",
    status: "Operational",
  },
  {
    id: 5,
    model: "RG-80-AMADA",
    type: "NC Press Brake",
    date: "APR-2014",
    capacity: "80KN bending force",
    category: "Sheet Metal & Fabrication",
    status: "Operational",
  },
  {
    id: 7,
    model: "POWER PRESS",
    type: "Crank Type",
    date: "SEP-2013",
    capacity: "30 TON",
    category: "Pressing",
    status: "Operational",
  },
  {
    id: 8,
    model: "MIG- 300i",
    type: "MIG WELDING IGBT",
    date: "AUG-2019",
    capacity: "300 AMP",
    category: "Welding",
    status: "Operational",
  },
];

/** -----------------------------
 * Metrological facilities data
 * ------------------------------ */
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
  {
    id: 12,
    instrument: "SURFACE FINISH COMPARATOR",
    type: "VISUAL / TACTILE",
    range: "Ra COMPARISON STANDARDS",
  },
  {
    id: 13,
    instrument: "CMM",
    type: "UNDER PLANNING",
    range: "TO BE DEFINED",
  },
  {
    id: 14,
    instrument: "CONTOUR TRACER",
    type: "PROFILE MEASUREMENT",
    range: "AS PER COMPONENT PROFILE",
  },
];

/** -----------------------------
 * System Development data
 * ------------------------------ */
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

/** -----------------------------
 * Helpers: group + ordering
 * ------------------------------ */
const categoryOrder = [
  "Turning",
  "Machining",
  "Sheet Metal & Fabrication",
  "Pressing",
  "Welding",
  "Other",
];

function groupBy<T extends Record<string, any>>(arr: T[], key: keyof T) {
  return arr.reduce((acc, item) => {
    const group = (item[key] as string) ?? "Other";
    (acc[group] ||= []).push(item);
    return acc;
  }, {} as Record<string, T[]>);
}

function StatusBadge({ status }: { status?: string }) {
  if (!status) return null;

  const isPlanned = status.toLowerCase().includes("plan");
  return (
    <Badge
      variant="outline"
      className={[
        "ml-2",
        isPlanned
          ? "border-orange-400/60 text-orange-500"
          : "border-foreground/20 text-foreground/70",
      ].join(" ")}
    >
      {status}
    </Badge>
  );
}

export default function Infrastructure() {
  const groupedManufacturing = groupBy(manufacturingFacilities, "category");

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-76px)] sm:min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        >
          <source src="/infrastructure_vid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />

        <Container className="relative z-10 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="scroll-m-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
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

      {/* FEATURE MACHINE */}
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
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              <p className="text-sm font-medium text-foreground/70">
                Featured Capability
              </p>
            </div>

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

      {/* MANUFACTURING FACILITIES (SEGREGATED) */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Manufacturing Facilities</h2>
            <p className="mt-3 text-foreground/70">
              Machines are grouped by process for clarity and capability mapping.
            </p>
          </div>

          <div className="space-y-10">
            {categoryOrder
              .filter((category) => groupedManufacturing[category]?.length)
              .map((category) => {
                const items = groupedManufacturing[category];

                return (
                  <div
                    key={category}
                    className="rounded-2xl border border-foreground/10 bg-background shadow-sm"
                  >
                    <div className="px-5 sm:px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold">
                          {category}
                          <span className="ml-2 text-sm font-normal text-foreground/60">
                            ({items.length})
                          </span>
                        </h3>
                        <p className="text-sm text-foreground/60 mt-1">
                          Models, commissioning date and capacity details.
                        </p>
                      </div>

                      <Badge className="w-fit bg-orange-400 hover:bg-orange-500 text-white">
                        Capability
                      </Badge>
                    </div>

                    <Separator />

                    <div className="px-2 sm:px-4 pb-4 pt-2">
                      <div className="w-full overflow-x-auto rounded-xl">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[70px]">S.No</TableHead>
                              <TableHead>Machine Model & Make</TableHead>
                              <TableHead>Type</TableHead>
                              <TableHead>Date</TableHead>
                              <TableHead>Capacity</TableHead>
                            </TableRow>
                          </TableHeader>

                          <TableBody>
                            {items.map((item, idx) => (
                              <TableRow key={item.id}>
                                <TableCell className="font-medium">
                                  {idx + 1}
                                </TableCell>

                                <TableCell className="whitespace-nowrap">
                                  {item.model}
                                  <StatusBadge status={item.status} />
                                </TableCell>

                                <TableCell>{item.type}</TableCell>
                                <TableCell className="whitespace-nowrap">
                                  {item.date}
                                </TableCell>
                                <TableCell className="min-w-[220px]">
                                  {item.capacity}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </Container>
      </section>

      {/* METROLOGICAL FACILITIES */}
      <section className="py-16 bg-muted/30">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Metrological Facilities</h2>
            <p className="mt-3 text-foreground/70">
              Measurement instruments and inspection standards.
            </p>
          </div>

          <div className="rounded-2xl border border-foreground/10 bg-background shadow-sm">
            <div className="px-5 sm:px-6 py-5 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Inspection & Gauging</h3>
              <Badge variant="outline" className="border-orange-400/60 text-orange-500">
                Quality
              </Badge>
            </div>

            <Separator />

            <div className="px-2 sm:px-4 pb-4 pt-2">
              <div className="w-full overflow-x-auto rounded-xl">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[70px]">S.No</TableHead>
                      <TableHead>Instrument Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Range</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {metrologicalFacilities.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell className="whitespace-nowrap">
                          {item.instrument}
                        </TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell className="min-w-[260px]">{item.range}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SYSTEM DEVELOPMENT */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">System Development</h2>
            <p className="mt-3 text-foreground/70">
              Continuous improvement initiatives and certifications.
            </p>
          </div>

          <div className="rounded-2xl border border-foreground/10 bg-background shadow-sm">
            <div className="px-5 sm:px-6 py-5 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Process Excellence</h3>
              <Badge className="bg-orange-400 hover:bg-orange-500 text-white">
                Progress
              </Badge>
            </div>

            <Separator />

            <div className="px-2 sm:px-4 pb-4 pt-2">
              <div className="w-full overflow-x-auto rounded-xl">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[70px]">S.No</TableHead>
                      <TableHead>Activities</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Proposed Completion</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {systemDevelopment.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>{item.activity}</TableCell>
                        <TableCell className="whitespace-nowrap">
                          {item.duration}
                        </TableCell>
                        <TableCell className="min-w-[260px]">
                          {item.completion}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
