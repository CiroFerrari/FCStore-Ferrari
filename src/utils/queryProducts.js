let is_ok = true;

let queryProducts = (task) => {
  return new Promise((resolve, reject) => {
    if(is_ok) {
      setTimeout(() => {
        resolve(task);
      }, 2000);
    } else {
      reject("Error")
    }
  })
}

export default queryProducts;