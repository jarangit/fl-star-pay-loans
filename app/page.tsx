import Image from "next/image";
import Banner from "./components/sections/banner";
import GetYourLoan from "./components/sections/get-your-loan";

export default function Home() {
  return (
    <div >
      <Banner />
      <GetYourLoan />
    </div>
  );
}
