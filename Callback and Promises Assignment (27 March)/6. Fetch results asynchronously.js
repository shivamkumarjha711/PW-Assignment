async function fetchData() {
    const response = await
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((data) => data.json())
    console.log(response);
}

fetchData();    