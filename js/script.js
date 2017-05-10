var link = document.querySelector(".btn-popup");
  var popup = document.querySelector(".popup");
  var close = popup.querySelector(".close");
  var form = popup.querySelector("form");
  var introduce = popup.querySelector("[name=name-post]");
  var email = popup.querySelector("[name=email-post]");
  var letter =popup.querySelector("[name=text-post]");
  var storage = localStorage.getItem("email");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("popup--show");
    introduce.focus();
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("popup--show");
    popup.classList.remove("popup-error");
  });

  form.addEventListener("submit", function(event) {
    if (!introduce.value || !email.value || !letter.value) {
      event.preventDefault();
      console.log("Заполните все поля, пожалуйста");
      popup.classList.remove("popup-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("popup-error");
    } else {
      localStorage.setItem("email", email.value);
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("popup--show")) {
        popup.classList.remove("popup--show");
        popup.classList.remove("popup-error");
      }
    }
  });

/*======= КАРТА =======*/

  var mapOpen = document.querySelector(".map-open-js");
  var mapPopup = document.querySelector(".popup-map");
  var mapClose = mapPopup.querySelector(".close");

  mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("popup-map--show");
  });

  mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("popup-map--show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (mapPopup.classList.contains("popup-map--show")) {
        mapPopup.classList.remove("popup-map--show");
      }
    }
  });

var myMap;
var myPlacemark;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('yandex-map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.68697956906804,37.52965449999998], // Москва
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    });

     myMap.geoObjects
        .add(new ymaps.Placemark([55.68712503147963,37.52969741534421]))
}

