const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); 

const roadImg = new Image;
roadImg.src = 'images/road.png';
roadImg.onload = () => {
  ctx.drawImage(roadImg, 0, 0, 500, 700);
}; 

/*  const carImg = new Image; 
carImg.src = "images/car.png"
carImg.onload = () => {
  ctx.drawImage(carImg, 210, 590, 80, 80)
}
 */

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d"); 

  class Things {
    constructor (x, y, witdh, height, imgElement){

      this.x = x;
      this.y = y;
      this.witdh = w;
      this.height = h;
      this.imgElement = new Image; 
            carImg.src = "images/car.png"
            carImg.onload = () => {
            ctx.drawImage(carImg, 210, 590, 80, 80)
            }  

   /*          const roadImg = new Image;
            roadImg.src = 'images/road.png';
            roadImg.onload = () => {
              ctx.drawImage(roadImg, 0, 0, 500, 700);
            };
             */
    }
    recalculatePosition(incX, incY) {
        this.x = incX;
        this.y = incY; 
    }
    print() {
      canvasObj.ctx.fillStyle = this.imgElement; 
      canvasObj.ctx.fillRect(this.x, this.y, this.witdh, this.height); 
    }
  }
};



}
