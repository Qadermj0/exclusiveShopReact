import React, { useState } from 'react';
import "./Banner.css";
import { Link } from 'react-router-dom';

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      cateName: "Woman’s Fashion",
      icon: "ri-arrow-right-s-line",
      subCategories: ["Dresses", "Tops", "Shoes"],
    },
    {
      cateName: "Men’s Fashion",
      icon: "ri-arrow-right-s-line",
      subCategories: ["Shirts", "Pants", "Jackets"],
    },{
      cateName:"Electronics",
     },{
      cateName:"Home & Lifestyle",
     },{
      cateName:"Medicine",
     },{
      cateName:"Sports & Outdoor",
     },{
      cateName:"Baby’s & Toys",
     },{
      cateName:"Groceries & Pets",
     },{
      cateName:"Health & Beauty",
     }
  ];
  const toggleSubCategories = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className='category'>
        {data.map((value, index) => (
          <div className={`box ${activeIndex === index ? 'active' : ''}`} key={index}>
            <Link to='/shop' onClick={() => toggleSubCategories(index)}>
              <span>{value.cateName}</span>
            </Link>
            <i 
              className={value.icon} 
              onClick={() => toggleSubCategories(index)}
            ></i>
            {activeIndex === index && value.subCategories && (
              <ul className='subcategories'>
                {value.subCategories.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <Link to='/shop'>{sub}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;