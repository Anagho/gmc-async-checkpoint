// Task (1)
// Iterate with Async/Await
async function iterateWithAsyncAwait(params) {
  for (let x of params) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(x);
  }
}

iterateWithAsyncAwait([2, 3, 4, 5, 6]);

// Task (2)
// Awaiting a Call
async function getData() {
  const people = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await people.json();
  console.log(data);

  console.log("People gotten successfully");
}

getData();

// Task (3A) 
// Handling Errors with Async/Await
async function getPosts() {
  try {
    // Perform your async operation
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!posts.ok) {
      console.log(posts);
      console.log("An error occurred");
      return;
    }
    const data = await posts.json();
    console.log(data);

    console.log("Posts gotten successfully");
  } catch (error) {
    // handle any error that might occur from performing the async operation
    console.log(error);
    console.log("An error occurred while getting data");
  }
}

getPosts();


// Task (3B)
// Chaining Async/Await
async function firstAsyncFunction() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("First async function executed");
}

async function secondAsyncFunction() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Second async function executed");
}

async function thirdAsyncFunction() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Third async function executed");
}

async function chainedAsyncFunctions() {
  await firstAsyncFunction();
  await secondAsyncFunction();
  await thirdAsyncFunction();
}

chainedAsyncFunctions();


// Task (4)
// Awaiting Concurrent Requests
async function concurrentRequests() {
  const api1 = "https://jsonplaceholder.typicode.com/users";
  const api2 = "https://jsonplaceholder.typicode.com/posts";

  try {
    const [users, posts] = await Promise.all([
      fetch(api1).then((res) => res.json()),
      fetch(api2).then((res) => res.json()),
    ]);

    console.log("Users:", users);
    console.log("Posts:", posts);
  } catch (error) {
    console.error(
      "An error occurred with the concurrent requests:",
      error.message
    );
  }
}

concurrentRequests();


// Task (5)
// Awaiting Parallel Calls
function parallelCalls(urls) {
  Promise.all(
    urls.map((item) => {
      return new Promise((resolve, reject) => {
        fetch(item)
          .then((data) => resolve(data.json()))
          .catch((error) => reject(error));
      });
    })
  )
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

console.log(
  parallelCalls([
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
  ])
);
