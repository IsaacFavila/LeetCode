/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var nums = nums1.concat(nums2);
    nums.sort(function(a, b) {
        return a - b;
    });
    var length = nums.length;
    if (length % 2 === 1) {
        return nums[(length - 1) / 2];
    } else {
        var topHalf = nums[length / 2]
        var bottomHalf = nums[(length / 2) - 1]
        return (topHalf + bottomHalf) / 2;
    }
};