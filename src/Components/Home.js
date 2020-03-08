import React from 'react';
import Headstart from "../Capture.PNG"


const Home = () => {
    return (
        <div className = "home">
            <img src = {Headstart} alt = "getting headstart"/>
            <h2>Start upskilling now</h2>
            <p>While learning to code and exploring about writing and social media marketing. I have come across some useful links. In order to share those links with everyone and to test my coding skills. I have created this directory. Most of the links are free. If you know any more free resources to learn. Please share them with me on <a href = "https://twitter.com/meprayag" id = "twitter" target = "_blank" rel="noopener noreferrer">twitter</a>.</p>
        </div>
    )
}

export default Home