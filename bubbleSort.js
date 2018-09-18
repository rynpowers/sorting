function swap(i, j, a) {
  [a[i], a[j]] = [a[j], a[i]];
}

function bubbleSort(arr) {
  let swapped = true;
  let end = arr.length - 1;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(i, i + 1, arr);
        swapped = true;
      }
    }
    end--;
  }
  return arr;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));
