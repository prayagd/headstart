import React from 'react';
import Skills from './skills'

const resources = [["Marketing Examples - Harry Dry","https://marketingexamples.com/"], ["Ads alchemist", "https://adsalchemist.com/blog/"], ["FB ads tutorial", "https://www.facebook.com/business/learn"], ["The Kanye Story", "https://thekanyestory.com/"]]
const people = [["Matthew Kobach - Must follow", "https://twitter.com/mkobach"], ["Harry Dry", "https://twitter.com/harrydry"], ["David Herrmann", "https://twitter.com/herrmanndigital"], ["Ads Alchemist", "https://twitter.com/AdsAlchemist"]]
const tools = []

const Marketing = () => {
    return (
        <Skills name = {"Digital Marketing"} resources = {resources} tools = {tools} people = {people}/>
    )
}

export default Marketing