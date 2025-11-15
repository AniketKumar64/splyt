import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {

      const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });


  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", { type: "chars" });

    const tl = gsap.timeline({ delay: 1 });

    tl.to(".hero-content",
         { opacity: 1,
             y: 0,
              ease: "power1.inOut" }).to(".hero-text-scroll", {
    clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
    duration: 1,
    ease: "circ.out",

  },"-=0.5").from(titleSplit.chars, {
    yPercent: 200,
    stagger: 0.02,
    ease:"power2.out",
  },"-=0.5");



  const herotl = gsap.timeline({
    scrollTrigger: {
        trigger:".hero-container",
                toggleActions: "play reverse play reverse",

        start:"1% top",
        end:"bottom top",
        scrub:true,
        // markers:true,
    }
  });
    herotl.to(".hero-container",{
        rotate:7,
        scacle:0.9,
        yPercent:30,
        ease:"power1.inOut",
    })





});


  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        {isTablet ? (
          <>
            {isMobile && (
              <img
                src="/images/hero-bg.png"
                className="absolute bottom-40 size-full object-cover"
              />
            )}
            <img
              src="/images/hero-img.png"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto"
            />
          </>
        ) : (
          <video
            src="/videos/hero-bg.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">Freaking Delicious</h1>
          </div>

          <div
            style={{
              clipPath: "polygon(50% 0%,50% 0%, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Protein + caffeine</h1>
            </div>
 </div>
            <h2 className=" capitalize  ">
              is a game changer. Our delicious shakes are packed with 20g of
              protein and 200mg of natural caffeine from green coffee beans to
              help you power through your day.
            </h2>

            <div className="hero-button">
              <p>chug a SPYLT</p>
            </div>
         
        </div>
      </div>
    </section>
  );
};

export default Hero;
