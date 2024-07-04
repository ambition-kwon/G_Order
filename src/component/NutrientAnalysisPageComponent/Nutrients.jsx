import React from 'react';
import './Nutrients.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Nutrients = ({nutrientsData, peopleCount}) => {
  const nutrients = [
    { label: '탄수화물', value: Math.round(nutrientsData.carbohydrate / peopleCount), color: '#FF6B6B' },
    { label: '단백질', value: Math.round(nutrientsData.protein / peopleCount), color: '#4ECCA3' },
    { label: '지방', value: Math.round(nutrientsData.fat / peopleCount), color: '#9D8DF1' },
    { label: '나트륨', value: Math.round(nutrientsData.sodium / peopleCount), color: '#FFB74D' },
    { label: '콜레스테롤', value: Math.round(nutrientsData.cholesterol / peopleCount), color: '#FF8A65' },
  ];

  return (
    <>
      <div className="nutrient-section">
        {nutrients.slice(0, 3).map((nutrient, index) => (
          <div className="nutrient-item" key={index}>
            <CircularProgressbar
              value={nutrient.value}
              text={`${nutrient.value}%`}
              styles={buildStyles({
                pathColor: nutrient.color,
                textColor: nutrient.color,
                trailColor: 'transparent',
                textSize: '32px'
              })}
            />
            <div className="nutrient-label" style={{ color: nutrient.color }}>{nutrient.label}</div>
          </div>
        ))}
      </div>
      <div className="additional-info">
        {nutrients.slice(3).map((nutrient, index) => (
          <div className="additional-item" key={index}>
            <CircularProgressbar
              value={nutrient.value}
              text={`${nutrient.value}%`}
              styles={buildStyles({
                pathColor: nutrient.color,
                textColor: nutrient.color,
                trailColor: 'transparent',
                textSize: '30px'
              })}
            />
            <div className="additional-label" style={{ color: nutrient.color }}>{nutrient.label}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Nutrients;
