import React, {useRef} from "react";
import './SubForm.css'

function Allergies (props) {

    const allCheckboxes = useRef([])

    const preventFunc = (e) => {
        e.preventDefault();

        const styleData = {
            allergies: []
        }

        allCheckboxes.current.forEach(checkbox => {
            if (checkbox.checked) {
                styleData.allergies.push(checkbox.value)
            }
        })

        props.modifyIndex(5, styleData)
    }

    const handleReturn = () => {
        props.modifyIndex(3)
    }

    const addCheck = (check) => {
        if (check && !allCheckboxes.current.includes(check)){
            allCheckboxes.current.push(check)
        }
    }

    return (
        <form className="checkbox-form" onSubmit={preventFunc}>
            <p>Quelles sont tes cuisines</p>
            <span>Choix multiples.</span>

            <label htmlFor="milk">Lait</label>
            <input
                type="checkbox"
                id="milk"
                value='milk'
                ref={addCheck}
            />

            <label htmlFor="pollen">Pollen</label>
            <input
                type="checkbox"
                id="pollen"
                value='pollen'
                ref={addCheck}
            />

            <label htmlFor="nuts">Noix</label>
            <input
                type="checkbox"
                id="nuts"
                value='nuts'
                ref={addCheck}
            />

            <label htmlFor="eggs">Oeufs</label>
            <input
                type="checkbox"
                id="eggs"
                value='eggs'
                ref={addCheck}
            />

            <label htmlFor="shellfish">Fruits de mer</label>
            <input
                type="checkbox"
                id="shellfish"
                value='shellfish'
                ref={addCheck}
            />

            <div className="container-nav-btns">
                <button onClick={handleReturn} type='button' className="prev">Precedent</button>
                <button>Valider</button>
            </div>
        </form>
    )
}

export default Allergies;