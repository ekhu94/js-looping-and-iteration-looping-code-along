const writeCards = (arr, name) => {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(`Thank you, ${arr[i]}, for the wonderful ${name} gift!`);
    }
    return output;
}

const countDown = n => {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}