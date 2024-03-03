let parks = [
    {
        name: "Central Park",
        location: "New York City",
        facilities: ["playground", "lake", "picnic area"],
        trees: [
            { species: "Oak", age: 50, health: "Good", height: 25 },
            { species: "Maple", age: 40, health: "Fair", height: 20 }
        ]
    },
    {
        name: "Riverside Park",
        location: "New York City",
        facilities: ["bike path", "dog park", "walking trails"],
        trees: [
            { species: "Willow", age: 30, health: "Good", height: 18 },
            { species: "Maple", age: 35, health: "Excellent", height: 22 }
        ]
    }
];

parks.find(park => park.name === "Riverside Park").name = "Riverside Greenspace";

parks.find(park => park.name === "Central Park").trees.find(tree => tree.species === "Maple").species = "Sugar Maple";

parks.find(park => park.name === "Central Park").trees.push({ species: "Birch", age: 7, health: "Good", height: 18 });

let centralParkTrees = parks.find(park => park.name === "Central Park").trees.map(tree => tree.species);

let totalAge = parks.reduce((sum, park) => sum + park.trees.reduce((acc, tree) => acc + tree.age, 0), 0);
let averageTreeAge = totalAge / parks.reduce((count, park) => count + park.trees.length, 0);

let tallestTree = parks.flatMap(park => park.trees).reduce((tallest, tree) => tree.height > tallest.height ? tree : tallest);

let centralPark = parks.find(park => park.name === "Central Park");
centralPark.facilities = centralPark.facilities.filter(facility => facility !== "playground");

let parksJSON = JSON.stringify(parks);

console.log("Name:", parks[0].name);
console.log("Facilities:", parks[0].facilities);

console.log("Species:", parks[2].trees[0].species);
