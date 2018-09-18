function merge(a1, a2) {
  let p1 = 0;
  let p2 = 0;
  let sorted = [];

  if (a1.length === 0 || a2.length === 0) {
    return a1.length === 0 ? a2 : a1;
  }

  while (a1[p1] !== undefined || a2[p2] !== undefined) {
    if (a1[p1] !== undefined && a2[p2] !== undefined) {
      a1[p1] > a2[p2] ? sorted.push(a2[p2++]) : sorted.push(a1[p1++]);
    } else {
      a1[p1] !== undefined ? sorted.push(a1[p1++]) : sorted.push(a2[p2++]);
    }
  }

  return sorted;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, pivot));
  const right = mergeSort(arr.slice(pivot));

  return merge(left, right);
}
