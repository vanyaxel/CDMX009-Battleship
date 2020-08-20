const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const rows = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function randomPosition() {
    let rowArr = rows.shift();
    let letter = columns[Math.floor(Math.random() * (columns.length))];
    let number = rows[Math.floor(Math.random() * (rows.length))];

    return letter + number;
}

console.log(randomPosition());