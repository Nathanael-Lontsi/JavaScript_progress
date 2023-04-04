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
