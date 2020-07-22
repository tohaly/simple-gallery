import "./CardList.css";
import React, { useState } from "react";
import { Card, ICardType } from "../Card/Card";

interface ICardList {
  cards: ICardType[];
  handleMarkCard(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
}

function CardList(props: ICardList) {
  const { cards, handleMarkCard } = props;
  return (
    <div className="card-list">
      {cards.map((item, i) => (
        <Card key={item.id} {...item} handleMarkCard={handleMarkCard} />
      ))}
    </div>
  );
}

export { CardList };
