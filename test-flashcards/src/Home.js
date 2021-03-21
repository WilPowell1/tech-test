import React, { useTranslate } from "react-translate"
 
let translations = {
  locale: "en",
  Home: {
    "HELLO": "Helloworld!"
  }
};
 

function Home() {
    let t = useTranslate("Home");
    return <h1> {t("HELLO")} </h1>
  }

  export default Home;