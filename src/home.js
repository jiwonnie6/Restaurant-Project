import gusteau from "./imgs/gusteau.png";

export function homeLoad(){
  const content = document.getElementById("content");

  const img = document.createElement("img");
  img.src = gusteau;
  content.appendChild(img);

  const headerText = document.createElement("header");
  const headerTextNode = document.createTextNode("Gusteau's Restaurant");
  headerText.appendChild(headerTextNode);
  content.appendChild(headerText);

  const homeText = document.createElement("div");
  const homeTextNode = document.createTextNode("Nam doloribus rerum est atque cupiditate quo distinctio accusantium aut tempore temporibus in dolor quibusdam! Ut debitis laudantium et minima quas non voluptates fuga. Et facilis perspiciatis ad veritatis rerum sed doloribus natus ad explicabo quae ut deleniti ratione aut inventore ullam. Et velit saepe ad reprehenderit facilis ut aspernatur recusandae eum sunt velit nam quae aspernatur.");
  homeText.appendChild(homeTextNode);
  content.appendChild(homeText);

  const css = document.createElement("style");
  css.textContent = `
    #content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1em;
    }

    #content img {
      height: 300px;
      margin-top: 25px;
      margin-bottom: 18px;
    }

    #content header {
      font-size: 30px;
      margin-bottom: 15px;
    }

    #content div {
      text-align: left;
      border: 1px solid black;
      width: 500px;
      padding: 1em;
    }
  `;

  document.head.appendChild(css);
}
