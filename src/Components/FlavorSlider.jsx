import  { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'

const FlavorSlider = () => {
    const sliderRef=useRef();

    const isTablet= useMediaQuery({
        query:'(max-width:1024px)',
    });
const flavorlists = [
  {
    name: "Chocolate Milk",
    color: "brown",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Stawberry Milk",
    color: "red",
    rotation: "md:rotate-[8deg] rotate-0",
  },
  {
    name: "Cookies & Cream",
    color: "blue",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Peanut Butter Chocolate",
    color: "orange",
    rotation: "md:rotate-[8deg] rotate-0",
  },
  {
    name: "Vanilla Milkshake",
    color: "white",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Max Chocolate Milk",
    color: "black",
    rotation: "md:rotate-[8deg] rotate-0",
  },
];




    useGSAP(() => {

        const scrollAmont =sliderRef.current.scrollWidth - window.innerWidth;

        if(!isTablet){
             const tl = gsap.timeline({
            scrollTrigger: {
                trigger:'.flavor-section',
                start:'2% top' ,
                end:`+=${scrollAmont + 1500}px `,
                scrub:true,
                pin:true,
                // markers:true,
                
                
            }
        })
        tl.to(".flavor-section",{
            x:`-${scrollAmont}px`,
            ease:'power1.inOut'
           
        })

        }


       


          const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start:"top top",
        end:"bottom 80%",
        scrub:true,
    } 
   })
   titleTl.to(".first-text-split",{
    xPercent:-30,
    ease:"power1.inOut",

   })
   .to(".flavor-text-scroll",{
    xPercent:-22,
    

   },"<")
  .to(".second-text-split",{
    xPercent:-10,
    ease:"power1.inOut",
    },"<");

    })






  return (
    <div ref={sliderRef} className='slider-wrapper'>
        <div className="flavors">
            {flavorlists.map((flavor)=>(
              
                 <div key={flavor.name} className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vw] h-80 flex-none ${flavor.rotation} `}>
                <img src={`/images/${flavor.color}-bg.svg`} alt={flavor.name} className='absolute bottom-0'/>

                <img src={`/images/${flavor.color}-drink.webp`} alt={flavor.name} className='drinks' />

                <img src={`/images/${flavor.color}-elements.webp`} alt={`${flavor.name} elements`} className='elements' />

                <h1>
                    {flavor.name}
                </h1>


                </div>
               
            
            ))}
        </div>
        

    </div>
  )
}

export default FlavorSlider