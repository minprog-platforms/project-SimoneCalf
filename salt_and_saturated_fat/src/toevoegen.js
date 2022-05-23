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
        const items = localStorage.getItem(foodElement.value)
        // console.log(foodData)
        console.log(items)
        return items
    }

    // iets van een for-loop die option tags returns met wat er in foodData is opgeslagen.
    // const getFood = () => {
    //     const foodElement = foodRef.current;

    //     const [items, setItems] = useState([])

    //     useEffect(() => {
    //         const items = JSON.parse(localStorage.getItem(foodElement.value));
    //         if (items) {
    //          setItems(items);
    //         }
    //       }, []);

    //       console.log(items)


    // }

    // iets van een for-loop die option tags returns met wat er in foodData is opgeslagen.
    // const getFood = () => {
    //     // erachter komen hoe "lang" food-data is
    //     const items = JSON.parse(localStorage.getItem(foodElement.value));

    // }
    

    

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
                    <option value='100 gram'>100 gram</option>
                    <option value='portie'>portie</option>
                </select>
                </div>
                <div>
                <label>Zout (in gram)</label>
                </div>
                <div>
                <input 
                    ref={saltRef}loca
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
            <SelectFood />
           
            
        </div>
    );
}

const SelectFood = () => {
    const amountRef = useRef(null);
    const unitRef = useRef(null);
    const selectedRef = useRef(null);


    const options = Object.entries(localStorage).map(entry => {
        const info = JSON.parse(entry[1])
        const name = entry[0]

        return (<option> voedingsmiddel: {name} eenheid: {info.unit} salt: {info.salt} verzadigd vet: {info.fat} </option>)

    });

    const SaltandFatAmount = () => {
        let salt = 0
        let fat = 0

        if (selectedRef.info.unit == 'stuk' || selectedRef.info.unit == 'portie') {
            salt = salt + info.salt * amountRef
            fat = fat + info.fat * amountRef
        }

        if (selectedRef.info.unit == '100 gram') {
            salt = salt + info.salt / 100 * amountRef
        }
        
        
        salt += selectedRef.info.salt
        fat += selectedRef.info.fat

        return(salt, fat)
    }




    // options = Object.entries(localStorage).map(entry => {
    //     JSON.parse(entry));
    
    
    // options.forEach(makeOptionArray)

    // function makeOptionArray(item) {

    // }


    // optionTagArray = []

    // makeOptionTags = () => {
    //     // stringOptions =  Object.entries(localStorage).map(entry => {
    //     //     console.log(entry);
        
    //     //options = JSON.parse(stringOptions)

    //     options = Object.entries(localStorage).map(entry => {
    //         JSON.parse(entry);

    //     })

        
    
    
    
    
    // Object.entries(localStorage).map(entry => {
    //     console.log(entry);
    // })


    return (
        <>
            <h2>Voedingsmiddel toevoegen aan wat u vandaag gaat eten</h2>
            <form>
                <div>
                <label>Selecteer wat u gaat eten</label>
                <select ref={selectedRef}>
                hier iets van een variabel toevoegen en die assignen aan een functie die key value pairs uit de local storage ophaalt
                {options}

                </select>
                </div>
                <label>Hoeveelheid die u gaat eten in</label>
                <select ref={unitRef}>
                    <option>gram</option>
                    <option>stuk(s)</option>
                    <option>portie(s)</option>
                </select>
                <div>
                    <input 
                        ref={amountRef}
                        type="text"
                        required 
                        placeholder='3'>
                    </input>
                </div>
                <div>
                <button onClick={SaltandFatAmount}>toevoegen</button>
                </div>
            </form>
        </>




    )


}





export default Toevoegen;