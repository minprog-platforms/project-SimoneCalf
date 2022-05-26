import './toevoegen.css';
import { useRef, useState } from 'react';
import React from 'react';


const Toevoegen = () => {
   
    const foodData = [];  

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

        let unit = unitElement.value

        if (unit === "100 gram") {
            unit = "gram"
        }
        
        
        let addedFood = JSON.parse(localStorage.getItem(foodElement.value))

        if (addedFood === null) {
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

       

        localStorage.setItem(foodElement.value, JSON.stringify(addedFood));
        // const foodData = JSON.parse(localStorage.getItem(foodElement.value))
    
    
    
    
    
     // addToLocalStorage()
    
    
    
        // const addToLocalStorage = Object.entries(localStorage).map(entry => {  
    //     const name = entry[0]
    //     const info = JSON.parse(entry[1])
        
    //     // hier een loop die loopt over de array met keys en geparsde values van de local storage. 
    //     // De keys(voedingsmiddelen) vergelijkt met de user input (foodElement.value). 
    //     // Wanneer een key gelijk is aan de user input een andere key gebruiken.
    
    //     for (let i = 0; i < localStorage.length; i = i + 2) {
    //         if (localStorage[i] === foodElement.value) {
    //             foodElement.value = foodElement.value.concat('2')
    //             localStorage.setItem(foodElement.value, JSON.stringify(addedFood));
    //             const foodData = JSON.parse(localStorage.getItem(foodElement.value))
    //         }
    //         else {
    //             localStorage.setItem(foodElement.value, JSON.stringify(addedFood));
    //             const foodData = JSON.parse(localStorage.getItem(foodElement.value))
    //         }

    //     }
           

    
    //     });
    }
    
    
            
        
    
    // }

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
            <SelectFood />
           
            
        </div>
    );
}

const SelectFood = () => {
    const amountRef = useRef(null);
    const unitRef = useRef(null);
    const selectedRef = useRef(null);

    const [selected, setSelected] = useState('');

    const handleSelectChange = (event) => {
        setSelected(event.target.value);
    }


    const options = Object.entries(localStorage).map(entry => {
        const info = JSON.parse(entry[1])
        const name = entry[0]

        return (<option> voedingsmiddel: {name} eenheid per: {info.unit} salt: {info.salt} verzadigd vet: {info.fat} </option>)
        //return (<option>{name}</option>)

    });

    const getSelectOptionsFoodElements = Object.entries(localStorage).map(entry => {
        const name = entry[0]

        return(<option>{name}</option>)
        
    });
    console.log(selected)
    console.log(localStorage.getItem(selected))
    // const selectedInfo = localStorage.getItem(selectedRef.current.value)

    const getSelectOptionsUnits = () => {
        // const selectedRefElement = selectedRef.current;
        // console.log(selectedRefElement.value)

        //const []
        const selectedInfo = JSON.parse(localStorage.getItem(selected))
        console.log(selectedInfo)
        // const selectedInfo = localStorage.getItem(selectedRefElement.value)
        const selectOptions = []

        if (selectedInfo.portie.salt !== null) {
            const unitOption = <option>portie(s)</option>
            selectOptions.push(unitOption)
            //return(<option>"portie"</option>)
        }
        if (selectedInfo.stuk.salt !== null) {
            const unitOption = <option>stuk(s)</option>
            selectOptions.push(unitOption)
            //return(<option>"stuk"</option>)
        }
        if (selectedInfo.gram.salt !== null) {
            const unitOption = <option>gram</option>
            selectOptions.push(unitOption)
            //return(<option>"gram"</option>)
        }
        // else {
        //     selectOptions.push(<option>"geen optie(s)"</option>)
        // }
        // selectOptions.map((option) => {
        //      return option
        // })

        // console.log(selectOptions)
        return selectOptions
    }


    const WatAanHetTesten = () => {
        const item = selected
        alert(item)
    }



        // // banaan
        // const name = entry[0]
        // console.log(name)
        // // info = [[portie]]:
        // //     [[[salt]: [null],
        // //     [fat]: [null]]]
        // //
        // // [gram]:
        // //     [[salt]: [null],
        // //     [fat]: [null]]
        // // ,
        // // [stuk]:
        // //     [[salt]: [null],
        // //     [fat]: [null]]]
        // // }
        // console.log(Object.entries(localStorage))
        // const info = JSON.parse(entry[1])
        // console.log(info)
        // console.log(info.stuk.salt)



        // // const optionsArray = []
        // const selectOptions = []

        

        // if (name === selected && info.portie.salt !== null) {
        //     const unitOption = "portie"
        //     // return(<option>{info.unit}</option>)
        //     //return(<option>{unitOption}</option>)
        //     // optionsArray.concat({unitOption})
        //     selectOptions.push({unitOption})
        // }

        // if (name === selected && info.stuk.salt !== null) {
        //     const unitOption = "stuk"
        //     // return(<option>{info.unit}</option>)
        //     return(<option>{unitOption}</option>)
        //     //optionsArray.concat({unitOption})
        //     // selectOptions.concat({unitOption})

        // }

        // if (name === selected && info.gram.salt !== null){
        //     const unitOption = "gram"
        //     return(<option>{unitOption}</option>)
        //     // optionsArray.concat({unitOption})
        //     // selectOptions.concat({unitOption})
        // }
        // else {
        //     // optionsArray.concat("geen optie(s)")
        //     // selectOptions.concat("geen optie(s)")
        //     return(<option>"geen optie(s)"</option>)
        // }

        
        //const selectOptions = optionsArray.map((option) => <option>{option}</option>)
        // return(selectOptions)
        // console.log(selectOptions)





        // if (name === selected && info.unit !== "100 gram") {
        //     const unitOption = info.unit.concat("s")
        //     // return(<option>{info.unit}</option>)
        //     return(<option>{unitOption}</option>)
        // }
        // else if (name === selected && info.unit === "100 gram"){
        //     const unitOptionGram = "gram"
        //     return(<option>{unitOptionGram}</option>)
        // }

   // });
    
  



    // const SaltandFatAmount = () => {
    //     let salt = 0
    //     let fat = 0

    //     if (selectedRef.info.unit == 'stuk' || selectedRef.info.unit == 'portie') {
    //         salt = salt + info.salt * amountRef
    //         fat = fat + info.fat * amountRef
    //     }

    //     if (selectedRef.info.unit == '100 gram') {
    //         salt = salt + info.salt / 100 * amountRef
    //     }
        
        
    //     salt += selectedRef.info.salt
    //     fat += selectedRef.info.fat

    //     return(salt, fat)
    // }



    return (
        <>
            <h2>Voedingsmiddel toevoegen aan wat u vandaag gaat eten</h2>
            <form>
                <div>
                <label>Selecteer welk voedingsmiddel u gaat eten</label>
                <select 
                onChange={handleSelectChange}
                value={selected}
                ref={selectedRef}>
                hier iets van een variabel toevoegen en die assignen aan een functie die key value pairs uit de local storage ophaalt
                {/*{options}*/}
                {getSelectOptionsFoodElements}

                </select>
                </div>
                {/*<label>Hoeveel gaat u hiervan gaat eten in</label>*/}
                <label>Hoeveel</label>
                <select ref={unitRef}>
                {getSelectOptionsUnits()}
                    {/* <option>gram</option>
                    <option>stuk(s)</option>
                    <option>portie(s)</option> */}
                </select>
                <label>gaat u hiervan gaat eten</label>
                <div>
                    <input 
                        ref={amountRef}
                        type="text"
                        required 
                        placeholder='3'>
                    </input>
                </div>
                <div>
                <button /*onClick={SaltandFatAmount}*/>toevoegen</button>
                </div>
            </form>
        </>




    )


}





export default Toevoegen;