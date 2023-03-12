import React, {useState} from "react";
import './SubForm.css'

function HateLove (props) {

    const [formData, setFormData] = useState({
        prefs: {
            love: '',
            hate: ''
        }
    })
    const handleReturn = () => {
        props.modifyIndex(4)
    }

    const handleTextarea = (e, pref) => {
        if (pref === 'love') {
            setFormData({
                prefs: {
                  ...formData.prefs,
                    love: e.target.value
                }
            })
        } else if (pref === 'hate') {
            setFormData({
                prefs: {
                 ...formData.prefs,
                    hate: e.target.value
                }
            })
        }
    }

    const preventFunc = (e) => {
        e.preventDefault();
        props.modifyIndex(6, formData)
    }

    return (
        <form className='preferences-form' onSubmit={preventFunc}>
            <p>Parlons des aliments que tu préféres et que tu detestes !</p>

            <label htmlFor="prefered">Tes aliments préférés, séparés par une virgule :</label>
            <textarea id="prefered" placeholder='Un ou plusieurs' onChange={e => handleTextarea(e, 'love')} ></textarea>

            <label htmlFor="hated">Tes aliments que tu ne supportent pas, séparés par une virgule :</label>
            <textarea id="hated" placeholder='Un ou plusieurs' onChange={e => handleTextarea(e, 'hate')}></textarea>

            <div className="container-nav-btns">
                <button onClick={handleReturn} type='button' className="prev">Precedent</button>
                <button>Valider</button>
            </div>

        </form>
    )
}

export default HateLove;