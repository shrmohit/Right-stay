import React, { useState } from "react";
import { links } from "../../assets/images-links";
import "./styles.css";
import { list, list2 } from "../../assets/card-list";
import Cards from "../Cards";

function Filter({ selectedFilter, setSelectedFilter }) {
  return (
    <>
      <div className="filter-div">
        {links.map((item, i) => (
          <div
            key={i}
            className={`links-box ${i == selectedFilter && "selected-box"}`}
            onClick={() => {
              console.log("selecting key", i);
              setSelectedFilter(i);
            }}
          >
            <img
              src={item.imgSrc}
              className="links-img"
            />
            <p
              className={`links-label ${
                i == selectedFilter && "selected-label"
              }`}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
      {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
    </>
  );
}

export default Filter;
