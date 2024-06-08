import Image from "next/image";
import Banner from "./components/sections/banner";
import GetYourLoan from "./components/sections/get-your-loan";
import Why from "./components/sections/why";

export default function Home() {
  return (
    <div >
      <Banner />
      <GetYourLoan />
      <Why />
    </div>
  );
}
