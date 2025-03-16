import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";

const Home: React.FC = () => {
    return(
        <>
            <Header/>
            <main>
                <Banner/>
            </main>
        </>
    )
}

export default Home
