// document$.subscribe(function () {
//   var tables = document.querySelectorAll("article table:not([class])");
//   tables.forEach(function (table) {
//     new Tablesort(table);
//   });
// });

document$.subscribe(() => {
  // Select all tables inside the article that DO NOT have the class "no-sort"
  document.querySelectorAll("article table").forEach((table) => {
    if (table.closest(".no-sort")) return; // skip tables inside a no-sort div
    new Tablesort(table);
  });
});
