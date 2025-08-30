import promp from "./promp.js";
import data from "./data.js";

/* Get one random word from data */
const word = data[Math.floor(Math.random() * data.length)];
const maxAttempts = "HANGMAN".length;

async function runGame(attempt = 0) {
    const answer = await promp(`${word.question} `);

    if (answer.toLowerCase() === word.word) {
        console.log("Congratulations! You've guessed the word correctly.");
        return;
    } else {
        const progress = "HANGMAN".slice(0, attempt + 1);
        console.log(`${progress}`);
        if (attempt + 1 === maxAttempts - 1) {
            console.log(`Hint: ${word.hint}`);
        }
        if (attempt + 1 >= maxAttempts) {
            console.log(`Game over! The word was: ${word.word}`);
            return;
        }
    }

    return runGame(attempt + 1);
}

runGame();