import { useState } from 'react';
import download from './assets/download.png'
import edit from './assets/edit.png'
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
        </main>
    )
}

function Summary(){
    return (
        <section>
            <h2>Summary</h2>
            <textarea placeholder='Write your summary...'></textarea>
        </section>
    )
}



