class Shape
{
    area()
    {

    }
}
class Triangle extends Shape
{
    constructor(b,h)
    {
        super();
        this.base=b;
        this.height=h;
    }
    area()
    {
        return 0.5*this.base*this.height;
    }
}
class Parallelogram extends Shape
{
    constructor(m,n)
    {
        super();
        this.base=m;
        this.height=n;
    }
    area()
    {
        return this.base*this.height;
    }
}
class Trapezium extends Shape
{
    constructor(k,l,o)
    {
        super();
        this.base1=k;
        this.base2=l;
        this.height=o;

    }
    area()
    {
        return 0.5*(this.base1+this.base2)*this.height;
    }
}
// class Circle extends Shape
// {
//     constructor(r)
//     {
//         super()
//         this.radius=r
//     }
//     area()
//     {
//         return Math.PI*this.radius**2;
//     }
// }
// class Rectangle extends Shape
// {
//     constructor(w,h)
//     {
//         super();
//         this.width=w;
//         this.height=h;
//     }
//     area()
//     {
//         return this.width*this.height;
//     }
// }
//const shapes=[new Circle(2),new Rectangle(2,3),new Circle(7)];
const shapes=[new Triangle(10,20),new Parallelogram(10,20),new Trapezium(10,20,30)];
shapes.forEach(item=>console.log(item.area()));