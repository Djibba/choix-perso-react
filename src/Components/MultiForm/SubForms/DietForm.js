import React, {useState} from "react";
import './SubForm.css'

function DietForm (props) {

    const [formData, setFormData] = useState({
        dietForm: 'nodiet'
    })
    const preventFunc = (e) => {
        e.preventDefault();
    }
    const handleRadio = (e) => {
        setFormData({
            dietForm: e.target.value
        })
    }
    return (
        <form className='diet-form' onSubmit={preventFunc}>
            <p>Quelle est ton régime alimentaire</p>
            <label htmlFor="nodiet">Pas de régime en particulier</label>
            <input
                type="radio"
                onChange={handleRadio}
                id="nodiet"
                name="diet"
                value="nodiet"
            />

            <label htmlFor="homnivorous">Homnivore</label>
            <input
                type="radio"
                onChange={handleRadio}
                id="homnivorous"
                name="diet"
                value="homnivorous"
            />

            <label htmlFor="vegetarian">Végétarien</label>
            <input
                type="radio"
                onChange={handleRadio}
                id="vegetarian"
                name="diet"
                value="vegetarian"
            />

            <label htmlFor="vegan">Vegan</label>
            <input
                type="radio"
                onChange={handleRadio}
                id="vegan"
                name="diet"
                value="vegan"
            />

            <button onClick={() => props.modifyIndex(3, formData)}>VALIDER</button>
        </form>
    )
}

export default DietForm;