import React from 'react';

type TItem = {
  id: string;
  text: string;
  clicked: boolean;
};

interface MyListProps {
  header: string;
  items: TItem[];
  updateList: (id: string) => void;
}

const MyList: React.FC<MyListProps> = ({ header, items, updateList }) => {
  return (
    <div>
      <h2>{header}</h2>
      <ol>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => updateList(item.id)}
            style={{
              textDecoration: item.clicked ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {item.text}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MyList;
