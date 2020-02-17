import React from 'react';

const resources = [["Blog by Harry Dry","https://marketingexamples.com/"], ["FB ads", "https://adsalchemist.com/blog/"], ["FB ads tutorial", "https://www.facebook.com/business/learn"], ["The Kanye Story", "https://thekanyestory.com/"]]
const people = ["Matthew Kobach - Must follow", "Harry Dry", "David Herrmann", "Ads Alchemist"]


const Marketing = () => {
    return (
        <div>
            <h2>Marketing</h2>
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

export default Marketing