import "./Card.css";
import React from "react";

interface ICard {
  id: string;
  author: string;
  url: string;
  isFavorite: boolean;
  handleMarkCard?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
}

function Card({ id, author, isFavorite, url, handleMarkCard }: ICard) {
  return (
    <div data-id={id} className="card">
      <img src={url} alt="logo" className="card__img" />
      <div className="card__author">{author}</div>
      <div
        onClick={handleMarkCard}
        className={`card__mark ${isFavorite ? "card__mark_active" : ""}`}
      ></div>
    </div>
  );
}

export { Card };
export type ICardType = ICard;
