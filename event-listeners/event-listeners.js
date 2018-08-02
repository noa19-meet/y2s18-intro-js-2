// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg','./imgs/77e3ddf868d6156029d47c78b609c47e--zodiac-signs-tumblr-productivity-quotes.jpg','./imgs/68401382-tumblr-wallpapers.jpg','./imgs/Iphone-8-Wallpaper-Tumblr-Hipster.jpg','./imgs/wallpaper2you_583589.jpg'];
var currentIndex = 0;

function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }
document.getElementsByTagName("img")[0].src=pictures[currentIndex];
}

document.getElementsByTagName("img")[0].addEventListener("click",showNextPicture);