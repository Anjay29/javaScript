const promiseFive = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.org/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E: wrong");
    }
}

promiseFive();