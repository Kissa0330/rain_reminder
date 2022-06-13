import "./css/styles.css";
import watch_location from "./js/watch_location";
import register_mailaddress from "./js/register_mailaddress";

watch_location();
let button = document.getElementById("mail_button");
console.log(button);
button.addEventListener("click", register_mailaddress);
