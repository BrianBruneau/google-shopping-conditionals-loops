var data = require("./products.json")


// Write your solutions below

// console.log("******Question 1:");
// var count = 0;
// for (var i = 0; i < data['items'].length; i++) {
// 	if (data['items'][i].kind === 'shopping#product') {
// 	count++;
// 	}
// }

// console.log(count);


// console.log("******Question 2:");
// for (var i = 0; i < data['items'].length; i++) {
//   if (data.items[i].product.inventories[0].availability === 'backorder') {
//     console.log(data.items[i].product.title);
//   }
// }

// console.log("******Question 3:");
// for (var i = 0; i < data['items'].length; i++) {
//   if (data.items[i].product.images.length > 1) {
//     console.log(data.items[i].product.title);
//   }
// }

// console.log("******Question 4:");
// for (var i = 0; i < data['items'].length; i++) {
//   if (data.items[i].product.brand.toLowerCase() === "canon") {
//     console.log(i);
//   }
// }

// console.log("******Question 5:");
// for (var i = 0; i < data['items'].length; i++) {
//   if (data.items[i].product.author.name.indexOf('eBay') != -1 && data.items[i].product.brand.toLowerCase() === 'canon') {
//     console.log(i);
//   }
// }


// console.log("******Question 6:");
for (var i = 0; i < data['items'].length; i++) {
  console.log(data.items[i].product.brand);
  console.log(data.items[i].product.inventories[0].price);
  for (var img = 0; img < data.items[i].product.images.length; img++) {
    console.log(data.items[i].product.images[img].link);
  }
console.log('');
}













