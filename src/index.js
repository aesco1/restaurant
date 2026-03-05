import "./styles.css";
import { Home } from "./Home";
import { Menu } from "./Menu";
import { Drinks } from "./Drinks";

console.log("Hello from the index") 
const home = new Home();
const menu = new Menu();
const drinks = new Drinks();

const content = document.querySelector('#content');
content.innerHTML = '';
content.appendChild(drinks.render());

const homeButton = document.querySelector('#home-button')
homeButton.addEventListener('click', (event)=>{
    console.log("Hello from Home");
    content.innerHTML = '';
    content.appendChild(home.render());
});

const menuButton = document.querySelector('#menu-button')
menuButton.addEventListener('click', (event)=>{
    console.log("Hello from Menu");
    content.innerHTML = '';
    content.appendChild(menu.render());
});

const drinksButton = document.querySelector('#drinks-button')
drinksButton.addEventListener('click', (event)=>{
    console.log("Hello from Drinks");
    content.innerHTML = '';
    content.appendChild(drinks.render());
});





