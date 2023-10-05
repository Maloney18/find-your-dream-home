import { LiaBedSolid, LiaBathSolid, LiaArrowsAltSolid } from 'react-icons/lia'
import { BsBuilding } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineArrowLeft } from 'react-icons/ai'
import { MdOutlineLocationOn } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '../db/features/db'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'


const PropDetails = () => {//index of the current image
    const navigate = useNavigate()
    const [favorite, setFavorite] = useState(false) //to read favorite from allData
    const dispatch = useDispatch()
    const {allData} = useSelector(store => store.db)
    const {id, address, name, rooms, beds, bathroom, size, price, popular, image, availability} = useLocation().state
    const [backImg, setBackImg] = useState({
        currentIndex: 0,
        currentImage: image[0]
    }) //current image

    useEffect(() => {
        allData.map(prop => prop.properties.map(item => item.id === id ? setFavorite(item.favorite) : {...item}))
    }, [allData])

    const forward = () => {

        if(image.length -1 > backImg.currentIndex) {
            setBackImg({currentIndex: backImg.currentIndex + 1, currentImage: image[backImg.currentIndex + 1]})
        }
    }

    const back = () => {

        if (backImg.currentIndex <= image.length && backImg.currentIndex !== 0) {
            setBackImg({currentIndex: backImg.currentIndex - 1, currentImage: image[backImg.currentIndex - 1]})
        }
    }

    
    //console.log(imageIndex)
    // console.log(backImg)

    return (
        <div className='p-2.5 h-screen bg-gray-100 md:p-5 flex flex-col gap-y-5 md:gap-y-10'>
            <div className='relative gap-y-5 pt-10  flex flex-col md:flex-row span md:items-end gap-x-5 md:h-60vh'>
                <div className='flex items-center gap-1.5  cursor-pointer absolute left-0 top-2.5' onClick={() => navigate('/')}>
                    <AiOutlineArrowLeft />
                    <p className='font-bold md:text-lg'>Back</p>
                </div>

                <div className='relative gap-y-5 md:w-3/5 md:h-full h-50vh'>
                    <img className='h-full w-full rounded-xl' loading='lazy' src={backImg.currentImage} alt={name} />
                    {
                        image.length === 1 
                        ? 
                        '' 
                        : 
                        <>
                            <div className=' cursor-pointer p-2.5 rounded-full absolute -right-2.5 bottom-1/2 bg-gray-200' onClick={() => forward()}>
                                <FaGreaterThan className='fill-current text-black'/>
                            </div>

                            <div className=' cursor-pointer p-2.5 rounded-full absolute -left-2.5 bottom-1/2 bg-gray-200 border' onClick={() => back()}>
                                <FaLessThan className='fill-current text-black'/>
                            </div>
                        </>
                    }
                    {
                        popular &&
                        <p className='bg-blue-800 text-white font-semibold absolute rounded-r-xl top-2.5 left-0 p-2.5 md:p-3 md:text-lg'>
                            Popular
                        </p>
                    }
                </div>

                <div className='flex flex-col gap-y-7 md:justify-end md:gap-y-10 w-95 self-center md:h-full md:w-2/5'>
                    <div className='flex items-center justify-between w-full'>
                        <p className='bg-white p-2 md:text-lg rounded-lg'>{availability}</p>

                        <div className={` p-2.5 shadow-2xl rounded-full max-w-max ${favorite ? 'bg-blue-800' :'bg-white'} cursor-pointer`} onClick={() => dispatch(toggleFavorite(id))}>
                            <AiOutlineHeart className={`fill-current ${favorite ? 'text-white' :'text-blue-800'}`}/>
                        </div>
                    </div>

                    
                    <div className='flex flex-col md:justify-end gap-5 md:gap-7'>

                        <div className='flex gap-2.5 items-center'>
                            <MdOutlineLocationOn className='fill-current text-yellow-800 md:h-5 md:w-5'/> 
                            <p className='md:text-xl'>{address}</p>
                        </div>

                        <p className='font-semibold text-2xl'>{name}</p>

                        <div className='flex justify-between items-center md:grid md:grid-cols-2 md:gap-5'>
                            <div className='icon items-center md:items-start'>
                                <BsBuilding className='fill-current text-black'/>
                                <p className=''>{`${rooms} Rooms(s)`}</p>
                            </div>

                            <div className='icon items-center md:items-start'>
                                <LiaBedSolid className='fill-current text-black'/>
                                <p>{`${beds} Bed(s)`}</p>
                            </div>

                            <div className='icon items-center md:items-start'>
                                <LiaBathSolid className='fill-current text-black'/>
                                <p>{`${bathroom} Bath(s)`}</p>
                            </div>

                            <div className='icon items-center md:items-start'>
                                <LiaArrowsAltSolid className='fill-current text-black'/>
                                <p>{size}</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-between'>
                            <p className='text-xl font-semibold text-blue-800 md:text-2xl'>{price} <span className='text-sm md:text-md text-black font-normal'>/month</span></p>

                            <button className='read-more md:text-lg'>
                                Rent Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex flex-col gap-y-2.5 h-1/2'>
                <p className='font-black text-xl md:text-3xl'>Description</p>
                
                <p> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, cumque sequi harum recusandae ab officia sunt 
                    excepturi delectus maiores quidem consectetur nesciunt eos sit rerum eligendi ipsum dolorum pariatur veritatis, 
                    voluptates sapiente magni tempora. Consequuntur eius ab, iure laudantium quos doloribus quisquam quia laborum, 
                    voluptatibus, ipsam alias optio inventore at.
                </p>
            </div>
        </div>
    )
}

export default PropDetails