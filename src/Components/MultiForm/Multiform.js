import React, {useState} from "react";
import "./MultiForm.css"
import Indicator from "./Indicator/Indicator";
import CardBegin from "./Infos/CardBegin";
import CardEnd from "./Infos/CardEnd";
import DietForm from "./SubForms/DietForm";
import FoodStyle from "./SubForms/FoodStyle";

function Multiform (props) {

    const [formIndex, setFormIndex] = useState(1);
    const [allFormData, setAllFormData] = useState({
        dietForm: "",
        foodStyle: [],
        allergies: [],
        prefs: {}
    });

    const modifyIndex = (index, data) => {
        setFormIndex(index);

        if (data){
            const newData = {...allFormData}
            const firstProps = Object.keys(data)[0]

            newData[firstProps] = data[firstProps]
            setAllFormData(newData)
        }
    }

    console.log(allFormData)

    return (
        <div className="container-multiform">
            <Indicator />

            { formIndex === 1 ? <CardBegin modifyIndex={modifyIndex}/>
                : formIndex === 2 ? <DietForm modifyIndex={modifyIndex}/>
                    : formIndex === 3 ? <FoodStyle modifyIndex={modifyIndex}/>
                        : ''}
        </div>
    )
}

export default Multiform;