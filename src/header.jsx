// import { useState } from 'react';
import download from './assets/download.png'
// import edit from './assets/edit.png'
import view from './assets/view.png'
import add from './assets/add.png'


export function Header(){
    return (
        <header>
            <h2>CV MAKER</h2>
            <div className="headerSelect">

                <img src={view} alt='View'></img>
                <img src={download} alt='View'></img>
            </div>
        </header>
    )
}

export function Main(){
    return (
        <main>
            <Summary />
            <Education />
            <Work />
        </main>
    )
}

function Summary(){
    return (
        <section className='summarySec'>
            <h2>Summary</h2>
            <textarea placeholder='Write your summary...'></textarea>
        </section>
    )
}

function Education(){
    return (
        <section className="educationSec addSec">
            <h2>Educational Experience</h2>
            <button><img src={add}></img></button>
        </section>
    )
}

function Work(){
    return (
        <section className="workSec addSec">
            <h2>Work Experience</h2>
            <button><img src={add}></img></button>
        </section>
    )
}



