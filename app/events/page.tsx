import type { Metadata } from "next";
import Experiences from "@/components/sections/Experiences";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <>
      <Experiences standalone />
      <FinalCta />
    </>
  );
}
