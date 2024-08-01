import React, { useState, useEffect } from 'react';
import './hero.css'
import Prayer from '../prayer/Prayer';

const Hero= () => {

  
  const [naasat, setNaasat] = useState([
    {description: 'Алган илимиң бул дүйнөдө да, акыретте да пайдалуу болуусу үчүн өзүңдү жана башкаларды дагы көзөмөлгө алгын.'},
    {description: 'Көчөдө жана мечитте тамактанбагын, Жолдун боюндагы көлмө менен агын суулардан ичпегин. Жолдун ортосуна олтурбагын. Олтурууга мажбур болсоң, мечиттерге барып отургун. Дүкөндөрдө да отурбагын.'},
    {description: 'Жаштыгында ар дайым илим менен алектенгин. себеби, жаштык - зээндин таза кези.'},
    {description: 'Эч кимди төмөн көрбөгүн. өз салабаттуулугуңду сактаганың сыяктуу эле башка адамдардын бедели менен кадыр-баркын коргогун.'}
  ]);


  return (
    <div className='container ' >
      <h1>Имам Абу Ханифанын наасаттары</h1>
      <Prayer/>
      <div className='cards'>
        {naasat.map((item, index) => (
          <div key={index} className='naasat-card'>
            <p>{item.description}</p>
          </div>  
        ))}
      </div>
    </div>
  );
}

export default Hero;
