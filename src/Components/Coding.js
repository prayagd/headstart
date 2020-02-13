import React from 'react';

const resources = [["Freecodecamp", "https://www.freecodecamp.org/ "],["The Odin Project", "https://www.theodinproject.com/home"], ["Scrimba", "https://scrimba.com/"], ["Flex-cheatsheet", "https://yoksel.github.io/flex-cheatsheet/"], ["Flexbox Froggy", "https://flexboxfroggy.com/"], ["Grid Garden", "https://cssgridgarden.com/"], ["Javascript Documentation", "https://javascript.info/"], ["Watch and Code", "https://watchandcode.com/courses/enrolled/60264"]]
const tools = [["Codepen", "https://codepen.io/"], ["Github", "https://github.com/"], ["Stackoverflow", "https://stackoverflow.com/"], ["ReplIt", "https://repl.it/"], ["Glitch", "https://glitch.com/"], ["VS Code", "https://code.visualstudio.com/"], ["CodeByte", "https://coderbyte.com/"], ["Codewars", "https://www.codewars.com/"]];


const Coding = () => {
    return (
        <div>
            <h2>Coding</h2>
            <ol>
                <li>Useful Links</li>
                <ul>
                    {resources.map((val) => <a href = {val[1]} target = "_blank" rel="noopener noreferrer"><li>{val[0]}</li></a>)}
                </ul>
                <li>Tools</li>
                <ul>
                    {tools.map((val) => <a href = {val[1]} target = "_blank" rel="noopener noreferrer"><li>{val[0]}</li></a>)}
                </ul>
                <li>People to follow on Twitter</li>
                <ul>
                    
                </ul>
            </ol>
            
        </div>
    )
}

export default Coding