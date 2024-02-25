import React from "react";
import Image from "next/image";

export default function IconLabelButton(props) {
  return (
    <>
      <div className="flex gap-2 items-center justify-start text-primary p-2">
        <Image
          src={props.icon}
          height={50}
          width={50}
          alt={props.label}
          className="w-6 aspect-square fill-red-700 to-current"
        />
        <h4 className="text-sm font-mulish capitalize">{props.label}</h4>
      </div>
    </>
  );
}
