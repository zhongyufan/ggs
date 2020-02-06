// 类&面向对象
// 面向对象的基本特性｛多态、继承、封装｝

// 类的优点
// 1、降低维护成本
// 2、使代码高度复用
// 3、扩充方便灵活
// 4、降低设计成本
// 5、使用简单
// ...

// oop - 面向对象开发
// 核心 - 封装

// 通过函数封装是属于面向过程的封装
// 例如
// (function () {
//     function move() {
//         console.log(1);
//     }
//     move();
// })();
// (() => {
//     ((move) => console.log(1))();
// })();

// 类 -> 工厂（例如你像汽车工厂说你需要一个红色的特斯拉，那么工厂就会生产你个特斯拉对象给你，而你不用管这个特斯拉是怎样来的，电池从哪儿来，车身从哪儿来，都不用管）

// class Model3Car {
//     // 构造函数 - （工厂中接头人）
//     constructor(color, Autopilot) {
//         // 造车的过程
//         this.color = color;
//         this.Autopilot = Autopilot;

//         this.speed = 0;
//     }
//     // 加速
//     speedUp() {
//         this.speed += 1;
//     }
// }
// // 实例化
// const car = new Model3Car('red', false);
// console.log(car);
// console.log(car.speed);
// car.speedUp();
// console.log(car.speed);

// ---------------------------------------------------------------------

// 多态 -> 同一个接口，不同对象有不同表现

// class的特性
// 1、静态属性与静态方法
// 2、getter 与 setter
// 3、类表达式
// 4、name属性与new.target属性
// 5、在ES5中模拟类

// 1、静态属性与静态方法
// -不会被类实例所拥有的属性与方法，只是类自身拥有
// -只能通过类调用

// static关键字 静态方法 （可以用来放默认值）
// class Car {
//     constructor() {
// 静态属性
//         Car.totalCar += 1;
//         this.speed = 0;
//     }
//     speedUp() {
//         this.speed += 1;
//     }
//     static repair(car) {
//         console.log('我现在要修的是：', car);
//     }
// }

// Car.repair('1号车'); // 静态方法只能这样访问
// new Car().repair('1号车'); // (intermediate value).repair is not a function

// const car = new Car();
// car.checker(); Car.checker(); // 这两个同名不会冲突，一个是实例的方法，一个是静态方法

// 静态方法
/* 
class Person {
    static format(programmer) {
        programmer.haveGirlFriend = true;
        programmer.hair = true;
    }
}

class Programmer {
    constructor() {
        this.haveGirlFriend = false;
        this.hair = false;
    }
}

const programmer = new Programmer();
console.log(programmer);

Person.format(programmer);
console.log(programmer);
*/

// 类表达式
/* 
    const Person = class P {
        constructor() {
            // 里面是可以访问到 P 类名
            console.log(P);
            // 等于本身
            console.log(P === Person); // true
            // 这样有个好处，无论Person怎么改名字都能获得a
            P.a = 1;
            console.log('我是歌手');
        }
    }
    new Person();
    // 外面是无法访问 P 这个类名的
    console.log(Person.a);
    // console.log(P); // P is not defined
*/

// 自执行类
// const Person1 = new class P{
// new class P{
//     constructor(){
//         console.log('我是歌手哈哈哈哈');
//     }
// }();

// getter setter
// 类似于给属性提供钩子
// 在获取属性值和设置属性值的时候做一些额外的事情

// ES5 getter/setter
// 1、在对象字面量中
/* 
    const obj = {
        // name: '',
        // 这样设置会造成内存泄露，来回调用name()
        // get name() {
        //     return this.name;
        // },
        // set name(val) {
        //     this.name = val;
        // }
        _name: '',
        get name() {
            return this._name;
        },
        set name(val) {
            this._name = val;
        }
    }
    console.log(obj.name = 2);
*/

// 2、Object.defineProperty
/* 
    var obj = {
        _name: ''
    };
    Object.defineProperty(obj, 'name', {
        // value: 19, // 这里的值是不可以被遍历到
        // enumerable:true  // 只有设置了这个才可以被枚举
        get: function () {
            console.log('正在访问name');
            return this._name;
        },
        set: function (val) {
            console.log('正在修改name');
            this._name = val;
        }
    });
    obj.name = 10;
    console.log(obj.name);
*/

// ES6
/* 
    class Person {
        constructor() {
            this._name = '';
        }
        get name() {
            console.log('正在访问name');
            return this._name;
        }
        set name(val) {
            console.log('正在修改name');
            this._name = val;
        }
    }
    const person = new Person();
    person.name =10;
    console.log(person.name);
*/



