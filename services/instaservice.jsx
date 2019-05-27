import { url } from "inspector";

export default class InstaService {
  constructor() {

  }

  getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }

    return res.json();
  }
}