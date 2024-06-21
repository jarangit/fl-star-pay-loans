"use client"; // This is a client component 
import Banner from "./components/sections/banner";
import GetYourLoan from "./components/sections/get-your-loan";
import Why from "./components/sections/why";
import Price from "./components/sections/price";
import FAQ from "./components/sections/faq";
import LoanForm from "./components/form-info";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const reload =() => {
    window.location.replace('/');
  }
  useEffect(() => {
    // reload()
  }, [])


  return (
    <div >
      <LoanForm />

      <Banner />
      <GetYourLoan />
      <Why />
      <Price />
      <FAQ />
    </div>
  );
}
