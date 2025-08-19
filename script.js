function stringChop(str, size) {
 let a = [];
  let i=0;
  while(i+size<str.length){
      a.push(str.slice(i,i+size));
      i = i+size;
  }
  a.push(str.slice(i));
  return a;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
