/* eslint-disable */
// Export a const instance of WeakMap named weakMap
export const weakMap = new WeakMap();

// Export a new function named queryAPI
export function queryAPI(endpoint) {
  // Get the current count of queries for the endpoint from the weakMap
  let count = weakMap.get(endpoint) || 0;

  // Increment the count
  count += 1;

  // Update the weakMap with the new count
  weakMap.set(endpoint, count);

  // If the count reaches or exceeds 5, throw an error
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
