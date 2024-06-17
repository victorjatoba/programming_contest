/**
 * Approach 3: One-pass Hash Table
 *
 * Algorithm
 * It turns out we can do it in one-pass. While we are iterating and inserting elements into the hash table, we also look back to check if current element's complement already exists in the hash table. If it exists, we have found a solution and return the indices immediately.
 */
function twoSum(nums: number[], target: number): number[] {
    const map: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

/**
 * Complexity Analysis

Time complexity: O(n).
We traverse the list containing n elements only once. Each lookup in the table costs only O(1) time.

Space complexity: O(n).
The extra space required depends on the number of items stored in the hash table, which stores at most n elements.
*/
