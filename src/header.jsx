import { useState } from 'react';
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
    const [educ, setEduc] = useState([]);

    const addEduc = () => {
        setEduc([
            ...educ,
            {
                id: crypto.randomUUID(),
                school: "",
                location: "",
                from: "",
                to: "",
                degree: "",
                accomplishment: "",
            }
        ])
    }
    const [wrk, setWrk] = useState([]);

    const addWork = () => {
        setWrk([
            ...educ,
            {
                id: crypto.randomUUID(),
                company: "",
                location: "",
                from: "",
                to: "",
                role: "",
                accomplishment: "",
            }
        ])
    }

    return (
        <main>
            <Profile />
            <Summary />
            <Education addEduc={addEduc}/>
            {educ.map((item) => (
                <EducationalSection key={item.id} />
            ))}
            <Work addWork={addWork} />
            {wrk.map((item) => (
                <WorkSection key={item.id} />
            ))}
        </main>
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


function Summary(){
    return (
        <section className='summarySec'>
            <h2>Summary</h2>
            <textarea placeholder='Write your summary...'></textarea>
        </section>
    )
}

function Education( { addEduc }){
    return (
        <section className="educationSec addSec">
            <h2>Educational Experience</h2>
            <button onClick={addEduc}><img src={add}></img></button>
        </section>
    )
}

function EducationalSection(){
    return (
        <section className="eduInfo">
            <div className="uniTitle">
                <input type="text" name="uniName" className="uniName" placeholder='University Name'/>
                <input type="text" name="uniLocation" className="uniLocation" placeholder='Location'/>
            </div>
            <div className="uniTime">
                <input type="text" name="uniFrom" className="uniFrom" placeholder='From...'/>
                <input type="text" name="uniTo" className="uniTo" placeholder='To...'/>
            </div>
            <input type="text" name="uniDegree" className="uniDegree"  placeholder='Degree or Program' />
            <input type="text" name="uniAccomplishment" className="uniAccomplishment" placeholder='Accomplishments and Achivements'/>
            <button><img src={deleteImg}></img> Delete</button>
        </section>
    )
}

function Work({ addWork }){
    return (
        <section className="workSec addSec">
            <h2>Work Experience</h2>
            <button onClick={addWork}><img src={add}></img></button>
        </section>
    )
}

function WorkSection(){
    return (
        <section className="workInfo">
            <div className="uniTitle">
                <input type="text" name="comName" className="comName" placeholder='Company Name'/>
                <input type="text" name="comLoc" className="comLoc" placeholder='Location'/>
            </div>
            <div className="uniTime">
                <input type="text" name="comFrom" className="comFrom" placeholder='From...'/>
                <input type="text" name="comTo" className="comTo" placeholder='To...'/>
            </div>
            <input type="text" name="comRole" className="comRole" placeholder='Role' />
            <input type="text" name="comAccomplishment" className="comAccomplishment" placeholder='Accomplishments and Achivements'/>
            <button><img src={deleteImg}></img> Delete</button>
        </section>
    )
}



