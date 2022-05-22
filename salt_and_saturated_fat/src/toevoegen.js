import './toevoegen.css';
import { useRef, useState } from 'react';
import React from 'react';


const Toevoegen = () => {
    const foodRef = useRef(null);
    const unitRef = useRef(null);
    const saltRef = useRef(null);
    const fatRef = useRef(null);

    const [food, setFood] = useState('');
    const [salt, setSalt] = useState('');
    const [fat, setFat] = useState('')

    const handleFoodChange = (event) => {
        setFood(event.target.value);
    }

    const handleSaltChange = (event) => {
        setSalt(event.target.value);
    }

    const handleFatChange = (event) => {
        setFat(event.target.value);
    }

    
    const addFood = () => {
        const foodElement = foodRef.current;
        console.log(foodElement.value)
        const unitElement = unitRef.current;
        console.log(unitElement.value);
        const saltElement = saltRef.current;
        console.log(saltElement.value);
        const fatElement = fatRef.current;
        console.log(fatElement.value);
        const addedFood = {}
        addedFood["unit"] = unitElement.value
        addedFood["salt"] = saltElement.value
        addedFood["fat"] = fatElement.value

        localStorage.setItem(foodElement.value, JSON.stringify(addedFood));
        const foodData = JSON.parse(localStorage.getItem(foodElement.value))
        console.log(foodData)


    }


    

    return (
        <div className="toevoegen">
            <h2>Voedingsmiddel toevoegen aan lijst</h2>
            <form>
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
                    <option value='gram'>gram</option>
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
                <button disabled={!food || !salt || !fat} onClick={addFood}>opslaan</button>
            </form>

            <h2>Voedingsmiddel toevoegen aan wat u vandaag gaat eten</h2>
            <form>
                <div>
                <select>
                    

                </select>
                </div>
                <div>
                <button>toevoegen</button>
                </div>
            </form>
        </div>
    );
}

export default Toevoegen;