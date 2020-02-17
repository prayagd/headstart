import React from 'react';

const resources = [["Freecodecamp - Learn Javascript", "https://www.freecodecamp.org/ "],["The Odin Project - Learn Ruby on Rails", "https://www.theodinproject.com/home"], ["Scrimba - Regex Tutorial", "https://scrimba.com/"], ["Flex-cheatsheet", "https://yoksel.github.io/flex-cheatsheet/"], ["Flexbox Froggy - CSS flex gamified", "https://flexboxfroggy.com/"], ["Grid Garden - CSS grid gamified", "https://cssgridgarden.com/"], ["Javascript Documentation", "https://javascript.info/"], ["Watch and Code", "https://watchandcode.com/courses/enrolled/60264"]]
const tools = [["Codepen - Online Code editor", "https://codepen.io/"], ["Github - Platform for version control", "https://github.com/"], ["Stackoverflow", "https://stackoverflow.com/"], ["ReplIt - Online IDE", "https://repl.it/"], ["VS Code - Code editor", "https://code.visualstudio.com/"], ["CodeByte - Coding challenges", "https://coderbyte.com/"], ["Codewars - Coding challenges personal favourite", "https://www.codewars.com/"]];
const people = ["Quincy Larson", "Dan Abramov", "Preethi Kasireddy", "Austen Allred", "Samarth Jajoo", "Wes Bos"]

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
                    {people.map((val) => <li>{val}</li>)}
                </ul>
            </ol>
        </div>
    )
}

export default Coding