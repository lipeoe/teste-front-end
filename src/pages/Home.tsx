import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import CategoryThemes from "../components/Category/CategoryThemes";
import Showcase from "../components/Showcase/Showcase";
import PartnerSection from "../components/Partners/PartnerSection";

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
            </main>
        </>
    )
}

export default Home
