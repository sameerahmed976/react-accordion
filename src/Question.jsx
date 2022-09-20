import React, { useState } from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <article className="card">
        <article className="card__heading">
          <h2 className="card__title ">{title} </h2>
          <button
            className="btn"
            onClick={() => {
              setShowInfo(!showInfo);
            }}
          >
            {showInfo ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}
          </button>
        </article>
        <p className="card__info ">{showInfo && info}</p>
      </article>
    </>
  );
};

export default Question;
