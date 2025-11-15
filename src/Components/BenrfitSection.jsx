import React from "react";
import ClipPathTitle from "./ClipPathTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VideoPinSection from "./VideoPinSection";

const BenrfitSection = () => {

    useGSAP(()=>{
        const reveltl = gsap.timeline({
            delay:1,
            scrollTrigger:{
                trigger:".benefit-section",
                start:"top 40%",
                end:"top top",
                scrub:true,
                
            },
        });


        reveltl.to(".benefit-section  .first-title", {
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            opacity:1,
            duration:1.5,
            ease:"circ.out"
        }).to(".benefit-section  .second-title", {
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            opacity:1,
            duration:1.5,
            ease:"circ.out"
        }).to(".benefit-section  .third-title", {
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            opacity:1,
            duration:1.5,
            ease:"circ.out"
        }).to(".benefit-section  .fourth-title", {
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            opacity:1,
            duration:1.5,
            ease:"circ.out"
        })

    })



  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            unlock the Advantages: <br />
            Explore the Key Benefits of Choosing SPYLT
          </p>
          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"Shelf stable "}
              color={"#faeade"}
              bg={"#c88e64"}
              className={"first-title"}
              bordercolor={"#222123"}
              
            />
             <ClipPathTitle
              title={"protein + Caffeine "}
              color={"#222123"}
              bg={"#faeade"}
              className={"second-title"}
              bordercolor={"#222123"}
            />
             <ClipPathTitle
              title={"Infinitely recyclable "}
              color={"#faeade"}
              bg={"#7f3b2d"}
              className={"third-title"}
              bordercolor={"#222123"}
            />
             <ClipPathTitle
              title={"Lactose free "}
              color={"#2e2d2f"}
              bg={"#fed775"}
              className={"fourth-title"}
              bordercolor={"#222123"}
            />
          </div>


          <div className="md:mt-0 mt-10">
            <p>And much more...</p>
          </div>
        </div>
      </div>


      <div className="relative overlay-box">
        <VideoPinSection />
      </div>
    </section>
  );
};

export default BenrfitSection;
