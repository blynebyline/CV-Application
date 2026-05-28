import { useState } from 'react'
import './style/App.css'
import './style/education.css';
import './style/input.css';
import { Header, Main } from './header'

function App() {
  const [preview, setPreview] = useState(false);
  
    const changePreview = () => setPreview(!preview);
  

  return (
    <>
      <Header changePreview={changePreview} preview={preview}/> 
      <div className="pageWrapper">
        <Main preview={preview}/>
      </div>
    </>
  )
}

export default App
