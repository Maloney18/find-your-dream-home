import PropCard from './propCard'
import { useSelector } from 'react-redux'

const PropertyList = ({ display }) => {

    const { allData, activePage } = useSelector(store => store.db)

    // console.log(allData[3]?.properties?.slice(0,6).map(play => console.log(play.id)), activePage)
    // console.log(display)

    return (
        <div className='grid md:grid-cols-3 gap-5 w-full'>
            {
                activePage === 'york' 
                ?
                allData[3].properties?.slice(0,`${display ? 9 : 6}`).map( property => <PropCard key={property.id} details={property} />)
                :
                activePage === 'mumbai' 
                ?
                allData[1]?.properties?.slice(0,`${display ? 9 : 6}`).map( property => <PropCard key={property.id} details={property} />)
                :
                activePage === 'paris'
                ?
                allData[2]?.properties?.slice(0,`${display ? 9 : 6}`).map( property => <PropCard key={property.id} details={property} />)
                :
                activePage === 'london'
                ?
                allData[0]?.properties?.slice(0,`${display ? 9 : 6}`).map( property => <PropCard key={property.id} details={property} />) 
                :
                '' 
            }
        </div>
    )
}

export default PropertyList