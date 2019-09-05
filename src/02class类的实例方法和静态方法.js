function Person(name,age){
    //实例属性
    this.name = name;
    this.age = age;
}
//静态属性
Person.info = '这是个人的类';

//添加一个实例方法
Person.prototype.say = function(){
    console.log('你好')
}
//添加一个静态方法
Person.show = function(){
    console.log('这是静态方法')
}
const p1 = new Person('tom',20);
console.log(p1);
p1.say();//调用实例方法
//p1.show();//报错
Person.show();//调用静态方法

console.log('---------------------------------------------------')
//class创建类

class Animal{
    constructor(name,age){
    //实例属性
        this.name = name;
        this.age = age;
    }
    //静态属性
    static info = '这是动物类'
    //添加实例方法
    say(){
        console.log('动物类的实例方法')
    }
    //添加静态方法
    static show(){
        console.log('这是动物类的静态方法')
    }

}
const animal1 = new Animal('阿黄',3);
console.log(animal1);
//调用实例方法
animal1.say();
//调用静态方法
Animal.show();