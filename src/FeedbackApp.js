const feedBack = require('../feedback.json');

class FeedbackApp {
  constructor() {
  }

  formatFeedback(obj) {    
    let newStatement = '';
    let stars = '';
    let counter = obj.rating / 20;
   // counter allows us to vet out which stars are being created
    while (counter >= 1) {
          stars += '★';
          counter -= 1;
    }

    if (Math.round(counter) === 1) {
     stars += '½';
    } 
  
    let day = obj.date;
    let ts = new Date(day);
    let newDate = ts.toLocaleDateString();
  
    newStatement = `${obj.word}: ${obj.comment} ${stars} (${newDate})`;
//Date remover if larger than 80 chars
    if ((newStatement.length) > 80) {
        newStatement = `${obj.word}: ${obj.comment} ${stars}`
    } else {
      if (obj.rating === undefined) {
        newStatement = `${obj.word}: ${obj.comment} (${newDate})`

      }

      return newStatement;
    }
    let newComment = obj.comment;

    if (newStatement.length > 80) {

    // if more than 80 chars without date remove chars from comment until under
    //loop through comment until under number,  
      let statementLength = (newStatement.length);
      let counter = statementLength - 80;
    
      newComment = newComment.split('');
      while (counter > 0) {
        newComment.pop();
        counter -= 1;
      }
      // needs to be 77 not 80 chars in order to include ...
      counter += 3;
      while (counter > 0) {
        newComment.pop();
        counter -= 1;
      }

        newComment = newComment.join('')
        newComment += "..."
        newStatement = `${obj.word}: ${newComment} ${stars}`
        return newStatement;

      }
        return newStatement;
    }
  }
  const obj = {
    "word": "slubber",
    "comment": "Slubber sounds like slobber. So gross! More pretty words, please!",
    "date": "22 Aug 2019 01:20:00 PST",
    "rating": 15,
  }

  let app = new FeedbackApp(obj) 

  module.exports = FeedbackApp;

