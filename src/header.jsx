import download from './assets/download.png'
// import edit from './assets/edit.png'
import view from './assets/view.png'


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
                
            </div>
        </main>
    )
}