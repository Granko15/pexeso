function Shuffle(){
    return 0.5 - Math.random();
}

function Generuj(){
    var str = '';
    animatori = ['anicka.jpg','evicka.jpg','jakub.jpg','janka.jpg','janko.jpg','kaplan.jpg','karolina.jpg','maria.jpg','mato.jpg','matus.jpg','miki.jpg','patrik.jpg','saska.jpg','sestricka.jpg','sima.jpg','tono-miska.jpg','anicka1.jpg','evicka1.jpg','jakub1.jpg','janka1.jpg','janko1.jpg','kaplan1.jpg','karolina1.jpg','maria1.jpg','mato1.jpg','matus1.jpg','miki1.jpg','patrik1.jpg','saska1.jpg','sestricka1.jpg','sima1.jpg','tono-miska1.jpg']
    animatori.sort(Shuffle);

    for (var i = 0; i < animatori.length; i++){
        str += `<img class="karta" id=${animatori[i]} src="obrazky/stupavacik-odzadu.png" alt="${animatori[i]}" onclick="flipCard(this)">`;
    }
    animatori.sort(Shuffle);

    document.getElementById('pexeso-board').innerHTML = str;
}

function hasNumber(myString) {
    return /\d/.test(myString);
}

var flippedCards = [];

function flipCard(img){
    flippedCards.push(img.id);
    document.getElementById(img.id).style.pointerEvents = 'none';
    img.src = `obrazky/${img.alt}`;
    var len = flippedCards.length;
    if (len == 2){
        console.log(flippedCards)
        var first = flippedCards[0].slice(0,-4);
        var second = flippedCards[1].slice(0,-4);
        if (hasNumber(first)){
            first = flippedCards[0].slice(0,-5);
        } 
        if (hasNumber(second)){
            second = flippedCards[1].slice(0,-5);
        }
        if(first != second){
            document.getElementById('hlavne').style.pointerEvents = 'none';
            setTimeout(function(){
            document.getElementById(flippedCards[0]).src = "obrazky/stupavacik-odzadu.png"
            document.getElementById(flippedCards[1]).src = "obrazky/stupavacik-odzadu.png"
            document.getElementById(flippedCards[0]).style.pointerEvents = 'auto';
            document.getElementById(flippedCards[1]).style.pointerEvents = 'auto';
            flippedCards = []
            document.getElementById('hlavne').style.pointerEvents = 'auto';}
            ,1100);
        }else{
            flippedCards = [];
        }
        
    }

}
