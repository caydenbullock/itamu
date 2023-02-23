import React, { useEffect, useState } from 'react';
import './CloserToHome.css'

export default function Lute() {
  const [maxWidth, setMaxWidth] = useState('560');

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) {
        setMaxWidth('100%');
      } else if (window.innerWidth < 800) {
        setMaxWidth('75%');
      } else {
        setMaxWidth('727');
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ maxWidth }}>
        <iframe width="727" height="409" src="https://www.youtube.com/embed/80Q4bw2KbYE" title="Having Fun On The Computer 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  );
}
