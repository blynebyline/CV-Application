import deleteImg from './assets/delete.png'

export function Input({ value, onChange, className, placeholder}){
    return <input value={value} onChange={onChange} type="text" className={className} placeholder={placeholder}></input>
}

export function DeleteButton({ onClick}){
    return <button onClick={onClick}><img src={deleteImg}></img> Delete</button>
}