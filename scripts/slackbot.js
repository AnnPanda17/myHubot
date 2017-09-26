module.exports = function (robot) {

  robot.hear(/badger!/, function (res) {
      return res.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS");
    });
};
