import { getPopular, searchMusic } from "./api.js";
import { elements, renderCard, renderLoader, renderPlayer } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    renderLoader();

    getPopular()
        .then((data) => renderCard(data))
        .catch((err) => {
            console.log(`Hata ${err}`);
            alert("Üzgünüz bir hata olustu");
        });
});

elements.form.addEventListener("submit", (e) => {
    e.preventDefault();

    const query = e.target[0].value;

    if (!query) {
        return alert("Lütfen sarki veya sarkici adi aratiniz");
    }

    renderLoader();

    searchMusic(query)
        .then((data) => renderCard(data))
        .catch((err) => {
            console.log(`Hata: ${err}`);
            alert("Üzgünüz bir hata olustu");
        });
});

elements.list.addEventListener("click", (e) => {
    if (e.target.className === "play") {
        const card = e.target.parentElement.parentElement;

        const data = card.dataset;

        renderPlayer(data);
    }
});
