import React from 'react';
import Skills from './skills'

const resources = [["Freecodecamp - Learn Javascript", "https://www.freecodecamp.org/ "],["The Odin Project - Learn Ruby on Rails", "https://www.theodinproject.com/home"], ["Scrimba - Regex Tutorial", "https://scrimba.com/"], ["Flex-cheatsheet", "https://yoksel.github.io/flex-cheatsheet/"], ["Flexbox Froggy - CSS flex gamified", "https://flexboxfroggy.com/"], ["Grid Garden - CSS grid gamified", "https://cssgridgarden.com/"], ["Javascript Documentation", "https://javascript.info/"], ["Stackoverflow", "https://stackoverflow.com/"], ["Watch and Code", "https://watchandcode.com/courses/enrolled/60264"]]
const tools = [["Codepen - Online Code editor", "https://codepen.io/"], ["Github - Platform for version control", "https://github.com/"], ["ReplIt - Online IDE", "https://repl.it/"], ["VS Code - Code editor", "https://code.visualstudio.com/"], ["CodeByte - Coding challenges", "https://coderbyte.com/"], ["Codewars - Coding challenges personal favourite", "https://www.codewars.com/"]];
const people = [["Quincy Larson", "https://twitter.com/ossia"], ["Dan Abramov", "https://twitter.com/dan_abramov"], ["Preethi Kasireddy", "https://twitter.com/iam_preethi"], ["Austen Allred", "https://twitter.com/Austen"], ["Samarth Jajoo", "https://twitter.com/jajoosam"], ["Wes Bos", "https://twitter.com/wesbos"]]

const Coding = () => {
    return (
        <Skills name = {"Coding"} resources = {resources} tools = {tools} people = {people}/>
    )
}

export default Coding