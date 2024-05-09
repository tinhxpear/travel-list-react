
import { useState } from 'react';
import './App.css'
import Form from './components/form/Form';
import Logo from './components/logo/Logo';
import PackingList from './components/packing-list/PackingList';
import Stats from './components/stats/Stats';
const initialItems = [
  { id: '1', description: "Passports", quantity: 2, packed: false },
  { id: '2', description: "Socks", quantity: 12, packed: false },
  { id: '3', description: "Apple", quantity: 20, packed: false },
];
function App() {
  const [items, setItems] = useState(initialItems);
  const handleAddItem = (item) => {
    setItems(items => [...items, item]);
  }
  const handleDeleteItem = (id) => {
    setItems(items => items.filter((item) => item.id !== id));
  } 
  const handleToggleItem = (id) => {
    setItems(items => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item));
  }
  const handleClearList = () => {
    const confirmed = window.confirm('Are you sure you want to delete all items ?');
    if(confirmed) setItems([]);
  }
  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItem}/>
      <PackingList 
        items={items} 
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items}/>
    </div>
  )
}

export default App;
