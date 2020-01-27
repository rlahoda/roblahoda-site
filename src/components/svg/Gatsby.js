import React from "react";

function SvgGatsby(props) {
  return (
    <svg
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
      fill="currentColor"
      id="SvgGatsby"
    >
      <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zM27.5 129.3l99.2 99.2c-54.5-.7-98.5-44.7-99.2-99.2zm123 96.7L30 105.5c10.2-44.7 50.2-78 98-78 33.4 0 63 16.3 81.3 41.4l-13.9 12.3C180.6 59.9 155.9 46 128.1 46c-35.5 0-65.7 22.6-77.2 54.1L156 205.2c25.5-9.2 45.2-30.8 51.7-57.5h-43.6V128h64.4c0 47.8-33.3 87.8-78 98z" />
    </svg>
  );
}

export default SvgGatsby;
