import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import CategoryThemes from "../components/Category/CategoryThemes";
import Showcase from "../components/Showcase/Showcase";
import PartnerSection from "../components/Partners/PartnerSection";
import BrandingNavigation from "../components/Branding/BrandingNavigation";
import Footer from "../components/Footer/Footer";

const Home: React.FC = () => {
    return(
        <>
            <Header/>
            <main>
                <Banner/>
                <CategoryThemes/>
                <Showcase type="main"/>
                <PartnerSection/>
                <Showcase type="secondary"/>
                <BrandingNavigation/>
                <Showcase type="secondary"/>
            </main>
            <Footer/>
        </>
    )
}

export default Home
