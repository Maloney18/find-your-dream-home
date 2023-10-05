import { LiaBedSolid, LiaBathSolid, LiaArrowsAltSolid } from 'react-icons/lia'
import { BsBuilding } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineLocationOn } from 'react-icons/md'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleFavorite } from '../db/features/db'
import { useNavigate } from 'react-router-dom'


const PropCard = ({ details}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id, address, name, rooms, beds, bathroom, size, price, popular, image, availability, favorite} = details
    const [backImg, setBackImg] = useState(image[0])
    const [current, setCurrent] = useState(image[0])

    const background = {
        backgroundImage: `url(${backImg})`
    }

    const changeImage = (ind) => {
        image.length !== 1 ? setBackImg(image[ind]) : '' 
    }
    
    return (
        <div className='prop-card'>
            <div className='upper-part'>
                <img className='image' loading='lazy' src={backImg} alt={name} />
                <div className='flex items-center justify-between w-full z-10'>
                    <p className='text-blue-800 py-2 px-3.5 rounded-full bg-white'>{availability}</p>

                    <div className={`p-2 rounded-full  ${favorite ? 'bg-blue-800' :'bg-white'} cursor-pointer`} onClick={() => dispatch(toggleFavorite(id))}>
                        <AiOutlineHeart className={`fill-current ${favorite ? 'text-white' :'text-blue-800'}`}/>
                    </div>
                </div>


                {
                    image.length === 1 
                    ? 
                    '' 
                    : 
                    <div className=' self-center flex items-center gap-2.5 z-10'>
                        { 
                            image.map( (property, index) =>{ 
                                return (
                                    <span 
                                        className={`change-images ${property === current ? 'obj' : 'current'}`} 
                                        onClick={() => {
                                            changeImage(Number(index))
                                            setCurrent(image[Number(index)])
                                        }}
                                    ></span>
                                )
                            })
                        }
                    </div>
                }
                {
                    popular &&
                    <p className='popular'>
                        Popular
                    </p>
                }
            </div>

            <div className='flex flex-col gap-5 w-95 self-center'>
                <div className='flex gap-2.5 items-center'>
                    <MdOutlineLocationOn className='fill-current text-yellow-800'/> 
                    <p>{address}</p>
                </div>

                <p className='font-semibold text-xl'>{name}</p>

                <div className='flex justify-between items-center'>
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

                    <button 
                        className='read-more' 
                        onClick={() => navigate(`/property/${id}`, {state: details})}
                    >
                        Read More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PropCard