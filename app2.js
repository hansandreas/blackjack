console.log("test")


'function 



class card {
    value: 
    type:
    img:
}

class deck inherits card {
    deck = []
    types = ["h", "d", "k", "s"]
    deckImageValues = ["J", "Q", "K", "A"]
    constructor(card){
        for (i=1; i<=10; i++){
            card.value = i
            for (i=0; i<4; i++){
                card.type = types[i]
                deck.append(card);
            }
        }
        for (i=0; i<4; i++){
            card.value = this.deckImageValues[i]
            for (i=0; i<4; i++){
                card.type = types[i]
                deck.append(card);
            }

        }
    }
    return deck    
}

function dealCards



function dealCard {
    CardPicked = floor(math.random()*deck.length)
    return deck[cardPickedIndex]
}