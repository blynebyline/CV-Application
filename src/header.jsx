import { useState } from 'react';
import download from './assets/download.png'
// import edit from './assets/edit.png'
import view from './assets/view.png'
import add from './assets/add.png'
import { Input, DeleteButton } from './helper';


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

    const updateEduc = (id, field, value) => {
        setEduc(educ.map(entry => 
            entry.id === id ? {...entry, [field]: value} : entry
        ))
    }

    const deleteEduc = (id) => {
        setEduc(educ.filter(entry => entry.id !== id))
    }
    const [wrk, setWrk] = useState([]);

    const addWork = () => {
        setWrk([
            ...wrk,
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

    const updateWork = (id, field, value) => {
        setWrk(wrk.map(entry => 
            entry.id === id ? {...entry, [field]: value} : entry
        ))
    }

    const deleteWork = (id) => {
        setWrk(wrk.filter(entry => entry.id !== id))
    }

    return (
        <main>
            <Profile />
            <Summary />
            <Education addEduc={addEduc}/>
            {educ.map((item) => (
                <EducationalSection key={item.id} item={item} updateEduc={updateEduc} deleteEduc={deleteEduc}/>
            ))}
            <Work addWork={addWork} />
            {wrk.map((item) => (
                <WorkSection key={item.id} item={item} updateWork={updateWork} deleteWork={deleteWork}/>
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

function EducationalSection({ item, updateEduc, deleteEduc}){
    return (
        <section className="eduInfo">
            <div className="uniTitle">
                <Input value={item.school} onChange={(e) => updateEduc(item.id, "school", e.target.value)} className="uniName" placeholder='University Name'/>
                <Input value={item.location} onChange={(e) => updateEduc(item.id, "location", e.target.value)} className="uniLocation" placeholder='Location'/>
            </div>
            <div className="uniTime">
                <Input value={item.from} onChange={(e) => updateEduc(item.id, "from", e.target.value)} className="uniFrom" placeholder='From'/>
                <Input value={item.to} onChange={(e) => updateEduc(item.id, "to", e.target.value)} className="uniTo" placeholder='To'/>
            </div>
            <Input value={item.degree} onChange={(e) => updateEduc(item.id, "degree", e.target.value)} className="uniDegree" placeholder='Degree or Program'/>
            <Input value={item.accomplishment} onChange={(e) => updateEduc(item.id, "accomplishment", e.target.value)} className="uniAccomplishment" placeholder='Accomplishments and Achievements'/>
            <DeleteButton onClick={() => deleteEduc(item.id)}/>
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

function WorkSection({item, updateWork, deleteWork}){
    return (
        <section className="workInfo">
            <div className="uniTitle">
                <Input value={item.company} onChange={(e) => updateWork(item.id, "company", e.target.value)} className="comName" placeholder='Company Name'/>
                <Input value={item.location} onChange={(e) => updateWork(item.id, "location", e.target.value)} className="comLoc" placeholder='Location'/>
            </div>
            <div className="uniTime">
                <Input value={item.from} onChange={(e) => updateWork(item.id, "from", e.target.value)} className="comFrom" placeholder='From'/>
                <Input value={item.to} onChange={(e) => updateWork(item.id, "to", e.target.value)} className="comTo" placeholder='To'/>
            </div>
            <Input value={item.role} onChange={(e) => updateWork(item.id, "role", e.target.value)} className="comRole" placeholder='Role'/>
            <Input value={item.accomplishment} onChange={(e) => updateWork(item.id, "accomplishment", e.target.value)} className="comAccomplishment" placeholder='Accomplishments and Achivements'/>
            <DeleteButton onClick={() => deleteWork(item.id)}/>
        </section>
    )
}



