import {useState} from 'react'
function Textchange(){
    let[text,setText]=useState('Hello')

    function changeText(){
        setText('Hi')
    }
    return (
        <div>
        <h2>{text}</h2>
        <button onClick={changeText}>Change Text</button>
        </div>
    )
}

export default Textchange