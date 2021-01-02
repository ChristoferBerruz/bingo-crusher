class BingoCard{
    private cardNumber:number;
    private cardGame:number[][];

    public constructor(cardNumber:number, cardGame:number[][]){
        this.cardNumber = cardNumber;

        if(cardGame.length != 5 || cardGame[0].length != 5){
            throw new Error("A card game must be a 5x5 grid.");
        }

        // Deep copying the array
        this.cardGame = [];
        for(let i = 0; i < 5; i++){
            this.cardGame[i] = [];
            for(let j = 0; j < 5; j++){
                this.cardGame[i][j] = cardGame[i][j];
            }
        }
    }

    public getCardNumber():number{
        return this.cardNumber;
    }

    public getCardGame():number[][]{
        return this.cardGame;
    }

    public setCardGame(cardGame:number[][]){
        
        if(cardGame.length != 5 || cardGame[0].length != 5){
            throw new Error("A card game must be a 5x5 grid.");
        }

        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                this.cardGame[i][j] = cardGame[i][j];
            }
        }
    }
}

export default BingoCard;