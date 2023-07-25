// Problem No: 2635
// Problem Name: Apply Transform Over Each Element in Array
// Time:  O(n)
// Space: O(n)

var map = function (arr, fn) {
    const res = [];
    arr.forEach((elem, index) => {
        res.push(fn(elem, index));
    });
    return res;
};