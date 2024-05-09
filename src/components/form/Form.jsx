import { useState } from "react";
import PropTypes from 'prop-types';

const Form = ({onAddItems}) => {

    const [description, setDecription] = useState('');
    const [quantity, setQuantity] = useState(1);

    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!description) return;
        const newItemObject = {id: Date.now().toString(), description, quantity, packed: false}
        console.log(newItemObject);
        onAddItems(newItemObject);
        setDecription('');
        setQuantity(1);
    }
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😎 trip?</h3>
            <select name="" id="" value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
                {Array.from({length: 20}, (_, i) => i + 1).map((num) => 
                        (<option value={num} key={num}>{num}</option>))}
            </select>
            <input 
                type="text" 
                placeholder="Item..." 
                value={description}
                onChange={e => setDecription(e.target.value)}
            />
            <button>Add</button>
        </form>
    )
}
Form.propTypes = {
    onAddItems: PropTypes.func.isRequired
}
export default Form;