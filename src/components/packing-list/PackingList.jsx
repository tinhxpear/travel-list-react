import { useState } from "react";
import Item from "../item/Item";
import PropTypes from 'prop-types';


const PackingList = ({items, onDeleteItem, onUpdateItem, onClearList}) => {
    const [sortBy, setSortBy] = useState('input');

    let sortedItems;
    if(sortBy === 'input') sortedItems = items;
    if(sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    if(sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
        <ul>
            {sortedItems.map((item) => 
                <Item 
                    item={item} 
                    key={item.id} 
                    onDeleteItem={onDeleteItem}
                    onUpdateItem={onUpdateItem}
                />
            )}
        </ul>

        <div className="action">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="input">Sort by input order</option>
                <option value="description">Sort by descriptionr</option>
                <option value="packed">Sort by packed status</option>
            </select>

            <button onClick={onClearList}>Clear list</button>
        </div>
    </div>
  )
}
PackingList.propTypes = {
    items: PropTypes.array.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onUpdateItem: PropTypes.func.isRequired,
    onClearList: PropTypes.func.isRequired
}
export default PackingList;