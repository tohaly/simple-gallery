import "./App.css";

import React, { useState, useEffect } from "react";
import { Route, withRouter } from "react-router-dom";

import { Api, IApiData } from "../../Api/Api";
import { url } from "../../constants/";

import { parseData } from "../../util/parseData";

import Header from "../Header/Header";
import { CardList } from "../CardList/CardList";
import { ICardType } from "../Card/Card";

interface IPageState {}

const api = new Api(url);

function App() {
  const [cards, setCards] = useState<ICardType[]>([]);
  const [favoriteCard, setFavoriteCard] = useState<ICardType[]>([]);

  const initCard = (data: IApiData[]) => {
    const parsedData = parseData(data);
    setCards([...cards, ...parsedData]);
  };

  useEffect(() => {
    api.getPhotosList().then((res) => initCard(res));
    console.log(withRouter(App));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMarkCard = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const parent = (event.target as HTMLDivElement).parentNode;
    const { id } = (parent as HTMLDivElement).dataset;
    const newCards = [...cards];
    const card = cards.find((card) => {
      return card.id === id;
    });

    if (card) {
      card.isFavorite = !card.isFavorite;

      if (card.isFavorite) {
        setFavoriteCard([...favoriteCard, card]);
      } else {
        favoriteCard.forEach((favCard, i) => {
          if (favCard.id === card.id) {
            favoriteCard.splice(i, 1);
          }
        });
      }
      setCards([...newCards]);
    }
    return;
  };

  return (
    <div className="app">
      <div className="app__container">
        <Header />
        {!cards.length && (
          <div className="loader">
            <div className="loader__item"></div>
          </div>
        )}
        <Route
          exact
          path="/"
          render={() => (
            <CardList cards={cards} handleMarkCard={handleMarkCard} />
          )}
        />
        <Route
          exact
          path="/favorites"
          render={() => (
            <CardList cards={favoriteCard} handleMarkCard={handleMarkCard} />
          )}
        />
      </div>
    </div>
  );
}

export { App };
