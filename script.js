
// Создаем матрицу шахматной доски 

let chess = [
   
    ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1'],
    ['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2'],
    ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3'],
    ['A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4'],
    ['A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5'],
    ['A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6'],
    ['A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7'],
    ['A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8'],
];

// создаем функцию для проверки возможных ходов шахматного коня

let result = [];

function setPlace(i,j) {

    // 2 вниз 1 право

    if (i + 2 < 8 && j + 1 < 8) {
        
        console.log(chess[i+2][j+1]);
        result.push(chess[i+2][j+1]); 

    }

    // 2 вниз 1 влево

    if (i + 2 < 8 && j - 1 >= 0) {

    	console.log(chess[i+2][j-1]);
    	result.push(chess[i+2][j-1]);

    // 1 вниз 2 вправо
    
    }
    if (i + 1 < 8 && j + 2 < 8) {
       
        console.log(chess[i+1][j+2]);
        result.push(chess[i+1][j+2]);

    // 1 вверх 2 вправо

    }
    if (i - 1 >= 0 && j + 2 < 8) {
       
       console.log(chess[i-1][j+2]);
       result.push(chess[i-1][j+2]);

    // 2 вверх 1 вправо

    }
    if (i - 2 >= 0 && j + 1 < 8) {
       
       console.log(chess[i-2][j+1]);
       result.push(chess[i-2][j+1]);

    // 2 вверх 1 влево

    }
    if (i - 2 >= 0 && j - 1 >= 0) {
        
    	console.log(chess[i-2][j-1]);
    	result.push(chess[i-2][j-1]);

    // 1 вниз 2 влево
        
    }
    if (i + 1 < 8 && j - 2 >= 0) {

    	console.log(chess[i+1][j-2]);
    	result.push(chess[i+1][j-2]);

    // 1 вверх 2 влево
        
    }
    if (i - 1 >= 0 && j - 2 >= 0) {
        
    	console.log(chess[i-1][j-2]);
    	result.push(chess[i-1][j-2]);
        
    }
}

/* Создаем функцию по принятию значения от пользователя,
   
   проверяем есть ли данное значение в массиве,
   
   выводим резудьтат пользователю */


let a = ' ';

function find(i) {
    
    a = document.getElementById("place").value;

	console.log(a);

	for(var i = 0; i < chess.length; i++){
    	for(var j = 0; j < chess.length; j++){
       	    if (a == chess[i][j]){
       	    	a = chess[i][j];
       	    	
       	    	console.log(a, i, j);

       	    	setPlace(i,j);               

       	    	alert("Результат:" + result) 

       	    	result = [];


       	    }
        }

    }
}
