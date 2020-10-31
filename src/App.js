import React, { useState, useEffect } from "react";
import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";

/** Alan API key  */
const alanKey =
  "69baab036ab8ceaca709318f20d230702e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [newsArticle, setNewsArticle] = useState([]);
  const [activeCard, setActiveCard] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newsheadlines") {
          setNewsArticle(articles);
          setActiveCard(-1);

        } else if (command === "highlights") {
          setActiveCard((prevCard) => prevCard + 1);
        }
      },
    });
  }, []);

  //console.log(newsArticle);

  return (
    <div>
      <center>
        <u>
          <h1 style={{ marginBottom: 40, marginTop: 20 }}>Top Headlines</h1>
        </u>
      </center>
      <NewsCards articles={newsArticle} activeArticle={activeCard} />
    </div>
  );
}

export default App;
