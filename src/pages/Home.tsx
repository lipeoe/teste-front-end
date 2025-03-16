import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import CategoryThemes from "../components/Category/CategoryThemes";

const Home: React.FC = () => {
    return(
        <>
            <Header/>
            <main>
                <Banner/>
                <CategoryThemes/>
            </main>
        </>
    )
}

export default Home
