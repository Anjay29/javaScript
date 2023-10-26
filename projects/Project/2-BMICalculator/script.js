const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // console.log(parseInt(document.querySelector('#height').value));
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid Height ${height}`;
        result.style.color = 'red';
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid Weight ${height}`;
        result.style.color = 'red';
    } else {
        const bmi = ((weight * 10000) / (height * height)).toFixed(2);

        // showing the result
        result.style.color = 'green';
        result.innerHTML = `Your BMI is ${bmi}`;
    }
})
