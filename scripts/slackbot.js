module.exports = function (robot) {

/*What should my bot do?
Loops though gifs and sends out a puppy
Only responds to /puppy time/

/pup fact/
/pup bark/
- Respond woof woof

*/

  robot.hear(/badger!/, function (res) {
      return res.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS");
    });

  robot.respond(/talk!/, function (res) {
        return res.send("WOOF WOOF");
      });
};
