"use client"; // This is a client component 👈🏽

import React, { useState } from "react";
import Column from "./column";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
import Row from "./row";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
type Props = {
  data: any;
  firstActive?: boolean;
};

const AccordionItem = ({ data, firstActive }: Props) => {
  const [open, setOpen] = useState(firstActive);
  return (
    <Column
      className={` bg-white border rounded-xl p-4 px-6 shadow-sm border-gray-100  cursor-pointer   ${open ? "gap-2" : "gap-0"} transition-all duration-500`}
      onClick={() => setOpen(!open)}
    >
      <Row className="flex justify-between hover:text-main">
        <div className="text-xl font-bold">{data.title}</div>
        <div className="bg-[#FFF887] p-2 rounded-md">
          {open ? <IoIosArrowDown size={25} /> : <IoIosArrowUp size={25} />}
        </div>
      </Row>

      <div
        className={`${open ? "max-h-[500px]" : "max-h-0"
          } overflow-hidden transition-all duration-300`}
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
    </Column>
  );
};

export default AccordionItem;