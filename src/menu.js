import gourmet from "./imgs/gourmet_menu.png";
import little_chef from "./imgs/little_chef_menu.png";
import remy from "./imgs/remy_menu.png";

export function menuLoad() {
  const content = document.getElementById("content");

  const gourmet_menu_img = document.createElement("img");
  gourmet_menu_img.src = gourmet;

  const little_chef_menu_img = document.createElement("img");
  little_chef_menu_img.src = little_chef;

  const remy_menu_img = document.createElement("img");
  remy_menu_img.src = remy;

  content.appendChild(remy_menu_img);
  content.appendChild(little_chef_menu_img);
  content.appendChild(gourmet_menu_img);

  const css = document.createElement("style");
  css.textContent = `
    #content {
      display: flex;
      flex-direction: row;
    }

    #content header {
      font-size: 30px;
    }
    
    #content img {
      height: 550px;
    }
  `;

  document.head.appendChild(css);
}