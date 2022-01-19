import React from 'react';
import { useState } from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function MyComponent() {
  const [list, setList] = useState(arr);

  const Item = ({ children, index }) => {
    const handlePrevSwap = () => {
      if (index - 1 === -1) return;
      const newList = [...list];

      // Swap with previous
      [newList[index], newList[index - 1]] = [
        newList[index - 1],
        newList[index],
      ];
      setList(newList);
    };

    const handleNextSwap = () => {
      if (index + 1 === list.length) return;
      const newList = [...list];

      // Swap with next
      [newList[index], newList[index + 1]] = [
        newList[index + 1],
        newList[index],
      ];
      setList(newList);
    };

    return (
      <div>
        <button onClick={handlePrevSwap}>
          <ArrowLeftIcon />
        </button>
        {children}
        <button onClick={handleNextSwap}>
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
