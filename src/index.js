import { homeLoad } from "./home.js";
import { menuLoad } from "./menu.js";
import { contactLoad } from "./contact.js";

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

function clearContent()
{
  const content = document.getElementById("content");
  content.innerHTML = "";
}

home.addEventListener("click", function() {
  clearContent();
  homeLoad();
});

menu.addEventListener("click", function() {
  clearContent();
  menuLoad();
});

contact.addEventListener("click", function() {
  clearContent();
  contactLoad();
})

homeLoad();

