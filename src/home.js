export function homeLoad(){
  const content = document.getElementById("content");

  const img = document.createElement("img");
  img.src = 'imgs/gusteau.png';
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
    }

    #content img {
      height: 300px;
      padding-top: 30px;
      padding-bottom: 18px;
    }

    #content header {
      font-size: 30px;
      padding-bottom: 15px;
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
