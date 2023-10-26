/* 
Filename: SophisticatedCode.js

Description: This code provides a solution to the "Travelling Salesman Problem" using a genetic algorithm. The algorithm tries to find the shortest route among a given set of cities, ensuring that each city is visited exactly once. It involves various complex functions, data structures, and algorithms.

Note: This code assumes the existence of a "City" class with attributes - name, x-coordinate, and y-coordinate.

*/

// Genetic Algorithm Parameters
const POPULATION_SIZE = 100;
const NUM_GENERATIONS = 2000;
const MUTATION_RATE = 0.2;

// City Information
const cities = [
  new City("City1", 10, 20),
  new City("City2", 5, 30),
  // ... Add more cities
];

// Helper Functions

// Function to calculate the Euclidean distance between two cities
function distance(cityA, cityB) {
  const xDistance = Math.abs(cityA.x - cityB.x);
  const yDistance = Math.abs(cityA.y - cityB.y);
  return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
}

// Function to calculate the fitness of a route
function calculateFitness(route) {
  let totalDistance = 0;
  for (let i = 0; i < route.length - 1; i++) {
    const cityA = route[i];
    const cityB = route[i + 1];
    totalDistance += distance(cityA, cityB);
  }
  return 1 / totalDistance;
}

// Function to generate a random route
function generateRandomRoute() {
  const route = [...cities];
  for (let i = route.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [route[i], route[j]] = [route[j], route[i]];
  }
  return route;
}

// Genetic Algorithm Functions

// Function to breed two routes and produce a child
function breed(parentA, parentB) {
  const start = Math.floor(Math.random() * parentA.length);
  const end = Math.floor(Math.random() * (parentA.length - start)) + start;
  const child = Array(parentA.length);

  // Copy genes from parent A
  child.fill(null, start, end + 1);
  for (let i = start; i <= end; i++) {
    child[i] = parentA[i];
  }
  
  // Fill remaining genes from parent B
  let index = (end + 1) % parentA.length;
  for (let i = 0; i < parentB.length; i++) {
    const gene = parentB[i];
    if (!child.includes(gene)) {
      child[index] = gene;
      index = (index + 1) % parentB.length;
    }
  }

  return child;
}

// Function to mutate a route by swapping two cities
function mutate(route) {
  if (Math.random() <= MUTATION_RATE) {
    const indexA = Math.floor(Math.random() * route.length);
    let indexB = Math.floor(Math.random() * route.length);
    while (indexB === indexA) {
      indexB = Math.floor(Math.random() * route.length);
    }
    [route[indexA], route[indexB]] = [route[indexB], route[indexA]];
  }
  return route;
}

// Genetic Algorithm

// Generate initial population
let population = Array(POPULATION_SIZE).fill(null).map(() => generateRandomRoute());

// Evolution loop
for (let generation = 0; generation < NUM_GENERATIONS; generation++) {
  const populationFitness = population.map((route) => calculateFitness(route));
  
  // Select parents for breeding
  const parentA = population[Math.floor(Math.random() * POPULATION_SIZE)];
  const parentB = population[Math.floor(Math.random() * POPULATION_SIZE)];

  // Breed and mutate to create a new generation
  const child = mutate(breed(parentA, parentB));
  
  // Replace a randomly selected route with the child
  const index = Math.floor(Math.random() * POPULATION_SIZE);
  population[index] = child;
}

// Find the best route among the population
let bestRouteIndex = 0;
for (let i = 1; i < population.length; i++) {
  if (calculateFitness(population[i]) > calculateFitness(population[bestRouteIndex])) {
    bestRouteIndex = i;
  }
}

const bestRoute = population[bestRouteIndex];
console.log("Best Route:", bestRoute);