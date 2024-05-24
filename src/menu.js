export function menuLoad() {
  const content = document.getElementById("content");

  const gourmet_menu_img = document.createElement("img");
  gourmet_menu_img.src = '/imgs/gourmet_menu.png';

  const little_chef_menu_img = document.createElement("img");
  little_chef_menu_img.src = '/imgs/little_chef_menu.png';

  const remy_menu_img = document.createElement("img");
  remy_menu_img.src = '/imgs/remy_menu.png';

  content.appendChild(remy_menu_img);
  content.appendChild(little_chef_menu_img);
  content.appendChild(gourmet_menu_img);

  const css = document.createElement("style");
  css.textContent = `
    #content {
      display: flex;
      flex-direction: row;
    }
    #content img {
      height: 550px;
    }
  `;

  document.head.appendChild(css);
}