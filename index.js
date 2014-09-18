var jiggle = module.exports = function(list) {
  var dupe = list.slice(0)

  if (typeof list === "string")
    dupe = dupe.split("")

  for (var i=0; i<dupe.length-1; i++) {
    if (Math.random() > 0.5) {
      var a = dupe[i]
      var b = dupe[i+1]
      dupe[i] = b
      dupe[i+1] = a
    }
  }

  if (typeof list === "string")
    dupe = dupe.join("")

  return dupe
}
