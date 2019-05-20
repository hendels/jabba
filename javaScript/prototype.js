
function Przemy(multiplier){
    this.x = 100 * multiplier;
    this.y = 200 * multiplier;
    console.log('THIS:::', this); // << w przeglądarce przypisane do window (dafug?), w debuggerze interpretowane jako klasa pokazuje tylko te 2 zmienne, czyli przypisane do Przemy.
}

const p1 = new Przemy(3);
const p2 = new Przemy(4);

Przemy.prototype.show = function(){
    console.log('CALL FOR PROTOTYPE Function :::', this);
}

p1.show();
p2.show();