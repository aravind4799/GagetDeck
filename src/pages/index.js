import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InfoSection from '../components/InfoSection';
import HeroSection from '../components/HeroSelection';
import Services from '../components/Services';
import Footer from '../components/Footer';
import {homeObjOne,homeObjTwo,homeObjThree} from '../components/InfoSection/Data';
import Search from '../components/Search';
const Home = () => {
    const [isOpen,setIsOpen] =useState(false);

    const toggle =()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <Search/>
            <Footer/>
        </>
    )
}

export default Home;
