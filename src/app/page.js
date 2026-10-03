import Hero from "./components/Hero";
import Reach from "./components/Reach";
import Investors from "./components/Investors";
import Impact from "./components/Impact";
import Careers from "./components/Careers";
import WhatsNew from "./components/WhatsNew";
import QuickLinksDisclaimer from "./components/QuickLinks";
import Big from "./components/TheBiggerPicture";
export default function Home() {
  return (
    <>
      <Hero />
      <Reach/>
      <Big/>
      <Investors/>
      <Impact/>
      <Careers/>
      <WhatsNew/>
      <QuickLinksDisclaimer/>
    </>
  );
}