class Dimensions
{
    volume()
    {

    }
}
class Cylinder extends Dimensions
{
    constructor(r,h)
    {
        super();
        this.radius=r;
        this.height=h;
    }
    volume()
    {
        return Math.PI*(this.radius**2)*this.height;
    }
}
class Cone extends Dimensions
{
    constructor(r,h)
    {
        super();
        this.radius=r;
        this.height=h;
    }
    volume()
    {
        return (Math.PI*(this.radius**2)*this.height)/3;
    }
}
class Sphere extends Dimensions
{
    constructor(r,h)
    {
        super();
        this.radius=r;
        this.height=h;
    }
    volume()
    {
        return (4*Math.PI*(this.radius**3)*this.height)/3;
    }
}
class Pyramid extends Dimensions
{
    constructor(r,h,w)
    {
        super();
        this.length=r;
        this.width=h;
        this.height=w;
    }
    volume()
    {
        return (this.length*this.width*this.height)/3;
    }
}
class Right_angled_triangular_prism extends Dimensions
{
    constructor(r,h,w)
    {
        super();
        this.base=r;
        this.height=h;
        this.length=w;
    }
    volume()
    {
        return this.base*this.length*this.height*0.5;
    }
}
const volumes=[new Cylinder(10,20), new Cone(10,20), new Sphere(10,20), new Pyramid(10,20,30), new Right_angled_triangular_prism(10,20,30)];
volumes.forEach(item=>console.log (item.volume()));