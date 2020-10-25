import React from "react";
import Hero from "../globals/Hero";
import Banner from "../globals/Banner";
import HomeImg from "../../images/homeBcg.jpeg";
import { PrimaryBtn } from "../globals/Button";
function Header() {
  return (
    <Hero img={HomeImg}>
      <Banner
        greeting="welcome to "
        title="Resort Recording"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quis minus, id deserunt voluptate animi."
      >
        <PrimaryBtn t="1rem">view details</PrimaryBtn>
        {/* <PrimaryBtn t="1rem" as="a" href="https://www.google.com">
          view details
        </PrimaryBtn> */}
      </Banner>
    </Hero>
  );
}

export default Header;
