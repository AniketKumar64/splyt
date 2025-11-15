import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const FlavorTille = () => {
  useGSAP(() => {
    const firsttextSplit = SplitText.create(".first-text-split h1", {
      type: "chars",
    });

    const secondtextSplit = SplitText.create(".second-text-split h1", {
      type: "chars",
    });

    gsap.from(firsttextSplit.chars, {
      yPercent: 300,
      stagger: 0.06,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        toggleActions: "play reverse play reverse",

        start: "top 40%",
        // markers:true,
      },
    });
  

    const flavorTextScrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-text-scroll",
        toggleActions: "play reverse play reverse",
        start: "top 40%",
        // markers:true,
      },
    });

    flavorTextScrollTl.to(".flavor-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    });

      gsap.from(secondtextSplit.chars, {
      yPercent: 300,
      stagger: 0.06,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        toggleActions: "play reverse play reverse",

        start: "top 30%",
        // markers:true,
      },
    });

  
  
  });

  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
        <h1>We have 6</h1>
      </div>
      <div
        style={{
          clipPath: "polygon(0% 0%, 0% 0, 0% 100%, 0% 100%)",
        }}
        className="flavor-text-scroll"
      >
        <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
          <h2 className="text-milk">freaking</h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split ">
        <h1>delicious flavors</h1>
      </div>
    </div>
  );
};

export default FlavorTille;
