//为类American和Chinese创建一个父类这里可以将其视为该两个类的原型对象 prototype
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    //添加实例方法
    say(){
        console.log('你好')
    }
}

//创建一个美国人的类
//class类中，可以使用extends实现子类继承父类 语法 class 子类 extends 父类 {}
class American extends Person{
}
const A1 = new American('jack',25);
console.log(A1);
A1.say();

//创建一个中国人的类
class Chinese extends Person{
    //如果此时不定义该类的construntor,那么该类的constructor其实就是父类的constructor,如果此处定义该类的constructor，那么需要使用函数super()
    constructor(name,age,IDcard){
        super(name,age)
        this.IDcard = IDcard
    }
    move(){
        console.log('教练，我要打篮球')
    }
    //3个问题
    //1.为什么要在constructor中使用super()？如果一个子类通过extends关键字继承父类，那么在该子类自定义constructor时，必须先调用super;
    //2.super是什么？ super是一个函数，其本质是父类的构造器，子类的super()其实是父类构造器constructor在子类的引用。
    //3.调用了super后参数的传递？在定义类的constructor时可以为该类添加有别于父类实例属性的，
    //并且仅属于该类的实例属性（比如该例下的IDcard属性），但是为了保证同样拥有父类定义的实例属性，需要传必要的参数，如这里传递的name,age，否则对应属性就是undefined.

}
const C1 = new Chinese('林书豪',30,375435199389987654);
console.log(C1);
C1.say();
C1.move();