let map1 = new Map();
map1.set("Id", 20);
map1.set("Id1", 20);
map1.set("Id3", 20);
map1.set("Id", 20);
map1.set("Id", 20);
for (const [key, value] of map1) {
  console.log(key, value);
}
