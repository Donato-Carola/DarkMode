import PropTypes from "prop-types"

import axios from "axios";
import { useEffect, useState } from "react";

const Cards = ({isDarkMode}) => {
  const [item, setItem] = useState([]);

  const getData = async () => {
    const response = await axios.get("/data.json");
    console.log(response);
    setItem(response.data); //qui aggiorniamo il nostro state con i dati che arrivano
  };

  useEffect(() => {
    getData(); // useEffect ci permette di non trovarci in un loop infinito che arrivano i dati
  }, []); //questo avviene perchè ad ogni state aggiorna con i dati
  //useEffect ferma questa cosa, con le parentesi quadre dichiara che vogliamo che venga chiamato solo al primo render il fetch dei data

  return (
    <>
      <div className=" sm:container sm:mx-auto grid md:grid-cols-2 gap-4">
        {item.map((el) => {
          const { id, title, description } = el;
          return (
            <div
            key={id}
            className={`card border mb-5 ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
              <div className="card-body items-center">
                <h2 className="card-title">{title}</h2>
                <p> {description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;

Cards.propTypes = {
   isDarkMode: PropTypes.bool
}