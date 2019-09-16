/**
 * MulderController
 *
 * @description :: Server-side logic for managing mulders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  hi: function(req, res) {
    res.send("Hi Mulder !!!");
    // return "Hi Mulder !!!";
  },

  scully: function(req, res) {
    res.view("scully", { name: "scully", data: { age: 20 } });
  },

  xfile: function(req, res) {
    res.view("scully", {
      name: "scully",
      data: { age: 20 },
      layout: "login_layout"
    });
  }
};
