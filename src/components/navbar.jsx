import { useDispatch, useSelector } from 'react-redux'
import { navigate } from '../db/features/db'

const Navbar = () => {
    const dispatch = useDispatch()
    const { activePage } = useSelector(store => store.db)

    return (
        <div className='flex gap-2.5 md:gap-5 items-center'>
            <p className={`nav-btn ${ activePage === 'york' ? 'active' : 'not-active'}`} onClick={() => dispatch(navigate('york'))}>New York</p>
            <p className={`nav-btn ${ activePage === 'mumbai' ? 'active' : 'not-active'}`} onClick={() => dispatch(navigate('mumbai'))}>Mumbai</p>
            <p className={`nav-btn ${ activePage === 'paris' ? 'active' : 'not-active'}`} onClick={() => dispatch(navigate('paris'))}>Paris</p>
            <p className={`nav-btn ${ activePage === 'london' ? 'active' : 'not-active'}`} onClick={() => dispatch(navigate('london'))}>London</p>
        </div>
    )
} 

export default Navbar