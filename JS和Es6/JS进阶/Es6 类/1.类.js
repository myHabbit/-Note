// 定义一个类
class Person {
    //   name='孙悟空'
    //   age=18
    //   run(){
    //     console.log(123)
    //   }
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const per = new Person('孙悟空', 18)
console.log(per);
