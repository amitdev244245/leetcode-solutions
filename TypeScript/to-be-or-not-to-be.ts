// Problem No: 2704
// Problem Name: To Be Or Not To Be
// Problem Link: https://leetcode.com/problems/to-be-or-not-to-be
// Time:  O(1)
// Space: O(1)

type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (val2: any): boolean => {
      if (val !== val2) throw new Error("Not Equal");
      return true;
    },
    notToBe: (val2: any): boolean => {
      if (val === val2) throw new Error("Equal");
      return true;
    },
  };
}
