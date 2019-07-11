/*jshint esversion: 6 */

  
function createCoord(x, y) {
    return {
        x,
        y
    };
}

const math = {
    add(a,b) { return a + b; },
    sub(a,b) { return a - b; },
    multiply(a,b) { return a * b; }
  }
  

const array = [1,2,3,4,5,6];
const [a, ,c, ...remaining] = arr;
  

function doSomething() {
    return new Promise((resolve, reject) => {
      setTimeout(() =>  {
        resolve('done')
      }, 3000)
    })
  }
  
  doSomething().then(arg => {
   console.log('done here', arg);
  })

  getUser()
  .then(getOrderByUser)
  .then(getOrderItemsByOrder)
  .then(orderItems => {
    // do something with order items
  })

  async function getItems() {
    try {
      const user = await getUser();
      const order = await getOrderByUser(user);
      const items = await getOrderItemsByOrder(order);
      return items;
    } catch(err) {
      // handle error here, the suggestion to return something or rethrow
    }
  }
  
  getItems().then(items => {
    // do something with order items
  })
  