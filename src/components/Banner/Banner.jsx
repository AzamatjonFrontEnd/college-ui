import React from "react";
import "./Banner.css";

const Banner = ({ page }) => {
  return (
    <section class="sub-header">
      <h1>{page}</h1>
    </section>
  );
};

export default Banner;
