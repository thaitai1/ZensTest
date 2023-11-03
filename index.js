function miniMaxSum(arr) {
    let minSum = Infinity;
    let maxSum = -Infinity;
    let totalSum = 0;

    for (let i = 0; i < arr.length; i++) {
      totalSum += arr[i];

      if (arr[i] < minSum) {
        minSum = arr[i];
      }

      if (arr[i] > maxSum) {
        maxSum = arr[i];
      }
    }

    let minSumOfFour = totalSum - maxSum;
    let maxSumOfFour = totalSum - minSum;

    console.log(minSumOfFour + " " + maxSumOfFour);
  }

  // Example usage:
  let arr = [1, 2, 3, 4, 5];
  miniMaxSum(arr);
