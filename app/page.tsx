import Image from "next/image";
import Banner from "./components/sections/banner";
import GetYourLoan from "./components/sections/get-your-loan";
import Why from "./components/sections/why";
import Price from "./components/sections/price";
import FAQ from "./components/sections/faq";

export default function Home() {
  return (
    <div >
      <Banner />
      <GetYourLoan />
      <Why />
      <Price />
      <FAQ />
    </div>
  );
}
