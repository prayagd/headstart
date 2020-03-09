import React from 'react';
import Skills from './skills'

const resources = [["Guide to writing online - David Perell", "https://www.perell.com/blog/the-ultimate-guide-to-writing-online"], ["Why everyone should write - Morgan Housel", "https://www.collaborativefund.com/blog/why-everyone-should-write/"], ["Building second brain", "https://www.youtube.com/watch?v=lNJ33ImlZzs"], ["How to bullet journal", "https://www.youtube.com/watch?v=fm15cmYU0IM&list=WL&index=40&t=0s"], ["The day you became better writer - Scott Adams", "https://dilbertblog.typepad.com/the_dilbert_blog/2007/06/the_day_you_bec.html"], ["Version II of above post", "https://www.scottadamssays.com/2015/08/22/the-day-you-became-a-better-writer-2nd-look/"], ["Writing syllabus - David Perell", "https://www.perell.com/blog/my-writing-syllabus"], ["Say something - Seth Goldin", "https://seths.blog/2015/02/say-something/"]]
const tools = [["Hemingway editor - Online Editor", "http://www.hemingwayapp.com/"], ["KeyBr - Improve your typing speed", "https://www.keybr.com/"], ["Evernote - Take notes", "https://evernote.com/"], ["Pocket - Save articles/links", "https://app.getpocket.com/"]]
const people = [["David Perell - Must Follow", "https://twitter.com/david_perell"], ["Tiago Forte", "https://twitter.com/fortelabs"], ["Paul Graham", "https://twitter.com/paulg"], ["Sahil Lavingia", "https://twitter.com/shl"]]

const Writing = () => {
    return (
        <Skills name = {"Writing"} resources = {resources} tools = {tools} people = {people}/>
    )
}

export default Writing