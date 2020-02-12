import React from 'react';
const resources = [["Freecodecamp", "https://www.freecodecamp.org/ "],["The Odin Project", "https://www.theodinproject.com/home"], ["Scrimba", "https://scrimba.com/"], ["Flex-cheatsheet", "https://yoksel.github.io/flex-cheatsheet/"], ["Flexbox Froggy", "https://flexboxfroggy.com/"], ["Grid Garden", "https://cssgridgarden.com/"], ["Javascript Documentation", "https://javascript.info/"], ["Watch and Code", "https://watchandcode.com/courses/enrolled/60264"]]

const Coding = () => {
    return (
        <div>
            <h2>Coding</h2>
            <ol>
                <li>Useful Links</li>
                <ul>
                    {resources.map((val) => <a href = {val[1]} target = "_blank"><li>{val[0]}</li></a>)}
                </ul>
                <li>Tools</li>

                <li>People to follow on Twitter</li>
            </ol>
            
        </div>
    )
}

export default Coding