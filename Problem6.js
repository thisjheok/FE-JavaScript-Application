// 6번 문제

const arr = [{ part: "fe", name: "홍현", age: 26},
  { part: "fe", name: "애리", age: 24},
  { part: "fe", name: "나연", age: 23},
  { part: "staff", name: "나현", age: 24}];

  let fes = arr.filter((le)=>le.part === "fe");

  let ages = fes.sort(function(a,b){
    return b.age-a.age;
  })
  
  const finalArr = ages.map(item => {
  return { ...item, part: item.part.toUpperCase() };
});