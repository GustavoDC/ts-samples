/**
 * Strategy pattern
 * 
 * Variation of strategy-pattern-01.ts (using constructor)
 * 
 * Sample: the strategy pattern applied to a English practice app. 
 * The app has two kinds of excercises: translate and listen. The app must be extensible 
 * and allow new types of excercises to be added in the future.
 * Each type of excercise has a different way of displaying itself, and the behaviour is 
 * managed by a separated classes referenced by a property of the Excercise class. 
 * 
 * @author: Gustavo Cieslar
 */

interface DisplayBehaviour
{
    display(): void;
}

class PrintDisplayBehaviour implements DisplayBehaviour
{
    public display(): void
    {
        console.log("I print a text");
    }
}

class PlayButtonDisplayBehaviour implements DisplayBehaviour
{
    public display(): void
    {
        console.log("I show a play button.");
    }
}

class Excercise
{
    protected displayBehaviour: DisplayBehaviour;

    constructor (displayBehaviour: DisplayBehaviour)
    {
        this.displayBehaviour = this.displayBehaviour;
    }

    public setDisplayBehaviour(displayBehaviour: DisplayBehaviour)
    {
        this.displayBehaviour = displayBehaviour;
    }

    public remove(): void
    {
        console.log("I removed the excercise.");
    }

    public doDisplay(): void
    {
        this.displayBehaviour.display();
    }
}   

// Client code:

let excercise = new Excercise(new PrintDisplayBehaviour());
excercise.doDisplay();

excercise.setDisplayBehaviour(new PlayButtonDisplayBehaviour());
excercise.doDisplay();


/*

Output:

I print a text
I show a play button.

*/