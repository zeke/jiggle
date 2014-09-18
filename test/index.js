var test = require("tap").test
var jiggle = require("..")

test("jiggle", function (t) {
  var arr = "abcdefghijklmnopqrstuvwxyz".split("")

  t.ok(jiggle(arr), "accepts arrays as input")
  t.ok(Array.isArray(jiggle(arr)), "returns an array")

  var orig = [1,2,3,4,5,6,7,8]
  var dupe = jiggle(orig)
  t.notEqual(orig, dupe, "returns a copy of the original array")

  t.equal(jiggle(arr).length, arr.length, "preserves length of original array")
  t.deepEqual(jiggle(arr).sort(), arr.sort(), "preserves content of original array")

  var origString = "hallelujah"
  var dupeString = jiggle(origString)
  t.notEqual(origString, dupeString, "returns a copy of the original string")

  t.notEqual(jiggle("thingamabob"), "thingamabob", "accepts strings as input")
  t.type(jiggle("thing"), "string", "turns strings back into strings after jiggling them")

  t.end()
})
