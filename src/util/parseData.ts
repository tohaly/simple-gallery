import { ICardType } from "../components/Card/Card";
import { IApiData } from "../Api/Api";

interface IData {
  id: string;
  author: string;
  url: string;
  width: string;
  height: string;
  download_url: string;
}

export const parseData = (data: IApiData[]): ICardType[] => {
  return data.map(({ id, author, download_url }) => {
    return { id, author, url: download_url, isFavorite: false };
  });
};
