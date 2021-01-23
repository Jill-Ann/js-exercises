// There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B.

// Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colours.

// "RGBRGBRGGB"   => 1
// "RGGRGBBRGRR"  => 3
// "RRRRGGGGBBBB" => 9

function solve(stones) {
  let arr = stones.split("");
  return arr.filter((char, i) => char == arr[i + 1]).length;
}

console.log(solve("RRRRGGGGBBBB")); // 9