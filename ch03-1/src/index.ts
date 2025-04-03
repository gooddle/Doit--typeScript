
//수 타입
let n: number = 1

n = 3;

console.log(n); // 3 let은 재할당 가능함

const a: number = 10; // const 값 재할당 불가능

let b: string; //

b = "good"// 초기화

//문자열 타입
let c: string = "삼겹살" // 선언과 동시에 초기화

let d: string = "구워 먹자"

console.log(a);

console.log(b);

console.log(d + c);


// 객체 선언 key, value 값으로 저장
let arr: { name: string; age: number } = { name: "jin", age: 12 };

console.log(arr);

console.log(arr.name);

console.log(arr.age);

//불리언 값
let f: Boolean = true;

console.log(f);

//자동 타입 추론

let int = 1

console.log(typeof int); // 타입 number

//템플릿 이건 코틀린이랑 비슷함
// , 로 2개의 변수 선언 가능
let count = 1 , budget = "money"
let result = `${budget} is ${count}`;
console.log(result);