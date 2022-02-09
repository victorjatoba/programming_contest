// block_list = ['10.22.198.*', '5.192.168.101']
// def is_allowed(ip_address):
//     return True

// size ~1Mi*999
// assume valid ip_address

// function is_allowed(ip_address: string, block_list: string[]) {
//     const exists = block_list.some(e => e === ip_address)
//     return !exists;
// ;}

function is_allowed(ip_address: string, block_list: string[]) {
    const blockListStarsFilled = fillIpStars(block_list);
    //console.log(blockListStarsFilled)
    const exists = blockListStarsFilled.some(e => e === ip_address);
    return !exists;
;}

function fillIpStars(block_list: string[]) {
  let blockListStarsFilled: string[] = [];
  for(let i = 0; i < block_list.length; i ++) {
    const ip = block_list[i];
    const starPosition = ip.indexOf("*");
    //console.log(starPosition + " : " + ip);
    if (starPosition > -1) {
      // fill block_list_stars_filled with 0 to 9 numbers
      // remove the last character from ip
      const ipWithoutStar = ip.slice(0, -1);
      // console.log(starPosition + " : " + ip + " : " + ipWithoutStar);
      for(let j = 0; j < 1000; j++) {
        const ipWithNumber = `${ipWithoutStar}${j}`;
        blockListStarsFilled.push(ipWithNumber);
      }
    } else {
      blockListStarsFilled.push(ip);
    }
  }
  return blockListStarsFilled;
}

// Complexity O(2n)

// console.log(is_allowed('1.2.3.4',['10.22.198.2', '5.192.168.101'])) // True
// // console.log(is_allowed('10.22.198.2',['10.22.198.2', '5.192.168.101'])) // False
// console.log(is_allowed('10.22.198.999',['10.22.198.*', '5.192.168.101'])) // False
// console.log(is_allowed('10.22.198.5',['10.22.198.*', '5.192.168.101'])) // False
console.log(is_allowed('10.22.198.9',['10.22.198.*', '5.192.168.101'])) // False
console.log(is_allowed('10.22.198.768',['10.22.198.*', '5.192.168.101'])) // False
// console.log(is_allowed('10.22.198.768',['10.*.198.*', '5.192.168.101'])) // False
// console.log(is_allowed('10.22.5.9',['10.22.198.*', '5.192.168.101'])) // True