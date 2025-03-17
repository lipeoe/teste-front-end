import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import CategoryThemes from "../components/Category/CategoryThemes";
import Showcase from "../components/Showcase/Showcase";
import SectionTitle from "../components/Sections/Sections";

const Home: React.FC = () => {
    return(
        <>
            <Header/>
            <main>
                <Banner/>
                <CategoryThemes/>
                <SectionTitle/>
                <Showcase/>
            </main>
        </>
    )
}

export default Home
