import PropTypes from 'prop-types';

const Item = ({item, onDeleteItem, onUpdateItem}) => {
  return (
    <li style={item.packed ? {textDecoration: "line-through"} : {}}>
        <input 
            type="checkbox" 
            value={item.packed}
            onChange={() => onUpdateItem(item.id)}
        />
        <span>{item.quantity}</span>
        <span>{item.description}</span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}
Item.propTypes = {
    item: PropTypes.object.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onUpdateItem: PropTypes.func.isRequired
}
export default Item;