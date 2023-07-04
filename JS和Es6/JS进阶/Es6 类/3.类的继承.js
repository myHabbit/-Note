/* 
   将多个类中的重复代码提取出来
*/
class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    satHello = () => {
        console.log('动物再叫');
    }
}

//通过继承可以使得类中拥有其他类中的属性和方法
//使用extends 来继承一个类 继承后就相当于将该类的代码复制到了当前类中

class Dog extends Animal {

}

class Snake {

}

const dog = new Dog('旺财', 5)
console.log(dog.name, dog.age)