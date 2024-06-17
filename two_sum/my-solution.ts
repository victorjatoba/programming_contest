/**
 * Input:  Array<Int>, target (integer)
 * Output: indices of the two numbers wich the sum is equal target
 *   0, 1,  2, 3, ..., n
 *   2, 7, 11, 15
 *     9
 *   3, 2, 4
 *        6
 * Restrictions:
 *   - just one solution for input
 *   - not use same element twice
 *   - return: unorder
 */
interface HashTable<T> {
    [key: string]: T;
}

function twoSum(nums: number[], target: number): number[] {
    // sort
    // while
    // if nums[i] < target
    //   indx = nums[i]
    //   acc[ indx ] = before + indx
    //   if (before + indx == target) return

    //   6 => (6) (5 + 1) (4 + 2) (3 + 3)
    //   In: [3, 2, 4],  6
    //   In: [2, 7, 11, 15],  9
    //   0 1  2   3  4 5 6
    //        1   0  2

    // SOLUTION #3
    // x = fixed number
    // y = target - x

    // O(n)
    // populate HashTable< value > = index
    let valuesByIndex: HashTable<number> = {};
    for(let i = 0; i < nums.length; i++) {
        valuesByIndex[nums[i]] = i;
    }

    // iterate in array
    let i = 0;
    let x = nums[i]; // 3
    let y = target - x;  // 3 
    let indexOfSecondValue = valuesByIndex[y]; // 0
    console.log(x, y, indexOfSecondValue)
    
    for(i = 1; i < nums.length; i++) {
        if (indexOfSecondValue && indexOfSecondValue !== (i - 1)) {
            break;
        }
        x = nums[i]; // 2
        y = target - x; // 4
        indexOfSecondValue = valuesByIndex[y]; // 2
    }

    return [i - 1, indexOfSecondValue]
    // SOLUTION #2
    // sort
    // let sorted = nums.sort(); // O(n Log(n))
    // let less: Array<number> = [];
    
    // eliminate highers O(n)
    // for (let i = 0; i < sorted.length; i++) {
    //     if (sorted[i] < target) {
    //         less.push(sorted[i]);
    //     } else {
    //         break;
    //     }
    // }

    // interate i = first ; j = last
    // i++; j--
    // O (n/2)
    // let i = 0, j = less.length;
    // while (less[i] + less[j] !== target) {
    //     i++;
    //     j--;
    // }

    // return [i, j];

    // SOLUTION #1
    // O(n²)
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++)  {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j];
    //         }
    //     }
    // }
    
};
