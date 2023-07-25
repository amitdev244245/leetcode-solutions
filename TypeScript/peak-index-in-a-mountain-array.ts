// Problem No: 852
// Problem Name: Peak Index in a Mountain Array
// Time: O(log n)
// Space: O(log n)

function peakIndexInMountainArray(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < arr[mid + 1]) {
      // We are on the ascending slope, so the peak must be on the right
      left = mid + 1;
    } else {
      // We are on the descending slope, so the peak must be on the left or at the current index (mid)
      right = mid;
    }
  }

  // The loop ends when left === right, which means we've found the peak index
  return left;
}