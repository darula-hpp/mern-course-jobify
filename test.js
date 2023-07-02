let op = new Promise((resolve, reject) => {
  let id = 1 + 1;
  if (id === 3) {
    resolve("Hey");
  } else {
    reject("Whoa");
  }
})
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

const retPromise = () => {
  return new Promise((resolve, reject) => {
    resolve("Hello");
  });
};

await retPromise().then((message) => console.log(message));
