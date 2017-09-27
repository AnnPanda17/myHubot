module.exports = function (robot) {

  /*What should my bot do?
Loops though gifs and sends out a puppy
Only responds to /puppy time/

/pup fact/
/pup bark/
- Respond woof woof

*/

  robot.hear(/treat/, function (msg) {
      msg.send('https://media.giphy.com/media/3o6Zt7x8a6UtRs4JgI/giphy.gif');
    });

  robot.respond(/talk!/, function (msg) {
        msg.send('WOOF WOOF');
      });

  robot.respond(/Who are you?|Who is a good boy?|Who's a good boy?/, function (msg) {
            msg.reply('I am a good doggo');
          });

  // where can i get a doge? google map shelters based on computer location
};
