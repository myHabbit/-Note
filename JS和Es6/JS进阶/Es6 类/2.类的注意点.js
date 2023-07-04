class Person {
    /**
     * 类中的所有代码都会在严格模式下执行
     *    严格模式下其中的一个特点 函数的this不是window
     * 
     * 注意：
     *   在类中方法中的this不是固定的
     *       以方法形式调用的  this是当前实例
     *      以函数形式调用 this是underfind
     *    在开发时 在有些场景下 我们希望方法中的this是固定的 不会因为调用方式不同而改变
     */

    fn() {
        console.log('-->', this)
    }
}

const per = new Person()
const text = per.fn

per.fn()  //per
text()    //underfind