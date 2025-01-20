import React, { useState } from 'react';
import MyList from './MyList';

type TItem = {
  id: string;
  text: string;
  clicked: boolean;
};

const MyContainer: React.FC = () => {
  const header: string = "List for cool things";
  const [items, setItems] = useState<TItem[]>([
    { id: "1", text: "This is first task", clicked: false },
    { id: "2", text: "This is second task", clicked: false },
  ]);

  const [newItemText, setNewItemText] = useState<string>("");

  const handleAddItem = () => {
    if (newItemText.trim() === '') return;

    const newItem: TItem = {
      id: Date.now().toString(),
      text: newItemText,
      clicked: false,
    };

    setItems([...items, newItem]);
    setNewItemText("");
  };

  const updateList = (id: string) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, clicked: !item.clicked } : item
    ));
  };

  return (
    <div>
      <textarea
        value={newItemText}
        onChange={(e) => setNewItemText(e.target.value)}
        placeholder="Enter item"
      ></textarea>
      <button onClick={handleAddItem}>Add Item</button>
      <MyList header={header} items={items} updateList={updateList} />
    </div>
  );
};

export default MyContainer;
