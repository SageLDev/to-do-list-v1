
//you can also use exports.getDate as a shortcut
module.exports.getDate = function(){
  let date = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  return date.toLocaleDateString("en-US", options);
}

//you can also use exports.getDay as a shortcut
module.exports.getDay = function(){
  let date = new Date();
  let options = {
    weekday: "long",
  };
  return date.toLocaleDateString("en-US", options);
}
