// Using map functions

const strings = ["ab", "ab", "abc"];
queries = ["ab", "abc", "bc"];

function matchingStrings(strings, queries) {
  let results = [];
  queries.map((query) => {
    let occurences = 0;
    strings.map((string) => {
      if (query === string) {
        occurences += 1;
      }
    });
    results.push(occurences);
  });
  console.log(results);
}
matchingStrings(strings, queries);

// Using a for loop

function matchStrings(strings, queries) {
  let ans = [];
  for (let i = 0; i < queries.length; i++) {
    let instances = 0;
    for (let j = 0; j < strings.length; j++) {
      if (strings[j] === queries[i]) {
        instances++;
      }
    }
    ans.push(instances);
  }
  console.log(ans);
}
matchStrings(["def", "de", "fgh"], ["de", "lmn", "fgh"]);
