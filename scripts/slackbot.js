module.exports = function (robot) {

  /*What should my bot do?
Loops though gifs and sends out a puppy
Only responds to /puppy time/

/pup fact/
/pup bark/
- Respond woof woof

*/

  robot.hear(/badger/, function (msg) {
      msg.send("Badgers? BADGERS? WE DON\'T NEED NO STINKIN BADGERS");
    });

  robot.respond(/talk!/, function (msg) {
        msg.send("WOOF WOOF");
      });

  robot.respond(/Who are you?!/, function (res) {
            msg.send('WOOF WOOF');
          });
};
