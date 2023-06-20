import './Filters.css'
 
export default function Filters(){
    return(
        <div className='filters'>
            <h3>Category</h3><br></br>
            <div className='grid-container'>
                <input type="checkbox" id="vegetables"/>
                <label htmlFor = "vegetables">Vegetables</label>

                <input type="checkbox" id="baked"/>
                <label htmlFor = "baked">Baked Goods</label>

                <input type="checkbox" id="seafood"/>
                <label htmlFor = "seafood">Fish and Seafood</label>

                <input type="checkbox" id="herbsAndSpices"/>
                <label htmlFor = "herbsAndSpices">Herbs and Spices</label>
                
                <input type="checkbox" id="fruit"/>
                <label htmlFor = "Fruits">Fruits</label>
                
                <input type="checkbox" id="meats"/>
                <label htmlFor = "meats">Meats</label>

                <input type="checkbox" id="dairy"/>
                <label htmlFor = "dairy">Dairy</label>

                <input type="checkbox" id="homegrown"/>
                <label htmlFor = "homegrow">Home-grown</label>

                <input type="checkbox" id="other"/>
                <label htmlFor = "other">Other</label>
            </div>

            <br></br>

            <h3>Dietary Restrictions</h3><br></br>
            <div className='grid-container'>
                <input type="checkbox" id="vegetarian"/>
                <label htmlFor = "Vegetarian">Vegetarian</label>

                <input type="checkbox" id="vegan"/>
                <label htmlFor = "vegan">Vegan</label>

                <input type="checkbox" id="paleo"/>
                <label htmlFor = "paleo">Paleo</label>
                
                <input type="checkbox" id="keto"/>
                <label htmlFor = "keto">Keto</label>
                
                <input type="checkbox" id="halal"/>
                <label htmlFor = "halal">Halal</label>
                
                <input type="checkbox" id="gluten-free"/>
                <label htmlFor = "gluten-free">Gluten Free</label>
                
                <input type="checkbox" id="dairy-free"/>
                <label htmlFor = "dairy-free">Dairy Free</label>
            </div>

            <div className="slidecontainer">
                <h3>Distance</h3>
            <input type="range" min="1" max="100" value="50" className="slider" id="myRange"/>
            </div>

            

        </div>
    )
}