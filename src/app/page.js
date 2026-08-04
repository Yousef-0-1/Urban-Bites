import Hero from "@/components/home/Hero";
import Browse from "@/components/home/Browse";
import HowTo from "@/components/home/HowTo";
import Feedback from "@/components/home/Feedback";
import Newsletter from "@/components/home/Newsletter";
export default function Home() {
  return (
    <div>
      <Hero />
      <Browse />
      <HowTo />
      <Feedback />
      <Newsletter />
    </div>
  );
}
