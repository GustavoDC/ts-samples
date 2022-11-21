/**
 * Strategy pattern
 * 
 * Sample: the strategy pattern applied to a English practice app. 
 * The app has two kinds of excercises: translate and listen. The app must be extensible 
 * and allow new types of excercises to be added in the future.
 * Each type of excercise has a different way of displaying itself, and the behaviour is 
 * managed by separated classes referenced by a property of the Excercise class. 
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

abstract class Excercise
{
    protected displayBehaviour: DisplayBehaviour;

    public remove(): void
    {
        console.log("I removed the excercise.");
    }

    public doDisplay(): void
    {
        this.displayBehaviour.display();
    }
}   

class TranslateExcercise extends Excercise
{
    constructor()
    {
        super();       
        this.displayBehaviour = new PrintDisplayBehaviour();
    }
}

class ListenExcercise extends Excercise
{
    constructor()
    {
        super();
        this.displayBehaviour = new PlayButtonDisplayBehaviour();
    }
}

// Client code:

let translationExcercise = new TranslateExcercise();
translationExcercise.doDisplay();

let listeningExcercise = new ListenExcercise();
listeningExcercise.doDisplay();

/*

Output:

I print a text
I show a play button.

*/