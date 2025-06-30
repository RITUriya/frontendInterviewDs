/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const sarray = s.split("");
  const tarray = t.split("");
  let newarray = [];
  let i = 0;
  let j = 0;
  while (i < sarray.length && j < tarray.length) {
    if (sarray[i] == tarray[j]) {
      newarray.push(tarray[j]);
      i++;
    }
    j++;
  }
  if (s === newarray.join("")) {
    return true;
  } else {
    return false;
  }
};
// isSubsequence("abc", "ahbgdc");
// isSubsequence("axc", "ahbgdc");
isSubsequence("acb", "ahbgdc");
