import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

function Accordion() {
  let array = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div>
      {" "}
      {array.map((item, index) => {
        return (
          <div
            key={index}
            className="rounded-[18px] mx-2 pt-2 w-[350px] md:w-[500px] bg-white min-h-[50px] my-2 items-center "
          >
            <div className="flex mx-auto w-[350px] md:w-full">
              <button
                onClick={(e) => {
                  e.currentTarget?.parentElement?.parentElement?.lastElementChild?.classList.toggle(
                    "hidden"
                  );
                }}
                className="border bg-[#F2F0FD] text-[#0677E1] w-8 h-8 mx-2 rounded-[40px]"
              >
                <HiChevronDown className="ml-[7px] mt-1  " />
              </button>
              <h3 className="text-[20px] w-[350px] md:w-auto">
                Lorem Ipsum is simply dummy text of the printing
              </h3>
            </div>
            <p className="p-3  ml-10 hidden">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
