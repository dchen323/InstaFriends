import React from "react";
import { MoonLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="spinner">
      <MoonLoader sizeUnit={"px"} size={60} color={"#5FD6FB"} />
    </div>
  );
}
