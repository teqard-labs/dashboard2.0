import React from 'react';
import { useParams } from 'react-router-dom';
import Crop1 from '../images/crop1.png';

function Crops() {
  // Access the farmId parameter from the URL
  const { farmId } = useParams();
  console.log(farmId)

  return (
    <div className="w-[20vw] h-[20vw] bg-gray-500 rounded-3xl shadow-2xl">
      <img src={Crop1} alt={`Crop for Farm ${farmId}`} className="object-contain" />
    </div>
  );
}

export default Crops;
