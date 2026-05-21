import download from './assets/download.png'
// import edit from './assets/edit.png'
import view from './assets/view.png'
import add from './assets/add.png'


export function Header(){
    return (
        <header>
            <h2>CV Maker</h2>
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
            <div className="info">
                <section className='generalInformation'>
                    <h3>General Information</h3>
                    <input placeholder='Name' type='text'></input>
                    <input placeholder='Email' type='email'></input>
                    <input placeholder='Phone Number'type="text" />
                 </section>
                 <Education />
                 <Work />
            </div>
        </main>
    )
}

function EducationExperience(){
    return (
        <section className="educationExp">
            <input placeholder='University Name' type='text'></input>
            <input placeholder='Program' type='text'></input>
            <div className="yearExp">
                <input placeholder='From' type='number' min={1960}></input>
                <input placeholder='To' type='number' min={1960}></input>
            </div>

            
        </section>
    )
}

function WorkExperience(){
    return (
        <section className="workExp">
            <input placeholder='Work Title' type='text'></input>
            <input placeholder='Company Name' type='text'></input>
            <div className="yearExp">
                <input placeholder='From' type='number' min={1960}></input>
                <input placeholder='To' type='number' min={1960}></input>
            </div>

            
        </section>
    )
}

function Education(){
    return(
        <>
            <section className='educationHeader'>
                <div className="educationTitle">
                    <h3>Educational Experience</h3>
                </div>
                <div className="educationAdd">
                    <button><img src={add}></img></button>
                </div>

                
            </section>

            <EducationExperience />
        </>
       
    )
}

function Work(){
    return(
        <>
            <section className='workHeader'>
                <div className="workTitle">
                    <h3>Work Experience</h3>
                </div>
                <div className="workAdd">
                    <button><img src={add}></img></button>
                </div>

                
            </section>
            <WorkExperience />
        </>
    )
}
