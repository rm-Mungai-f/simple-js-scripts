class ClassName
{
    constructor(init1,init2)
    {
        this.prop1=init1;
        this.prop2=init2;
    }
    get props()
    {
        return [this.prop1,this.prop2];
    }
    set props(val)
    {
        ([this.prop1,this.prop2]=val);
    }
    methodInst()
    {
        //instance level method.
        //do something...
    }
    static methodStat()
    {
        //class level method
        //do something...
    }
}

const inst=new ClassName();
inst.prop=[1,2];
inst.methodInst();
ClassName.methodStat();