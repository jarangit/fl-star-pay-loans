"use client"; // This is a client component 
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import React, { useEffect, useState } from "react";

type Props = {};

const FormLoadPage = (props: Props) => {
  


  return (
    <div>
   <Script
        type="text/javascript"
        async={true}
        src={`https://loansaccount.com/form/applicationInit.js?cacheControl=${new Date().getTime()}`}
      ></Script>
      <div id={'_lg_form_'}></div>
    </div>
  );
};

export default FormLoadPage;