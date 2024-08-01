import React, { useState } from 'react';
import '../style/zikr.css';

const About = () => {
  const [count, setCount] = useState(0);
  const [currentZikrIndex, setCurrentZikrIndex] = useState(0);

  const zikr = [
    { kg: 'Субхаан Аллох', arab: 'سبحان الله' },
    { kg: 'Алхамдулиллах', arab: 'الحمد لله' },
    { kg: 'Аллоху Акбар', arab: 'الله اكبر' },
    { kg: 'Лаа Илааха Иллолох', arab: 'لا اله الا الله' },
    { kg: 'Астагфируллах', arab: '' },
    { kg: 'Лаа хавла валаа куввата иллаа биллах', arab: '' },
    { kg: 'Лаа илаха ила анта субханака инни кунту миназзолимин', arab: '' },
  ];

  const handleIncrement = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount === 100) {
        // Reset the count and advance to the next Zikr
        setCount(0);
        setCurrentZikrIndex(prevIndex => (prevIndex + 1) % zikr.length);
      }
      return newCount;
    });
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="zikr-container">
      <h1>Тасбих</h1>
      <p className="zikr-text">
        <span className="zikr-kg">{zikr[currentZikrIndex].kg}</span><br/>
        <span className="zikr-arab">{zikr[currentZikrIndex].arab}</span>
      </p>
      <p>Count: {count}</p>
      <button className="increment-button" onClick={handleIncrement}>Increment</button>
      <button className="reset-button" onClick={handleReset}>Reset</button>
      {count === 0 && <p className="congratulations-message">Аллахым сизден ыраазы болсун сиз 100гө жеттиңиз</p>}
    </div>
  );
};

export default About;

