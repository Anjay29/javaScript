const promiseFive = async () => {
    const response = fetch('https://jsonplaceholder.org/users');
    const data = response.json();
    console.log(data);
}

promiseFive();