import './Filters.css'

export default function Filters(){
    return(
        <div className='filters'>
            <h3>Category</h3><br></br>
            <form>
                <input type="checkbox" id="fruitveg"/>
                <label htmlFor = "Fruitveg">Fruit & Veg</label>
                <input type="checkbox" id="baked"/>
                <label htmlFor = "baked">Baked Goods</label>
                <input type="checkbox" id="veg"/>
                <label htmlFor = "meat">Meat</label>
                <input type="checkbox" id="veg"/>
                <label htmlFor = "meat">Meat</label>
            </form>
            <br></br>
            <br></br>
            <h3>Dietary Restrictions</h3><br></br>
            <form>
                <input type="checkbox" id="vegetarian"/>
                <label htmlFor = "Vegetarian">Vegetarian</label>
                <input type="checkbox" id="vegan"/>
                <label htmlFor = "vegan">Vegan</label>
                <input type="checkbox" id="paleo"/>
                <label htmlFor = "paleo">Paleo</label>
            </form>
        </div>
    )
}