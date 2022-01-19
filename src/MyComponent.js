import React from 'react';
import { useState } from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function MyComponent() {
  const [list, setList] = useState(arr);

  const Item = ({ children, index }) => {
    const handleSwap = j => {
      const newList = [...list];
      [newList[index], newList[j]] = [newList[j], newList[index]];
      setList(newList);
    };

    return (
      <div>
        <button onClick={() => handleSwap(index - 1)}>
          <ArrowLeftIcon />
        </button>
        {children}
        <button onClick={() => handleSwap(index + 1)}>
          <ArrowRightIcon />
        </button>
      </div>
    );
  };

  return list.map((item, index) => {
    return (
      <Item key={index} index={index}>
        {item}
      </Item>
    );
  });
}

const arr = [
  'Cake',
  'caramels',
  'muffin',
  'lemon',
  'drops',
  'chocolate.',
  'Tootsie',
  'roll',
  'lemon',
  'drops',
  'muffin',
  'danish',
  'lollipop.',
  'Jelly',
  'halvah',
  'croissant',
  'sesame',
  'snaps',
];
