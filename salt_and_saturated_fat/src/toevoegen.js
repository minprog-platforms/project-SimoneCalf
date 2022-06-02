import './toevoegen.css';
import { useRef, useState } from 'react';
import React from 'react';


const AddedAndConsumed = () => {
    const foodRef = useRef(null);
    const unitRef = useRef(null);
    const saltRef = useRef(null);
    const fatRef = useRef(null);

    const [food, setFood] = useState('');
    const [salt, setSalt] = useState('');
    const [fat, setFat] = useState('');

    const handleFoodChange = (event) => {
        setFood(event.target.value);
    }

    const handleSaltChange = (event) => {
        setSalt(event.target.value);
    }

    const handleFatChange = (event) => {
        setFat(event.target.value);
    }

   
    const addToLS = event => {
        event.preventDefault()
        const foodElement = foodRef.current;
        console.log(foodElement.value)
        const unitElement = unitRef.current;
        console.log(unitElement.value);
        const saltElement = saltRef.current;
        console.log(saltElement.value);
        const fatElement = fatRef.current;
        console.log(fatElement.value);

        let unit = unitElement.value

        if (unit === "100 gram") {
            unit = "gram"
        }
        
        let info = JSON.parse(localStorage.getItem("info"))

        if (info === null) {
            info = {}
        }

        let addedFood = info[foodElement.value]

        if (addedFood === undefined) {
            addedFood = {
                portie: {
                    salt: null,
                    fat: null
                },
                gram: {
                    salt: null,
                    fat: null
                },
                stuk: {
                    salt: null,
                    fat: null
                }
            }
        }

        addedFood[unit].salt = saltElement.value
        addedFood[unit].fat = fatElement.value

        info[foodElement.value] = addedFood

        localStorage.setItem("info", JSON.stringify(info));
        setFood('')
        setFat('')
        setSalt('')
    }
    

    return (
        <div className="toevoegen">
            <h2>Voedingsmiddel toevoegen aan lijst</h2>
            <form onSubmit={addToLS}>
                <div>
                <label>Voedingsmiddel</label>
                </div>
                <div>
                    <input
                        ref={foodRef}
                        type="text"
                        required
                        placeholder="pizza margherita"
                        onChange={handleFoodChange}
                        value={food}
                        >
                    </input>
                </div>
                <div>
                <label>Eenheid</label>
                </div>
                <div>
                <select ref={unitRef}>
                    <option value='stuk'>stuk</option>
                    <option value='100 gram'>100 gram</option>
                    <option value='portie'>portie</option>
                </select>
                </div>
                <div>
                <label>Zout (in gram)</label>
                </div>
                <div>
                <input 
                    ref={saltRef}
                    type="text"
                    required
                    placeholder='12,6'
                    onChange={handleSaltChange}
                    value={salt}>
                </input>
                </div>
                <label>Verzadigs vet (in gram)</label>
                <div>
                <input 
                    ref={fatRef}
                    type="text"
                    required 
                    placeholder='3,28'
                    onChange={handleFatChange}
                    value={fat}>
                    </input>
                </div>
                <button type="submit" disabled={!food || !salt || !fat}>opslaan</button>
            </form>
            <SelectFood />
        </div>
    );
}

const SelectFood = () => {
    const amountRef = useRef(null);
    const unitRef = useRef(null);
    const selectedRef = useRef(null);

    let info = JSON.parse(localStorage.getItem("info"))

    if (info === null) {
        info = {}
    }

    const [selected, setSelected] = useState(Object.entries(info)[0] === undefined ? "" : Object.entries(info)[0][0]);

    const handleSelectChange = (event) => {
        setSelected(event.target.value);
    }

    const [amount, setAmount] = useState('')

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    }


    const getInitialUnit = () => {
        const firstInfoEntry = Object.entries(info)[0];

        if (firstInfoEntry === undefined) {
            return ''
        }

        const units = firstInfoEntry[1];

        if (units.gram.salt !== null) {
            return 'gram'
        }

        if (units.portie.salt !== null) {
            return 'portie'
        }

        return 'stuk'
    }

    const [unit, setUnit] = useState(getInitialUnit())

    const handleUnitChange = (event) => {
        setUnit(event.target.value);
    }


    const getSelectOptionsFoodElements = Object.entries(info).map(entry => {
        const name = entry[0]
        return(<option>{name}</option>)
    });


    const getSelectOptionsUnits = () => {
       
        let info = JSON.parse(localStorage.getItem("info"))

        if (info === null) {
            info = {}
        }

        const selectedInfo = info[selected]
        console.log(selectedInfo)
        const selectOptions = []

        if (selectedInfo === undefined) {
            return [<option>"geen opties"</option>]
        }

        if (selectedInfo.portie.salt !== null) {
            const unitOption = <option>portie(s)</option>
            selectOptions.push(unitOption)
        }
        if (selectedInfo.stuk.salt !== null) {
            const unitOption = <option>stuk(s)</option>
            selectOptions.push(unitOption)
        }
        if (selectedInfo.gram.salt !== null) {
            const unitOption = <option>gram</option>
            selectOptions.push(unitOption)
        }
        return selectOptions
    }


    const today = event => {
        event.preventDefault()
        let consumed = JSON.parse(localStorage.getItem("consumed"))

        if (consumed === null) {
            consumed = []
        }

        const consumedFood = {
            name: selected,
            amount: amount,
            unit: unit
        }

        consumed.push(consumedFood)
        localStorage.setItem("consumed", JSON.stringify(consumed))
        setAmount('')
    }


    return (
        <>
            <h2>Voedingsmiddel toevoegen aan wat u vandaag gaat eten</h2>
            <form onSubmit={today}>
                <div>
                <label>Selecteer welk voedingsmiddel u gaat eten</label>
                <select 
                onChange={handleSelectChange}
                value={selected}
                ref={selectedRef}>
                hier iets van een variabel toevoegen en die assignen aan een functie die key value pairs uit de local storage ophaalt
                {getSelectOptionsFoodElements}
                </select>
                </div>
                <label>Hoeveel</label>
                <select 
                ref={unitRef}
                onChange={handleUnitChange}
                value={unit}>
                {getSelectOptionsUnits()}
                </select>
                <label>gaat u hiervan gaat eten?</label>
                <div>
                    <input 
                        ref={amountRef}
                        value={amount}
                        onChange={handleAmountChange}
                        type="text"
                        required 
                        placeholder='3'>
                    </input>
                </div>
                <div>
                <button type="submit">toevoegen</button>
                </div>
            </form>
        </>
    )
}


export default AddedAndConsumed;