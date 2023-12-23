import React, { useEffect, useState } from "react";
import Styles from "./slider.module.css";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

const items = [
  {
    imageUrl: "https://www.pisarto.com/cdn/shop/products/DSC_2116_800x.jpg?v=1660818835",
    title: "Lossless Youths",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
  },
  {
    imageUrl: "https://i.redd.it/tc0aqpv92pn21.jpg",
    title: "Estrange Bond",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
  },
  {
    imageUrl: "https://wharferj.files.wordpress.com/2015/11/bio_north.jpg",
    title: "The Gate Keeper",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
  },
  {
    imageUrl: "https://images7.alphacoders.com/878/878663.jpg",
    title: "Last Trace Of Us",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
  },
  {
    imageUrl:
      "https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg",
    title: "Urban Decay",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
  },
  {
    imageUrl: "https://da.se/app/uploads/2015/09/simon-december1994.jpg",
    title: "The Migration",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
  },
];

const Slider = () => {
  const handlePrev = () => {
    const items = document.querySelectorAll(".item");
    const slider = document.querySelector(".slider");
    slider?.prepend(items[items.length - 1]);
  };

  const handleNext = () => {
    const items = document.querySelectorAll(".item");
    const slider = document.querySelector(".slider");
    slider?.append(items[0]);
  };
  return (
    <div className={Styles.sliderBody}>
      <ul className={`slider`}>
        {items.map((item, index) => (
          <li
            key={`${item.title}`}
            className={`${Styles.item} item`}
            style={{ backgroundImage: `url("${item.imageUrl}")` }}
          >
            <div className={Styles.content}>
              <h2 className={Styles.title}>{item.title}</h2>
              <p className={Styles.description}>{item.description}</p>
              <button className={`${Styles.buttonSlider}`}>Read More</button>
            </div>
          </li>
        ))}
      </ul>

      <div className={`${Styles.nav}`}>
        <div className={`${Styles.btn} prev`} onClick={handlePrev}>
          <IoArrowBackCircle size={36} />
        </div>
        <div className={`${Styles.btn} next`} onClick={handleNext}>
          <IoArrowForwardCircle size={36} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
