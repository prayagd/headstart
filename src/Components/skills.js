import React from 'react';


const skills = (props) => {
    return (
        <div id = "skills">
            <h2 className = "skill-title">{props.name}</h2>
            <ol>
                <li className = "titles">Useful Links</li>
                <ul>
                    {props.resources.map((val) => <a href = {val[1]} target = "_blank" rel="noopener noreferrer"><li>{val[0]}</li></a>)}
                </ul>
                <li className = "titles">Tools</li>
                <ul id = "fields">
                    {props.tools.map((val) => <a  href = {val[1]} target = "_blank" rel="noopener noreferrer"><li>{val[0]}</li></a>)}
                </ul>
                <li className = "titles">People to follow on Twitter</li>
                <ul>
                    {props.people.map((val) => <li>{val}</li>)}
                </ul>
            </ol>
        </div>
    )
}

export default skills