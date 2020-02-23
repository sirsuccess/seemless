import React from "react";

export default function Button({ LogoWidth }) {
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
        class="fa fa-search"
      ></i>
    </div>
  );
}
