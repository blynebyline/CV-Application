import { useState } from 'react';
import download from './assets/download.png'
// import edit from './assets/edit.png'
import view from './assets/view.png'
import add from './assets/add.png'
import { Input, DeleteButton } from './helper';


export function Header({ changePreview, preview }){

    return (
        <header>
            <h2>CV MAKER</h2>
            <div className="headerSelect">

                <button onClick={changePreview}><img src={view} alt='View'></img></button>
                {preview && <button><img src={download} alt='View'></img></button>}
            </div>
        </header>
    )
}

export function Main({ preview }){
    const [profile, setProfile] = useState({
        fullName: "",
        phone: "",
        email: "",
        address: "",
    })

    const updateProfile = (field, value) => {
        setProfile({...profile, [field]: value})
    }

    const [summary, setSummary] = useState("")

    const updateSummary = (value) => {
        setSummary(value)
    }


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

    if(preview){
        return <Paper educ={educ} wrk={wrk} profile={profile} summary={summary}/>
    } else {

        return (
        <main>
            <Profile updateProfile={updateProfile} profile={profile} />
            <Summary summary={summary} updateSummary={updateSummary}/>
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
}

function Profile({ profile, updateProfile }){
    return (
    <section className="genInfo">
        <Input value={profile.fullName} onChange={(e) => updateProfile("fullName", e.target.value)} className="profileInput" placeholder='First Name & Last Name'/>
        <Input value={profile.phone} onChange={(e) => updateProfile("phone", e.target.value)} className="profileInput" placeholder='Phone'/>
        <Input value={profile.email} onChange={(e) => updateProfile("email", e.target.value)} className="profileInput" placeholder='Email'/>
        <Input value={profile.address} onChange={(e) => updateProfile("address", e.target.value)} className="profileInput" placeholder='Address'/>
        </section>
    )
}


function Summary({summary, updateSummary}){
    return (
        <section className='summarySec'>
            <h2>Summary</h2>
            <textarea value={summary} onChange={(e) => updateSummary(e.target.value)} placeholder='Write your summary...'></textarea>
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

function Paper({educ, wrk, profile, summary}){
    return (
        <div id="paper" className="paper">
            <h1>{profile.fullName}</h1>
            <div className="paperProfile">
                <p>{profile.email}</p>
                <p>{profile.phone}</p>
                <p>{profile.address}</p>
            </div>
            <hr></hr>
            <h2>Summary</h2>
            <p>{summary}</p>
            <hr></hr>
            <h2>Education</h2>
            {educ.map(item => (
                <div key={item.id}>
                    <div className="upperPaper">
                        <h3>{item.school}</h3>
                        <p>({item.location})</p>
                        <p>{item.from} - {item.to}</p>
                    </div>
                    <p>{item.degree}</p>
                    <p>{item.accomplishment}</p>
                </div>
            ))}
            <hr></hr>
            {wrk.map(item => (
                <div key={item.id}>
                    <div className="upperPaper">
                        <h3>{item.company}</h3>
                        <p>({item.location})</p>
                        <p>{item.from} - {item.to}</p>
                    </div>
                    <p>{item.role}</p>
                    <p>{item.accomplishment}</p>
                </div>
            ))}
        </div>
    )
}



