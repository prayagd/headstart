import React from 'react';

const resources = [["Guide to writing Online - David Perell", "https://www.perell.com/blog/the-ultimate-guide-to-writing-online"], ["Why Everyone Should write - Morgan Housel", "https://www.collaborativefund.com/blog/why-everyone-should-write/"], ["Building Second Brain", "https://www.youtube.com/watch?v=lNJ33ImlZzs"], ["Day you became better writer - Scott Adams", "https://dilbertblog.typepad.com/the_dilbert_blog/2007/06/the_day_you_bec.html"], ["Version II of above post", "https://www.scottadamssays.com/2015/08/22/the-day-you-became-a-better-writer-2nd-look/"], ["Writing Syllabus - David Perell", "https://www.perell.com/blog/my-writing-syllabus"], ["Say Something - Seth Goldin", "https://seths.blog/2015/02/say-something/"]]
const tools = [["Hemingway Editor - Online Editor", "http://www.hemingwayapp.com/"], ["KeyBr - Improve your typing speed", "https://www.keybr.com/"], ["Evernote - Take Notes", "https://evernote.com/"], ["Pocket - Save articles/links", "https://app.getpocket.com/"]]
const people = ["David Perell", "Tiago Forte", "Paul Graham", "Sahil Lavingia"]

const Writing = () => {
    return (
        <div>
            <h2>Writing</h2>
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

export default Writing