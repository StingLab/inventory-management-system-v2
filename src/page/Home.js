import React from 'react';
import Header from '../component/Header';
import HomeLogin from '../component/HomeLogin';

function Home(props) {
    return (
        <div>
            <Header/>
            <HomeLogin/>
        </div>
    );
}

export default Home;