import React, {useState} from 'react'
import HeroSection from '../components/Home';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data';
import Projects from '../components/Projects'
import Navbar from '../components/Navbar'
import Sidebar from '../components/HamburgerMenu'
import Footer from '../components/Footer';

const Home = () => {
    const[isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle = {toggle}/>
            <Navbar toggle = {toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Projects/>
            {/* <InfoSection {...homeObjThree}/> */}
            <Footer/>
        </>
    )
}

export default Home
