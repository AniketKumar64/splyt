import React from 'react'
import FlavorTille from './FlavorTille'
import FlavorSlider from './FlavorSlider'

const FlavorHorizentolsection = () => {
  return (
    <section className='flavor-section'>
        <div className="h-full flex lg:flex-row flex-col items-center">
            <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0 ">

                <FlavorTille/>
            </div>
            <div className="h-full">
                <FlavorSlider/>
            </div>
        </div>

    </section>
  )
}

export default FlavorHorizentolsection