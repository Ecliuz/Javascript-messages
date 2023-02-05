function quotesGenerator() {
    let words = ['fire', 'lit', 'crazy good'];
    let words2 =  ['no time to waste', 'something you can always do', 'a great person inside you'];
    let words3 = ['beautiful', 'important', 'everything'];
    
    const randomNumber = num => {
        var random = Math.floor(Math.random() * num);
        return random;
    }
        console.log('You\'ve made it ' + words[randomNumber(words.length)]);
        console.log('There\'s ' + words2[randomNumber(words2.length)]);
        console.log('You\'are ' + words3[randomNumber(words3.length)])      
    }

console.log(quotesGenerator());