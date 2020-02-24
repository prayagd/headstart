import React from 'react';
import Skills from './skills'

const resources = [["Blog by Harry Dry","https://marketingexamples.com/"], ["FB ads", "https://adsalchemist.com/blog/"], ["FB ads tutorial", "https://www.facebook.com/business/learn"], ["The Kanye Story", "https://thekanyestory.com/"]]
const people = ["Matthew Kobach - Must follow", "Harry Dry", "David Herrmann", "Ads Alchemist"]
const tools = []

const Marketing = () => {
    return (
        <Skills name = {"Digital Marketing"} resources = {resources} tools = {tools} people = {people}/>
    )
}

export default Marketing