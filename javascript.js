function createWallPaper(cardObject) {
  let innerFlex = document.createElement("div");
  innerFlex.classList.add("container", "d-flex", "justify-content-center");

  let cardDiv = document.createElement("div");
  innerFlex.append(cardDiv);
  cardDiv.classList.add("vh-75", "p-md-5", "p-3", "my-5", "col-md-8", "col-12", "d-flex", "imgBackground", "justify-content-" + cardObject.verticalDirection, "align-items-" + cardObject.horizontalDirection);

  cardDiv.style.backgroundImage = 'url(' + cardObject.wallpaperUrl + ')';
  cardDiv.style.backgroundRepeat = 'no-repeat';
  cardDiv.style.backgroundSize = 'cover';

  let cardInfo = document.createElement("div");
  cardDiv.append(cardInfo);
  cardInfo.classList.add("col-8");

  let text = document.createElement("h3");
  cardInfo.append(text);
  text.classList.add("paperText");
  text.style.color = cardObject.colorCode;
  text.innerHTML = cardObject.text;

  return innerFlex;
}

const domObj = document.getElementById("target");

class motivationalSpeechWallpaper {
  constructor(text, colorCode, wallpaperUrl, verticalDirection, horizontalDirection) {
    this.text = text;
    this.colorCode = "#" + colorCode;
    this.wallpaperUrl = wallpaperUrl;
    this.verticalDirection = verticalDirection;
    this.horizontalDirection = horizontalDirection;
  }
}

let wallpaper1 = new motivationalSpeechWallpaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "1B4F72", "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg", "end", "start");
let wallpaper2 = new motivationalSpeechWallpaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "007bff", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "left", "center");
let wallpaper3 = new motivationalSpeechWallpaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "center", "center");

let wallpapers = [wallpaper1, wallpaper2, wallpaper3];
wallpapers.map(wallpaper => domObj.append(createWallPaper(wallpaper)));