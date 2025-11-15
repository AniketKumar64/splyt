import React from 'react'
import { useMediaQuery } from 'react-responsive'


const Footer = () => {

    const isMMobile = useMediaQuery({
        query: "(max-width: 768px)",
    })



  return (
    <section className='footer-section'>
        <img src="/images/footer-dip.png" alt=""
        className='w-full object-cover -translate-y-1' />

        <div className="2xl:h-[110vh] relative md:pt-[20vh] pt-[10vh]">
            <div className="overflow-hidden z-10">
                <h1 className="general-title text-center text-milk py-5">
                    #CHUGRESPONSIBLY
                </h1>
            </div>

           {
            isMMobile ? <img src="/images/footer-drink.png" alt="" /> :  <video src="/videos/splash.mp4" autoPlay playsInline muted className='absolute top-0 object-contain mix-blend-lighten'></video>

           }
            <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
                <div className="social-btn">
                    <img src="/images/tiktok.svg" alt="" />
                    
                </div>
                <div className="social-btn">
                    <img src="/images/yt.svg" alt="" />
                          
                </div>
                <div className="social-btn">
                    <img src="/images/insta.svg" alt="" />
                          
                </div>
            </div>
            


           
        </div>
    




         <div className=" copyright-box ">
                <p className="">© 2024 Chug. All Rights Reserved.</p>
                </div>

        
    </section>
  )
}

export default Footer