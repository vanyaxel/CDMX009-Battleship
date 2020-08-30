const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const columns = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oponentPositions = () => {

    let letter = columns[Math.floor(Math.random() * (columns.length))];
    let number = rows[Math.floor(Math.random() * (rows.length))];

    let position = letter + number;
    return position;
};

export default oponentPositions();
