

function createScore(){
    let score = 0;

    return  {
        addPoint(){
            score++
        },
        getScore(){
            return score;
        },
        reset(){
            score = 0
        }
    }


}

const game = createScore();
game.addPoint()
console.log(game.getScore());


function  sumTo(n){
    if(n === 1){
        return 1
    }
    return n + sumTo(n - 1)
}
console.log(sumTo(5));

function repeatText(text, n){
    if(n === 1){
        return text
    }

    return text + repeatText(text, n - 1)
}

console.log(repeatText('ха', 5));

