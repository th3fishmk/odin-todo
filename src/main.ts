import "./style.css";
import { Configurations } from "./user";

const configs = new Configurations();
const user = configs.get();

const profile = document.getElementById("profile");

if (profile) {
	profile.innerHTML = `
    <div class="info">
        <img
            src="https://cdn.pixabay.com/photo/2023/05/02/10/35/avatar-7964945_1280.png"
            alt="Profile pic"
            width="100px" />
        <h3>${user.username}</h3>
    </div>`;
    
}
