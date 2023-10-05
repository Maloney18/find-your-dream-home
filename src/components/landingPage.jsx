import Navbar from "./navbar"
import PropertyList from "./propertyList"
import { useState } from 'react'
import { BiSolidHourglass } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'


const LandingPage = () => {
    const [state, setState] = useState(false)

    return (
        <div className='flex flex-col items-center gap-10 bg-transparent md:m-auto p-3 md:w-95'>
            <div className='flex items-center gap-2.5 md:gap-y-5 flex-col'>
                <p className='text-2xl md:text-4xl font-black'>Featured Listed Property</p>
                <p className='text-center w-4/5 md:w-1/2'>Real estate can be bought, sold, leased, or rented, and can be a valuable investment oppurtunity. The value of real estate can be...</p>
            </div>

            <div className='flex items-center w-full justify-between'>
                <Navbar />

                <div className='view-all'>
                <span className='text-sm font-semibold md:text-lg md:font-bold'>View All</span>
                <BsArrowRight className='fill-current'/>
                </div>
            </div>

            <PropertyList display={state} />

            <button onClick={() => setState(!state)} className='show-more'> 
                <BiSolidHourglass className='fill-current text-white'/> 
                <span className=''>{`${ state ? 'Show Less' : 'Show More'}`}</span>
            </button>
        </div>
    )
}

export default LandingPage