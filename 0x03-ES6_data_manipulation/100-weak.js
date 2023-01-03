const weakMap = new WeakMap();
let count = 1;
function queryAPI(obj) {
  weakMap.set(obj, count);
  count += 1;
  if (weakMap.get(obj) > 5) {
    throw new Error('Endpoint load is high');
  }
}

export { queryAPI, weakMap };
