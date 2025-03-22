const elements = {
    form: document.querySelector("form"),
    list: document.querySelector(".list"),
    player: document.querySelector(".player"),
};

// Cart render eden fonksiyonjhh

const renderCard = (songs) => {

    elements.list.innerHTML = "";
    // Şarkıları dön ve herbiri için bir html oluştur

    songs.forEach((song) => {
        // Bir Html oluştur
        const card = document.createElement("div");

        // Card'a title,subtitle,image,mp3 verilerini ata
        card.dataset.title = song.title;
        card.dataset.subtitle = song.subtitle;
        card.dataset.image = song.images.coverarthq;
        card.dataset.mp3 = song.hub.actions[1].uri;

        // Oluşturulan Html elemanına card classı ekle
        card.classList.add("card");

        // Bu card classına sahip elemanın içeriğini belirle
        card.innerHTML = ` 
        <figure>
                    <img
                      src="${song.images.coverarthq}"
                      alt="card-img"
                    />
                    <div class="play">
                      <i class="bi bi-play-fill"></i>
                    </div>
        </figure>
                  <div class="card-info">
                    <h4>${song.title} </h4>
                    <h4>${song.subtitle}</h4>
                  </div>`;

        // Oluşturulan card'ları Html listesine ekle
        elements.list.appendChild(card);
    });
};

const renderLoader = () => {
    elements.list.innerHTML = `
      
        <div class="spinner">
    
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
    
        </div> 
      `;
};

const toggleAnimate = () => {
    // Animasyon eklenecek resime eriş
    const image = elements.player.querySelector(".info img");

    image.classList.toggle("animate");
};

const renderPlayer = (song) => {
    elements.player.innerHTML = ` <div class="info">
           
            <img
              src="${song.image}"
              alt=""
            />
        
            <div>
              <h5>${song.title}</h5>
              <p>${song.subtitle}</p>
            </div>
          </div>
    
          <audio
            src="${song.mp3}"
            controls autoplay
          ></audio>
    
    
    
          <div class="icons">
            <i class="bi bi-music-note-list"></i>
            <i class="bi bi-boombox-fill"></i>
            <i class="bi bi-pc-display"></i>
          </div>`;

    // Audio elementine eriş
    const audio = elements.player.querySelector("audio");

    // Şarkının oynatılma ve durdurulma olaylarını izle
    audio.addEventListener("play", () => toggleAnimate());
    audio.addEventListener("pause", () => toggleAnimate());
};

export { elements, renderCard, renderLoader, renderPlayer };
