import React from 'react';
import Headstart from "../Capture.PNG"


const Home = () => {
    return (
        <div className = "home">
            <img src = {Headstart} alt = "getting headstart"/>
            <h2>Start upskilling now</h2>
            <p>This website is a directory of all the tools/articles that i have found useful. While learning  to code and get more interested into writing and social media marketing. Most of the links here are free. If you have know any such free resources to learn which have high signal to noise ratio. Please share them with me on <a href = "https://twitter.com/meprayag" id = "twitter" target = "_blank" rel="noopener noreferrer">twitter</a>. So that i could add them here.</p>
        </div>
    )
}

export default  Home