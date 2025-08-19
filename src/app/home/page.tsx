'use client';


import React, { useEffect, useState } from 'react';
import Image from "next/image";


const Home: React.FC = () => {
  const [backendMessage, setBackendMessage] = useState<string>('');

  useEffect(() => {
    // Fetch data from the backend root route
    fetch('http://localhost:5000/')
      .then((res) => res.text())
      .then((data) => {
        console.log('Data from backend:', data);
        setBackendMessage(data);
      })
      .catch((err) => {
        console.error('Error fetching backend:', err);
      });
  }, []);

  return (
    <div>
      <h1>Backend Connection</h1>
      <h3>Message: {backendMessage}</h3>
       <Image
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
        alt="unsplash.com"
        width={200}
        height={100}
      />
    </div>
  );
};

export default Home;
