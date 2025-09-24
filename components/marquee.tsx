import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import { Cog, Globe2, ShieldCheck, Award } from "lucide-react";

const FeatureHighlightMarquee = () => {
  const items = [
    {
      text: "Precision Engineering",
      icon: <Cog className="h-6 w-6 inline-block mx-2 text-orange-500" />,
    },
    {
      text: "Global Standards",
      icon: <Globe2 className="h-6 w-6 inline-block mx-2 text-orange-500" />,
    },
    {
      text: "Zero-Defect Promise",
      icon: (
        <ShieldCheck className="h-6 w-6 inline-block mx-2 text-orange-500" />
      ),
    },
    {
      text: "Excellence Since 2011",
      icon: <Award className="h-6 w-6 inline-block mx-2 text-orange-500" />,
    },
  ];
  return (
    <>
      <Marquee className=" bg-background py-4 border-t border-b border-gray-300">
        <MarqueeContent>
          {items.map((item, idx) => (
            <MarqueeItem key={idx}>
              <span  className="mx-8 flex items-center text-lg font-medium">
                {item.icon}
                {item.text}
              </span>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </>
  );
};

export default FeatureHighlightMarquee;
