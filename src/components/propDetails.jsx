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
        <div className='p-2.5 h-screen bg-gray-100 flex flex-col gap-y-5'>
            <div className='relative gap-y-3 pt-10 flex flex-col md:flex-row span md:items-center gap-x-2.5 '>
                <div className='flex items-center gap-1.5  cursor-pointer absolute left-0 top-2.5' onClick={() => navigate('/')}>
                    <AiOutlineArrowLeft />
                    <p className='font-bold'>Back</p>
                </div>

                <div className='relative flex flex-col h-1/2 gap-y-5 md:w-2/5 md:h-full'>
                    <img className='h-full w-full rounded-xl' loading='lazy' src={backImg.currentImage} alt={name} />

                    <div className='flex items-center justify-between w-full'>
                        <p className='bg-white p-2 rounded-lg'>{availability}</p>

                        <div className={` p-2.5 rounded-full max-w-max ${favorite ? 'bg-blue-800' :'bg-white'} cursor-pointer`} onClick={() => dispatch(toggleFavorite(id))}>
                            <AiOutlineHeart className={`fill-current ${favorite ? 'text-white' :'text-blue-800'}`}/>
                        </div>
                    </div>

                    {
                        image.length === 1 
                        ? 
                        '' 
                        : 
                        <>
                            <div className='p-2.5 rounded-full absolute -right-2.5 bottom-1/2 bg-gray-200' onClick={() => forward()}>
                                <FaGreaterThan className='fill-current text-black'/>
                            </div>

                            <div className='p-2.5 rounded-full absolute -left-2.5 bottom-1/2 bg-gray-200 border' onClick={() => back()}>
                                <FaLessThan className='fill-current text-black'/>
                            </div>
                        </>
                    }
                    {
                        popular &&
                        <p className='popular absolute top-2.5 left-0 p-2.5 h-10'>
                            Popular
                        </p>
                    }
                </div>

                <div className='flex flex-col gap-5 w-95 self-center md:self-start md:w-3/5 md:h-1/2'>
                    <div className='flex gap-2.5 items-center'>
                        <MdOutlineLocationOn className='fill-current text-yellow-800'/> 
                        <p>{address}</p>
                    </div>

                    <p className='font-semibold text-xl'>{name}</p>

                    <div className='flex justify-between items-center md:grid md:grid-cols-2 md:gap-5'>
                        <div className='icon'>
                            <BsBuilding className='fill-current text-black'/>
                            <p>{`${rooms} Rooms(s)`}</p>
                        </div>

                        <div className='icon'>
                            <LiaBedSolid className='fill-current text-black'/>
                            <p>{`${beds} Bed(s)`}</p>
                        </div>

                        <div className='icon'>
                            <LiaBathSolid className='fill-current text-black'/>
                            <p>{`${bathroom} Bath(s)`}</p>
                        </div>

                        <div className='icon'>
                            <LiaArrowsAltSolid className='fill-current text-black'/>
                            <p>{size}</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <p className='text-xl font-semibold text-blue-800'>{price} <span className='text-sm text-black font-normal'>/month</span></p>

                        <button className='read-more'>
                            Read More
                        </button>
                    </div>
                </div>
            </div>


            <div className='flex flex-col gap-y-2.5'>
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