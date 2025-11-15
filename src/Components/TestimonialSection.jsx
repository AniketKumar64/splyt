import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { cards } from '../constants/index.js'

const TestimonialSection = () => {

    const videoRef = useRef([])


    useGSAP(()=>{
        gsap.set(".testimonials-section", {marginTop: "-140vh"});

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger:".testimonials-section",
                start:"top bottom",
                end:"200% top",
                scrub: true,
                markers:true,
            }



        });
        tl.to(".first-title",{
            xPercent:70,

        },"<").to(".sec-title",{
            xPercent:25,
            
        },"<").to(".third-title",{
            xPercent:-50,
            
        },"<")


        const pinTl = gsap.timeline({
            scrollTrigger:{
                trigger:".testimonials-section",
                start:"10% top",
                end:"200% top",
                scrub:1.5,
                pin:true,

            }
        })
        pinTl.from(".vd-card",{
            yPercent:150,
            stagger:0.2,
            ease:"power1.inOut"
            
            })
            


    })

    const handlePlay = (idx)=>{
        const video = videoRef.current[idx];
        video.play();

    }
    const handlePause = (idx)=>{
        const video = videoRef.current[idx];
        video.pause();
    }
  return (
    <section className='testimonials-section'>

<div className="absolute size-full fles flex-col items-center pt-[5vw]">
    <h1 className="text-black first-title">
        What's
    </h1>
    <h1 className="text-light-brown sec-title">
        Everyone
    </h1>
    <h1 className="text-black third-title">
        Talking
    </h1>
</div>

<div className="pin-box">
    {cards.map((card , idx)=>(
        <div className={`vd-card ${card.translation} ${card.rotation}`}
        onMouseEnter={()=>{
            handlePlay(idx)
        }}
        onMouseLeave={()=>{
            handlePause(idx)
        }}
        >
            <video
                        ref={(el)=>(videoRef.current[idx]=el)}

             src={card.src}
            playsInline
            muted
            loop
            className='size-full object-cover
            '
            ></video>
        </div>
    ))}
</div>

    </section>
  )
}

export default TestimonialSection