const images = ["0.jpg","1.jpeg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"]

const chosenImage = images[Math.floor(Math.random()*images.length)];

//css로 추가해보기도 했는데 이렇게 추가하는게 제일 예쁘게 반응하는 것 같음
document.body.style.backgroundImage = `url(img/${chosenImage})`;
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundAttachment = "fixed";