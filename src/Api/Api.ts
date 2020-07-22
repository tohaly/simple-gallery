interface IApi {
  _url: string;
  _getResponse(res: Response): Promise<unknown>;
  getPhotosList(): Promise<any>;
}

interface IData {
  id: string;
  author: string;
  url: string;
  width: string;
  height: string;
  download_url: string;
}

class Api implements IApi {
  _url: string;
  constructor(url: string) {
    this._url = url;
  }

  _getResponse(res: Response): Promise<IData[]> {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  getPhotosList(): Promise<IData[]> {
    return fetch(`${this._url}/list?limit=20`, {
      method: "GET",
    }).then(this._getResponse);
  }
}

export { Api };
export type IApiData = IData;
