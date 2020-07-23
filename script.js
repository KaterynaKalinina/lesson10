// const grades = {
//     Junior: 'junior',
//     Middle: 'middle',
//     Senior: 'senior',
// }

// const bonuses = {
//     'C++': 20,
//     Rust: 40,
//     default: 100,
// }

// const gradeTax = {
//     [grades.Junior]: 0.25,
//     [grades.Middle]: 0.5,
//     [grades.Senior]: 0.75,
// }


// function User(name, language, grade = grades.Junior) {
//     this.name = name;
//     this.grade = grade;
//     this.salary = 1000;
//     this.language = language;
//     this.tasks = 0;

//     // обязательно стрелочная функция

//     this.addTask = () => {
//         this.tasks++;
//     };

//     this.finishTask = () => {
//         if(this.tasks > 0) {
//             this.tasks--;
//             this.salary += (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
//         };
//     }
// }



// const user = new User('John', 'C++', grades.Junior);
// const user1 = new User('Vasya', 'Rust', grades.Senior);
// const user2 = new User('Dima', 'Java', grades.Middle);

// user2.addTask();
// user2.addTask();
// user2.addTask();
// user2.finishTask();
// user2.finishTask();

// console.log(user, user1, user === user1, user.addTask(), user.finishTask(), user2);

// function hello() {
//     console.log(new.target);
// }

// hello();
// new hello();

// const hall = 'hello';
// hall.a = 2;
// console.log(hall.a);
// hall.toUpperCase();
// console.log(hall.toUpperCase());

// const a = 'abc';
// a.b = 2;
// console.log(new String(a));

// const s = 2;
// Number.prototype.toBoolean = function() {
//     // console.log(this);
//     return Boolean(this.valueOf());
// }
// s.toBoolean();
// console.log((2).toBoolean());
// console.log((0).toBoolean());


// function upperCase(str) {
//     let newstr = '';
//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];
//         newstr += i && !(i % 2) ? element.toUpperCase() : element;
//     }
//     return newstr;
        
        
//     };
// console.log(upperCase('name'));


const arr = [2];

arr.abd = 'dkjhk';
console.log(arr);

const arr1 = [1,2,3];
const obj = {
    a:1,
    b:2,
}

arr1.splice(1,1);
delete obj.a;
console.log(arr1, obj);