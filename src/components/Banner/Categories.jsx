import React from 'react'
import "./Banner.css";
import {Link} from 'react-router-dom'

const Categories = () => {
  const data=[
    {
      cateName:"Woman’s Fashion",
       icon: "ri-arrow-right-s-line",
    },
    {
      cateName:"Men’s Fashion",
      icon: "ri-arrow-right-s-line",
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
  ]
  return (
    <> 
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box' key={index}>

              
              <Link to='/shop'><span>{value.cateName}</span></Link>
              <i className={value.icon}></i>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories;