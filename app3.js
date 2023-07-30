class Card {
    constructor(suit,rank){
        this.rank = rank
        this.suit = suit
    }

    getRank(){
        return this.rank
    }

    getSuit(){
        return this.suit
    }

    toString(){
        return this.rank + " of " + this.suit
    }

    getCardValue(){
        if (this.rank === "Ace"){
            return 11
        }
        else if (this.rank === "Jack" || this.rank === "Queen" || this.rank === "King"){
            return 10
        }
        else {
            return parseInt(this.rank)
        }
    }
}


class Deck {
    constructor() {
        this.deck = createDeck()
    }

    createDeck() {
        const deck = []
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9,', '10', 'Jack', 'Queen', 'King', 'Ace']
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']

        for (const suit of suits) {
            for (const rank of ranks) {
                const card = new Card(rank, suit)
                this.deck.push(Card)
            }
        }
        return this.deck
    }

    getDeck() {
        return Deck.createDeck()
    }

}
const deck = new Deck()
console.log(deck.getDeck())

