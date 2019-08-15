"use strict";

var controller = require("./controller");
var jwtCheck = require("../middleware/jwt_middleware");

module.exports = function(app) {
  app.route("/about").get(controller.about);
  app
    .route("/generatePreview")
    .post(jwtCheck.checkToken, controller.generatePreview);
  app.route("/clear").get(controller.clearPreviews);
  app.route("/copyPDF").post(jwtCheck.checkToken, controller.copyPDF);
};
