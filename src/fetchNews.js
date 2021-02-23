import axios from "axios";

const RSS_URL = "/ndtvnews-trending-news?format=xml";

const fetchNews = async () => {
  try {
    const result = await axios({
      method: "GET",
      url: RSS_URL,
    });

    const data = result.data;

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "text/xml");

    const items = xmlDoc.querySelectorAll("item");

    return items;
  } catch (err) {
    console.log(err);
  }
};

export default fetchNews;
