function drawTable(nrows, ncols) {

   let container = document.getElementById("container");
   let tabel = document.createElement("table");
   for (let i = 0; i < nrows; i++){
      let row = document.createElement("tr");
      row.id = `row${i}`;
      tabel.appendChild(row);
      for (let j = 0; j < ncols; j++){
         let capsula = document.createElement("td");
         row.appendChild(capsula);
         capsula.className = `r${i} c${j}`
      }
   }
   container.appendChild(tabel);

}

function colorCol(column, color) {
   let coloana = document.getElementsByClassName(`c${column}`);
   let coloana_colorata = Array.from(coloana);
   coloana_colorata.forEach(element => {
      element.style.backgroundColor = color;
   })
}

function colorRow(row, color) {
   let rand= document.getElementsByClassName(`r${row}`);
   let rand_colorat = Array.from(rand);
   rand_colorat.forEach(element => {
      element.style.backgroundColor = color;
   });
}

function rainbow(target, size) {
   let colors = ["rgb(255, 0, 0)", "rgb(255, 154, 0)", "rgb(240, 240, 0)", "rgb(79, 220, 74)", "rgb(63, 218, 216)", "rgb(47, 201, 226)", "rgb(28, 127, 238)", "rgb(95, 21, 242)", "rgb(186, 12, 248)", "rgb(251, 7, 217)"];
   let numarCulori = colors.length;
   let dimensiuneCuloare = Math.floor(size/numarCulori);
   let rest = size % numarCulori;
   let direction;
   if (target == "rows"){
      direction = "c";
   }else{
      direction = "r";
   }
   let counter = 0;
   let culoare = 0;
   let check = 0;

   for(let i = 0; i < size; i++){
      if (direction == "r"){
         colorRow(i, colors[culoare]);

      }
      else if(direction == "c"){
         colorCol(i, colors[culoare]);
      }
      counter++;
      if(counter % dimensiuneCuloare == 0 && rest == 0){
         culoare++;
      }
      else if (counter % dimensiuneCuloare == 0 && rest != 0 ){
         if (check == 0){
            check++;
         }
      }
      else if (check == 1){
         check = 0;
         culoare++;
         counter--;
      }

   }
}

function getNthChild(element, n) {
   let x= element.childNodes;
   let copii = Array.from(x);
   return copii[n-1];
};

function drawPixel(row, col, color) {	

   let celula = document.getElementsByClassName(`r${row} c${col}`);
   let cell = celula[0];
   cell.style.backgroundColor = color;
}

function drawLine(r1, c1, r2, c2, color) {
   let linieMaxima = Math.max(r1,r2);
   let linieMinima =  Math.min(r1, r2);
   let coloanaMaxima = (() => {
      if(linieMaxima == r1){
         return c1;
      }else{
         return c2;
      }
   })()
   let coloanaMinima = c1+c2-coloanaMaxima;
   let check = (() => {
      if(c1 == c2){
         return 2;
      }
      else if(coloanaMaxima < Math.max(c1,c2)){
         return 1;
      }else{
         return 0;
      }
   })()
   while(((r1 != r2) && (linieMinima < linieMaxima && linieMaxima > 0)) || coloanaMinima != coloanaMaxima){
      drawPixel(linieMaxima, coloanaMaxima, color);
      if (r1 != r2 && linieMaxima > linieMinima && linieMaxima > 0){
         linieMaxima--;
      }
      if(coloanaMaxima != coloanaMinima){
         if (check == 1){
            coloanaMaxima++;
         }else{
            coloanaMaxima--;
         }
      }
   }

   if(check != 2 || r1 != r2){
      drawPixel(linieMaxima, coloanaMaxima, color);
   }
}

function drawRect(r1, c1, r2, c2, color) {
   while(r1 <= r2){
      drawLine(r1, c1, r1, c2, color);
      r1++;
      
   }


}

function drawPixelExt(row, col, color) {
/*
   8. Colorați celula de la linia 'row' și coloana 'col' cu culoarea 'color'.
   Dacă celula nu există, extindeți tabla de desenat în mod corespunzător.
*/
   let x = document.getElementsByClassName(`r${row} c${col}`);
   let i = 0;
   // if(x.length == 0){
   //    let randuri = document.getElementsByClassName("c0");
   //    let coloane = document.getElementsByClassName("r0");
   //    var numarRanduri = randuri.length;
   //    var numarColoane = coloane.length;
   // }else{
   //    drawPixel(row,col,color);
   //    return ;
   // }
   // let tabel = document.querySelector("table");
   // let counterRanduri = row;
   // let counterColoane = col;
   // let check = 0;
   // for (let i = numarRanduri - 1; i < row; i++ ){
   //    check = 1;
   //    let rand = document.createElement("tr");
   //    rand.id = `row${i}`;
   //    tabel.appendChild(rand);
   //    for (let j = 0; j < col; j++){
   //       let celula = document.createElement("td");
   //       celula.classList = `r{i} c{j}`;
   //       rand.appendChild(celula);
   //    }
   // }
   // if (check == 0){
   //    for(let j = numarColoane - 1; j < col; j++){
   //       let celula = document.createElement("td");
   //       celula.classList = `r{row} c{j}`;
   //       rand.appendChild(celula);
   //       drawPixel(row, j, color);
   //    }     
   // }
   let rand = document.getElementsByClassName("r0");
   let coloana = document.getElementsByClassName("c0");
   let numarColoane = coloana.length;
   let numarRanduri = rand.length;
   let tabel = document.querySelector("table");
   for(let i = 0; i < row; i++){ 
      console.log(i);
      if(i < numarRanduri){
         let rand = document.getElementById(`row${i}`);
         for (let j = numarColoane; j < col; j++){
            let cel = document.createElement("td");
            cel.classList = `r${i} c${j}`;
            rand.appendChild(cel);
         }
      }
      else{
         let rand = document.createElement("tr");
         rand.id = `row${i}`;
         tabel.appendChild(rand);
         for (let j = 0; j < col; j++){
            let cel = document.createElement("td");
            cel.classList = `r${i} c${j}`;
            rand.appendChild(cel);
         }
      }
   }
   drawPixel(row-1,col-1,color);
}

function colorMixer(colorA, colorB, amount){
   let cA = colorA * (1 - amount);
   let cB = colorB * (amount);
   return parseInt(cA + cB);
}

function drawPixelAmount(row, col, color, amount) {
   /* 
   9. Colorați celula la linia 'row' și coloana 'col' cu culoarea 'color'
   în funcție de ponderea 'amount' primită ca argument (valoare între 0 și 1). 
   Dacă 'amount' are valoarea:
   1, atunci celula va fi colorată cu 'color'
   0, atunci celula își va păstra culoarea inițială
   pentru orice altă valoare, culoarea inițială și cea dată de argumentul 
   'color' vor fi amestecate. De exemplu, dacă ponderea este 0.5, atunci 
   culoarea inițială și cea nouă vor fi amestecate în proporții egale (50%). 
   */

   /*   
   Hint 1: folosiți funcția colorMixer de mai sus.

   Hint 2: pentru un argument 'color' de forma 'rgb(x,y,z)' puteți folosi
   let newColorArray = color.match(/\d+/g); 
   pentru a obține un Array cu trei elemente, corespunzătoare valorilor
   asociate celor trei culori - newColorArray = [x, y, z]
   
   Hint 3: pentru a afla culoarea de fundal a unui element puteți folosi
   metoda getComputedStyle(element). Accesând proprietatea backgroundColor 
   a obiectului întors, veți obține un string de forma 'rgb(x,y,z)'.
   */
}

function delRow(row) {
/*
   10. Ștergeți linia cu numărul 'row' din tabla de desenat.
*/
}

function delCol(col) {
/*
   10. Ștergeți coloana cu numărul 'col' din tabla de desenat.
*/
}

function shiftRow(row, pos) {
/*
   11. Aplicați o permutare circulară la dreapta cu 'pos' poziții a
   elementelor de pe linia cu numărul 'row' din tabla de desenat. 
*/
}

function jumble() {
/*
   12. Folosiți funcția 'shiftRow' pentru a aplica o permutare circulară
   cu un număr aleator de poziții fiecărei linii din tabla de desenat.
*/
}

function transpose() {
/*
   13. Transformați tabla de desenat în transpusa ei.
*/
}

function flip(element) {
/*
   14. Inversați ordinea copiilor obiectului DOM 'element' primit ca argument.
*/
}

function mirror() {
/*
   15. Oglindiți pe orizontală tabla de desenat: luați jumătatea stângă a tablei, 
   aplicați-i o transformare flip și copiați-o în partea dreaptă a tablei.
*/
}

function smear(row, col, amount) {
/*
   16. Întindeți culoarea unei celule de pe linia 'row' și coloana 'col' în celulele
   învecinate la dreapta, conform ponderii date de 'amount' (valoare între 0 și 1).
   Cu colorarea fiecărei celule la dreapta, valoarea ponderii se înjumătățește. 
   Hint: folosiți funcția 'drawPixelAmount'.
*/
}


window.onload = function(){
   const rows = 35;
   const cols = 35;	
   drawTable(rows, cols);
   colorCol(12, "blue");
   colorRow(34, "pink");
   rainbow("rows", cols);
   let element = document.getElementById("row0");
   console.log(getNthChild(element, 7));
   drawPixel(0, 1, "pink");
   drawRect(0,0, 6,5, "pink");
   drawPixelExt(40, 40, "red");
}


