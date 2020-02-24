import React from 'react';
import Skills from './skills'

const resources = [["Cryptocurrency course","https://nakamoto.com/introduction-to-cryptocurrency/"]]
const tools = []
const people = ["Balaji S. Srinivasan", "Pomp"]


const Crypto = () => {
    return (
        <Skills name = {"Blockchain"} resources = {resources} tools = {tools} people = {people}/>
    )
}

export default Crypto