import React, {useRef} from "react";
import './SubForm.css'

function FoodStyle (props) {

    const allCheckboxes = useRef([])

    const preventFunc = (e) => {
        e.preventDefault();

        const styleData = {
            foodStyle: []
        }

        allCheckboxes.current.forEach(checkbox => {
            if (checkbox.checked) {
                styleData.foodStyle.push(checkbox.value)
            }
        })

        props.modifyIndex(4, styleData)
    }

    const handleReturn = () => {
        props.modifyIndex(2)
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

            <label htmlFor="italian">Italienne</label>
            <input
                type="checkbox"
                id="italian"
                value='italian'
                ref={addCheck}
            />

            <label htmlFor="japanese">Japonaise</label>
            <input
                type="checkbox"
                id="japanese"
                value='japanese'
                ref={addCheck}
            />

            <label htmlFor="indan">Indienne</label>
            <input
                type="checkbox"
                id="indian"
                value='indan'
                ref={addCheck}
            />

            <label htmlFor="thaï">Thaïlandaise</label>
            <input
                type="checkbox"
                id="italian"
                value='italian'
                ref={addCheck}
            />

            <label htmlFor="french">Française</label>
            <input
                type="checkbox"
                id="french"
                value='french'
                ref={addCheck}
            />

            <label htmlFor="chinese">Chinoise</label>
            <input
                type="checkbox"
                id="chinese"
                value='chinese'
                ref={addCheck}
            />

            <div className="container-nav-btns">
                <button onClick={handleReturn} type='button' className="prev">Precedent</button>
                <button>Valider</button>
            </div>
        </form>
    )
}

export default FoodStyle;