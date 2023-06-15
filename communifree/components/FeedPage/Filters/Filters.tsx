import './Filters.css'

export default function Filters(){
    return(
        <div className='filters'>
            <h3>Category</h3><br></br>
            <form>
                <input type="checkbox" id="veg"/>
                <label htmlFor = "veg">Veg</label>
                <input type="checkbox" id="fruit"/>
                <label htmlFor = "fruit">Fruit</label>
                <input type="checkbox" id="veg"/>
                <label htmlFor = "meat">Meat</label>
            </form>
        </div>
    )
}