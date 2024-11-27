function Carte(autor, nume){
    this.autor = autor;  
    this.nume = nume;
}

var librarie = {
    carti: [],
    adaugare: function(){
        let denumire_carte = prompt("Care este numele cartii? ");
        let autor_carte = prompt("Care este autorul cartii?");
        carte = new Carte(autor_carte, denumire_carte);
        this.carti.push(carte);
    },
    gasire: function(){
        let autor_carte= prompt("Care este autorul cartii?");
        let carti_cautate = this.carti.filter(carte => carte.autor == autor_carte);
        console.log(carti.nume);
    }
}

var x = prompt("ce vreti sa faceti? ");
while(x != "0"){       
    if (x == "1"){
        librarie.adaugare();
    }
    if(x == "2"){
        console.log("merge!")
        librarie.gasire()
    }
    x = prompt("Ce vreti sa faceti? ");
}