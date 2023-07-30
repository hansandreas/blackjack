console.log("test av app.js")

let Card = {
    constructor(value, sort, img) {
        this.value = value
        this.sort = sort
        this.img = img
    }
}

//console.log(Card)

class Deck extends Card {
    constructor(value, sort, img){
        super(value, sort, img)
    }

    createDeck = function() {
        let deck = []
        let types = ["h", "d", "k", "s"]
        let deckImageValues = ["J", "Q", "K", "A"]

        for (let i = 1; i<=10; i0++){
            this.value = i
            for (i=0; i<4; i++){
                this.type = types[i]
                //this.img = this.value + types[i]
                deck.push(this.card)
            }
        }
        return deck

    }
}
    

    //console.log("test1")
    //deckImageValues = ["J", "Q", "K", "A"]
    //console.log("test2")

    //construct deck
    //console.log("test3")
    //for (let i = 0; i <= 10; i++) {



let deck = Deck.createDeck()
console.log(Deck)