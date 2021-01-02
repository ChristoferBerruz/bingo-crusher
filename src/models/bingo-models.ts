export class Card{
    private cardNumber:number;
    private cardGame:number[][];

    public constructor(cardNumber:number, cardGame:number[][]){
        this.cardNumber = cardNumber;

        if(cardGame.length !== 5 || cardGame[0].length !== 5){
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
        
        if(cardGame.length !== 5 || cardGame[0].length !== 5){
            throw new Error("A card game must be a 5x5 grid.");
        }

        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                this.cardGame[i][j] = cardGame[i][j];
            }
        }
    }

    public static defaultCard(){
        let cardGame:number[][] = [];
        for(let i = 0; i < 5; i++){
            cardGame[i] = [];
            for(let j = 0; j < 5; j++){
                cardGame[i][j] = 1;
            }
        }
        return new Card(0, cardGame);
    }
}


export class Game{

    // A pattern indicates which positions are valid
    private pattern:boolean[][];

    /**
     * A default game is a game where all positions are valid
     */
    public static defaultGame(){
        let pattern:boolean[][] = [];

        for(let i = 0; i < 5; i++){
            pattern[i] = [];
            for(let j = 0; j < 5; j++){
                pattern[i][j] = true;
            }
        }

        return new Game(pattern);
    }

    /**
     * Constructor
     * @param pattern The pattern for valid positions in the game
     */
    public constructor(pattern:boolean[][]){
        if(pattern.length !== 5 || pattern[0].length !== 5){
            throw new Error("A pattern must be a 5x5 grid.");
        }

        this.pattern = [];
        for(let i = 0; i < 5; i++){
            this.pattern[i] = [];
            for(let j = 0; j < 5; j++){
                this.pattern[i][j] = pattern[i][j];
            }
        }
    }
}