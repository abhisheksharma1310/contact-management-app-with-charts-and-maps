import React, { useState } from 'react';
import Charts from '../components/Charts';
import Map from '../components/Map';

const DashboardPage: React.FC = () => {

  const [showMap, setShowMap] = useState(true);

  return (
    <div className='lg:p-8 w-full flex flex-col justify-start items-stretch gap-4'>
      {!showMap && <Charts />}
      {showMap && <Map />}
      <div className="flex justify-center items-center p-2 text-xl">
        <button
          className="border cursor-pointer bg-blue-400 p-2 rounded"
          type="button"
          onClick={() => setShowMap(p => !p)}
        >
          {showMap ? "Show Chats" : "Show Map"}
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
