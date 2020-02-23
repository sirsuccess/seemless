import React from "react";

export default function Microphone({ LogoWidth }) {
  return (
    <div
      style={{
        width: LogoWidth
      }}
    >
      <i
        style={{
          width: LogoWidth
        }}
        class="fa fa-microphone"
      ></i>
    </div>
  );
}
