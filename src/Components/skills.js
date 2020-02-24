import React from 'react';


const skills = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <ol>
                <li>Useful Links</li>
                <ul>
                    {props.resources.map((val) => <a href = {val[1]} target = "_blank" rel="noopener noreferrer"><li>{val[0]}</li></a>)}
                </ul>
                <li>Tools</li>
                <ul>
                    {props.tools.map((val) => <a id = "fields" href = {val[1]} target = "_blank" rel="noopener noreferrer"><li>{val[0]}</li></a>)}
                </ul>
                <li>People to follow on Twitter</li>
                <ul>
                    {props.people.map((val) => <li>{val}</li>)}
                </ul>
            </ol>
        </div>
    )
}

export default skills