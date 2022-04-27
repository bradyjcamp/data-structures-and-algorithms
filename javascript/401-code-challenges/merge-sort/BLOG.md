# Merge Sort

- This function takes an array and destructures it into 3 different values.
  - `mid` gets set to the middle of the array `arr.length/2`
  - `left` is all index values left of mid.
  - `right` is all index values right of mid.

## Pseudocode

```js
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

## Whiteboard

![Whiteboard](/javascript/401-code-challenges/merge-sort/merge-sort.png)

## Code

-[Code](/javascript/401-code-challenges/merge-sort/index.js)