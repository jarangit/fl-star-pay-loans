import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import Menus from "./components/menu";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StarPay",
  description: "",
  icons: {
    icon: "/images/icon-web.png", // /public path,
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script id="show-banner">
        {`var _lg_form_init_ = {
                            aid: "14881",
							ref: "ScratchPayments",
                            template: "elvis-us"
                        };
                        if (typeof _lg_form_config_ === 'undefined') {
                            var _lg_form_config_ = {
                                offer_index_mode: true,
                            };
                        } else {
                            _lg_form_config_.offer_index_mode = true;
                        }`}
      </Script>
      <Script
        type="text/javascript"
        async={true}
        src="https://loansaccount.com/form/applicationInit.js"
      ></Script>
      <body className={inter.className}>
        <GoogleTagManager gtmId={'GTM-PTZ55Z7C'} />
        <Menus />
        {children}
        <Footer />
      </body>
    </html>
  );
}
