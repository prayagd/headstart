import React from 'react';

const resources = [["Learn about cryptocurrency","https://nakamoto.com/introduction-to-cryptocurrency/"]]

const people = ["Balaji S. Srinivasan", "Pomp"]


const Crypto = () => {
    return (
        <div>
        <h2>Blockchain</h2>
        <ol>
                <li>Useful Links</li>
                <ul>
                    {resources.map((val) => <a href = {val[1]} target = "_blank" rel="noopener noreferrer"><li>{val[0]}</li></a>)}
                </ul>
                <li>Tools</li>
                <ul>
                    
                </ul>
                <li>People to follow on Twitter</li>
                <ul>
                    {people.map((val) => <li>{val}</li>)}
                </ul>
        </ol>
    </div>
    )
}

export default Crypto