
class Game{

    // A pattern indicates which positions are valid
    private pattern:boolean[][];

    /**
     * A default game is a game where all positions are valid
     */
    public defaultGame(){
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
        if(pattern.length != 5 || pattern[0].length != 5){
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

export default Game;