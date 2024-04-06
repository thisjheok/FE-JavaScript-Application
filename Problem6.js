// 6번 문제

const arr = [{ part: "fe", name: "홍현", age: 26},
  { part: "fe", name: "애리", age: 24},
  { part: "fe", name: "나연", age: 23},
  { part: "staff", name: "나현", age: 24}];

  let fes = arr.filter((le)=>le.part === "fe");
  let ages = fes.sort(function(a,b){
    return a.age-b.age;
  })
  let upper = arr.map((a)=>a.part.toUpperCase());