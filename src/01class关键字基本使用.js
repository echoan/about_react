//console.log('123')
//构造函数创建一个类
function Person(name,age){
    this.name = name;
    this.age = age;
}
const p1= new Person('tom',25);
//直接挂载到构造函数的属性，称为静态属性
Person.info = '这是一个人的类';
console.log(p1);
//通过new出来的实例访问到的属性，称为实例属性
console.log(p1.name);
console.log(p1.age);
//访问静态属性不能通过实例，要通过构造函数
console.log(p1.info);//undefined
console.log(Person.info);

//分割线
console.log('---------------------------------------------')
//使用class关键字创建类
class Animal{
    //constructor是类的构造器 每一个类中都有一个构造器，如果没有人为指定构造器的话，那么类内部的构造器可以认为是个空构造器 constructor(){}
    //构造器的作用，当执行new一个实例的时候，必然优先执行构造器中的代码
    constructor(name,age){
        //实例属性
        this.name = name;
        this.age = age;
    }
    //在class内部创建静态属性，使用static关键字
    static info='这是一个动物的类'
   
}
const animal1 = new Animal('旺财',2);
console.log(animal1);
console.log(animal1.name);
console.log(animal1.age);
//访问静态属性同样要通过类
console.log(animal1.info);//undefined
console.log(Animal.info);
