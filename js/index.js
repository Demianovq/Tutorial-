// const string = "The quick brown fox jumped over the lazy dog";
// function findLongestWord() {
//   return a;
// }
// const a = string.split(" ");
// let maxWord = a[0];

// for (word of a) {
//   console.log(word);
//   if (word.length > maxWord.length) {
//     word = maxWord;
//   }
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");

// const myArray = [1, 5, 6, 2, 3];
// const m = Math.max(...myArray);
// console.log(m);

// const numbers = [12, 24, 8, 41, 76];
// const a = [];
// const value = 40;
// for (number of numbers) {
//   if (number < value) {
//     console.log(number);
//     a.push(number);
//   }
// }
// console.log(a);

// console.log(a);

// const array1 = [1, 2, 3];
// const array2 = [2, 1, 17, 19];
// const s = array1.includes(array2);
// for (number of array1) {
//   console.log(number);
//   for (numbers of array2) {
//     console.log(numbers);
//   }
// }

// const playlist = {
//   name: "Прикол",
//   rating: 5,
//   tracks: ["Over", "Gover"],
//   trackCount: 3,
// };
// const { name, rating, tracks, trackCount } = playlist;
// console.log(name);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (items in apartment) {
//   console.log(items);
// }

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }

//   // Change code above this line
// }

// console.log(keys);
// console.log(values);

// const object = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const a = Object.keys(object);
// const b = object.hasOwnProperty(a);
// const propCount = a.length;
// console.log(propCount);

// function countProps(object) {
//   const a = [];
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       a.push(key);
//       propCount = a.length;
//       console.log(propCount);
//     }
//   }
//   // Change code above this line
//   console.log(a);
//   console.log(propCount);
//   return propCount;
// }

// countProps(object);

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const a = Object.keys(object);
//   for (const items of a) {
//     if (object.hasOwnProperty(items)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// // Change code below this line
// const b = [];
// const f = "price";

// for (const key of products) {
//   const a = Object.keys(key);
//   console.log(a.includes(f));

// for (const key of products) {
//   const c = Object.keys(key);
//   console.log(products.find(f));
//   if (c.includes(f)) {
//   }
// }

// function getAllPropValues(propName) {
//   // Change code below this line
//   const b = [];
//   for (const key of products) {
//     const c = Object.keys(key);
//     console.log(c);
//     console.log(products.);
//   }
//   return b;
//   // Change code above this line
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// const productName = "Radar";
// for (const key of products) {
//   const c = Object.values(key);
//   if (c.includes(productName)) {
//     const b = key.price * key.quantity;
//     console.log(b);
//   }
// }

// let total = 0;
// function add(firstNum, ...otherArgs) {
//   const s = firstNum;
//   const c = otherArgs;

//   const b = [];

//   for (num of s) {
//     console.log(num);
//     if (c.includes(num)) {
//       b.push(num);
//     }
//   }
// }

// add([1, 2, 3, 4, 5], 1, 8, 2, 7);

// const books = ["The last kingdom", "The guardian of dreams"];
// const s = books.indexOf("The guardian of dreams");
// console.log(s);

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
// };

// // const a = { name: "Good potion", price: 160 };

// for (const book of atTheOldToad.potions) {
//   //
// }

// for (let i = 0; i < atTheOldToad.potions.length; i += 1) {
//   const b = atTheOldToad.potions[i];
//   const s = b.indexOf("Speed potion");
// }

// console.log({ ...atTheOldToad.potions, a });

// ZD 41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const book of this.potions) {
//       if (book.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (const book of this.potions) {
//       const s = book.name.indexOf(potionName);
//       if (s === -1) {
//         return `Potion ${potionName} is not in inventory!`;
//       }
//       return this.potions.splice(s, 1);
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < atTheOldToad.potions.length; i += 1) {
//       const b = atTheOldToad.potions[i];

//       if (b.name === oldName) {
//         this.potions.splice(i, 1, newName);
//       }
//       return `Potion ${oldName} is not in inventory!`;
//     }
//   },
//   // Change code above this line
// };
// const getBavovna = [];
// const notPeople = ["russian1", "russian2", "russian3"];
// notPeople.forEach(function (notMan) {
//   getBavovna.push(notMan);
// });
// console.log(getBavovna);
//  Write a function - positiveSum
//  It should accept an array of numbers and return a result of their addition. But you must calculate only positive numbers and omit negative if any presents.
//  For example:
//  positiveSum([2, 4, 6, 8])   // => 20
//  positiveSum([0, -3, 5, 7])  // => 12

// Практика !!!!!!!!!!!!!!!!!!!!!!!

// const positiveSum = function (array) {
//   const b = array.filter((value) => value >= 0);
//   const total = b.reduce((acc, number) => {
//     return acc + number;
//   }, 0);
//   return total;
// };

// const positiveSum = function (array) {
//   const total = array.reduce((acc, number) => {
//     if (number >= 0) {
//       return acc + number;
//     }
//     return acc;
//   }, 0);
//   return total;
// };

// console.log(positiveSum([0, -3, 5, 7]));
// console.log(positiveSum([2, 4, 6, 8]));

// Write a function – letterCount
// It accepts two string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// For example:

// const letterCount = function (word, letter) {
//   const lowWord = word.toLowerCase();
//   const lowLetter = letter.toLowerCase();
//   const array = [...lowWord];
//   return array.filter((value) => value === lowLetter).length;
// };

// letterCount("Maggy", "g"); // => 2
// letterCount("Barry", "b"); // => 1
// letterCount("", "z"); // => 0

// const letterCount = function (word, letter) {
//   const lowWord = word.toLowerCase();
//   const lowLetter = letter.toLowerCase();
//   const array = [...lowWord];
//   return array.reduce((acc, value) => (value === lowLetter ? acc + 1 : acc), 0);
// };

// console.log(letterCount("Maggy", "g"));
// console.log(letterCount("Barry", "b"));
// console.log(letterCount("", "z"));

// const calculateTotalPrice = (orderedItems) => {
//   let a = 0;
//   orderedItems.forEach((elem, index) => {
//     a += elem;
//   });
//   console.log(a);
// };

// calculateTotalPrice([12, 85, 37, 4]);

// const numbers = [1, 2, 3, 4, 5];
// const value = 10;

// const b = numbers.map((number, index, array) => {
//   if (number % 2 === 0) {
//     return (number = number + value);
//   }
//   return number;
// });
// console.log(b);

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((element) => {
//   return (element = element.length);
// });
// console.log(planetsLengths);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];

// const allGenres = books.flatMap((elem) => {
//   return (elem = elem.genres);
// });
// console.log(allGenres);
// const uniqueGenres = allGenres.filter(
//   (course, index, array) => array.indexOf(course) === index;
// );

// console.log(uniqueGenres);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter((elem, ind) => {
//   return (elem = elem.rating >= MIN_RATING);
// });
// console.log(topRatedBooks);
// const booksByAuthor = books;

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, elem) => {
//   const total = elem.playtime / elem.gamesPlayed;
//   console.log(total);
//   return total + acc;
// }, 0);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) =>
//   a.name.localeCompare(b.name)
// );

// console.log(sortedByAuthorName);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books.filter((elem) => elem.rating > MIN_BOOK_RATING);
// console.log(names);

// const a = [1, 2, 3, 4, 5];
// const b = a.reduce((previousValue, currentValue, i) => {
//   const value = previousValue[i - 1] ? previousValue[i - 1] : 0;
//   previousValue.push(value + currentValue);

//   return previousValue;
// }, []);
// console.log(b);

// const getSums = (array) => {
//   const a = array.reduce(
//     (acc, value, index) => {
//       if (index === 0) {
//         return [value];
//       } else {
//         return [...acc, acc[index - 1] + value];
//       }
//     },

//     []
//   );
//   return a;
// };

// const getSums = (array) =>
//   array.reduce(
//     (acc, value, index) =>
//       index === 0 ? [value] : [...acc, acc[index - 1] + value],
//     []
//   );

// console.log(getSums([1, 2, 3, 4, 5]));
// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     return this.value + str;
//   }
//   padStart(str) {}
//   padBoth(str) {}
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// import NewsApiService from "./newjs";
// console.log(NewsApiService);

// const form = document.querySelector("form");
// const btnMore = document.querySelector("js-btn");

// const newsApiService = NewsApiService();

// form.addEventListener("submit", onSearch);
// btnMore.addEventListener("click", onLoadMore);
// console.log(form);

// function onSearch(e) {
//   e.preventDefault();
//   const a = e.currentTarget.elements.query.value;

//   const options = {
//     headers: {
//       Authorization: "dd6409698a7c48b38fdfcffb0234ebfc",
//     },
//   };

//   fetch(
//     `https://newsapi.org/v2/everything?q=${a}&language=en&pageSize=10&page=1`,
//     options
//   )
//     .then((r) => r.json())
//     .then(console.log);
// }

// function onLoadMore() {
//   newsApiService.fetchArticles();
// }

// const list = document.querySelector(".js-result");
// const btnMore = document.querySelector(".js-btn");
// btnMore.addEventListener("click", onLoadMore);
// let page = 1;

// function lordOfTheRingsApi(page = 1) {
//   const BASE_URL = "https://the-one-api.dev/v2/character";
//   const KEY = "POo_gsAuILisM2c_tQMa";
//   const options = {
//     headers: {
//       method: "GET",
//       Authorization: `Bearer ${KEY}`,
//     },
//   };
//   return fetch(`${BASE_URL}?limit=100&page=${page}`, options).then((resp) => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     return resp.json();
//   });
// }

// lordOfTheRingsApi()
//   .then((data) => {
//     createMarkup(data.docs);
//     console.log(data);
//     btnMore.hidden = false;
//   })
//   .catch((err) => console.log(err));

// function createMarkup(arr) {
//   const markup = arr
//     .map(
//       ({ name, race }) => `<li>
//         <h2>${name}</h2>
//         <h3>${race}</h3>
//       </li>`
//     )
//     .join("");
//   list.innerHTML = markup;
// }

// function onLoadMore() {
//   page += 1;
//   lordOfTheRingsApi(page)
//     .then((data) => {
//       createMarkup(data.docs);
//       if (data.page === data.pages) {
//         btnMore.hidden = true;
//       }
//     })
//     .catch((err) => console.log(err));
// }

//////////////////////////////////////////// SCROLL
// let test = 1;
// document.addEventListener("scroll", onScroll);
// function onScroll() {
//   test += 1;
//   console.log(test);
// }

const list = document.querySelector(".js-result");
const guard = document.querySelector(".js-guard");
let page = 1;
const options = {
  root: null,
  rootMargin: "1px",
  threshold: 0,
};

function onLoad(entries, observer) {
  console.log("hello");
  entries.forEach((element) => {
    console.log(element);
    if (element.isIntersecting) {
      page += 1;
      lordOfTheRingsApi(page)
        .then((data) => {
          createMarkup(data.docs);
          if (data.page === data.pages) {
            observer.unobserve(guard);
          }
        })
        .catch((err) => console.log(err));
    }
  });
}

let observer = new IntersectionObserver(onLoad, options);

function lordOfTheRingsApi(page = 1) {
  const BASE_URL = "https://the-one-api.dev/v2/character";
  const KEY = "POo_gsAuILisM2c_tQMa";
  const options = {
    headers: {
      method: "GET",
      Authorization: `Bearer ${KEY}`,
    },
  };
  return fetch(`${BASE_URL}?limit=100&page=${page}`, options).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

lordOfTheRingsApi()
  .then((data) => {
    createMarkup(data.docs);
    console.log(data);
    observer.observe(guard);
  })
  .catch((err) => console.log(err));

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ name, race }) => `<li>
        <h2>${name}</h2>
        <h3>${race}</h3>
      </li>`
    )
    .join("");
  list.innerHTML = markup;
}
