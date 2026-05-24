// import { useState } from 'react';
import download from './assets/download.png'
// import edit from './assets/edit.png'
import view from './assets/view.png'
import add from './assets/add.png'
import deleteImg from './assets/delete.png'


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
            <Profile />
            <Summary />
            <Education />
            <EducationalSection />
            
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

function EducationalSection(){
    return (
        <section className="eduInfo">
            <div className="uniTitle">
                <input type="text" name="uniName" id="uniName" placeholder='University Name'/>
                <input type="text" name="uniLocation" id="uniLocation" placeholder='Location'/>
            </div>
            <div className="uniTime">
                <input type="text" name="uniFrom" id="uniFrom" placeholder='From...'/>
                <input type="text" name="uniTo" id="uniTo" placeholder='To...'/>
            </div>
            <input type="text" name="uniDegree" id="uniDegree" placeholder='Degree or Program' />
            <input type="text" name="uniAccomplishment" id="uniAccomplishment" placeholder='Accomplishments and Achivements'/>
            <button><img src={deleteImg}></img> Delete</button>
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

function Profile(){
    return (
    <section className="genInfo">
        <input type="text" name="fullName" id="fullName" placeholder='First Name & Last Name'/>
        <input type="text" name="phoneNo" id="phoneNo" placeholder='Phone'/>
        <input type="text" name="emailAdr" id="emailAdr" placeholder='Email'/>
        <input type="text" name="adr" id="adr" placeholder='Address'/>
        </section>
    )
}



