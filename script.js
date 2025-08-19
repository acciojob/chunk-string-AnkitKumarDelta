function stringChop(str, size) {
  if (!str) return [];              // handle null, undefined, or empty
  size = Number(size);              // ensure size is a number
  if (isNaN(size) || size <= 0) return [];

  let a = [];
  let i = 0;

  while (i < str.length) {
    a.push(str.slice(i, i + size));
    i += size;
  }

  return a;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(stringChop(str, size));
