//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const sold = (group) => {
  switch (group.size) {
    case 2:
      return 2 * (8 - (8 * 0.05));
      break;
    case 3:
      return 3 * (8 - (8 * 0.10));
      break;
    case 4:
      return 4 * (8 - (8 * 0.20));
      break;
    case 5:
      return 5  * (8 - (8 * 0.25));
      break;
    default:
      return 8
  }
}

const groupsOfBook = (books) => {
  let groups = {};
  let j = 0; // indice pour la création des groupes

  for (let i = 0; i < books.length; i++){
      if (!groups[j]) {
          groups[j] = new Set();
          groups[j].add(books[i]);
          j = 0
      } else {
          if (!groups[j].has(books[i])) {
              groups[j].add(books[i]);
          } else {
              j += 1
              i -= 1            
          }
      }
  }
  return groups
}

export const cost = (books) => {
  let groups = groupsOfBook(books);
  let totalCost = 0;
  for (const value of Object.values(groups)) {
    totalCost += sold(value);
  }
  return totalCost * 100;
};
