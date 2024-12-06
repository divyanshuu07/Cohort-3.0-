// classes are a way to define blueprints for creating objects.
//rect is object and rectangle is class

class Rectangle{
    constructor(height,width,color){
        this.width=width;
        this.height=height;
        this.color=color;
    }

    area(){
        return this.width*this.height;
    }
    paint(){
        console.log(`Painting with color ${this.color}`);
    }
}

const rect=new Rectangle(2,4,"blue");
const area=rect.area();
console.log(area);
rect.paint();
