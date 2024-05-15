import React from 'react';
import elephant from '../images/elephant.jpeg'; 

const DataComponent = () => {
  const data = [
    { id: 1, img: elephant },
    { id: 2, img: elephant },
    { id: 3, img: elephant },
    { id: 4, img: elephant }
  ];

  return (
    <div className="image-container">
      {data.map(item => (
        <img key={item.id} src={item.img} alt={`Elephant ${item.id}`} />
      ))}
    </div>
  );
};

export default DataComponent;
