"use strict";

var properties = require("../package.json");
var generatePreviews = require("../service/generatePreviews");
var path = require("path");
var fs = require("fs");

var controllers = {
  about: function(req, res) {
    var aboutInfo = {
      name: properties.name,
      version: properties.version
    };
    res.json(aboutInfo);
  },
  generatePreview: async function(req, res) {
    var success = await generatePreviews.generatePreview(
      req.body.path,
      req.body.options
    );
    if (success.success) {
      res.send({ success: true, outpath: success.outPath });
    } else {
      res.status(404).send({ success: false });
    }
  },
  copyPDF: async function(req, res) {
    if (
      fs.existsSync(
        "./public/documents/" + req.body.name.split(".")[0] + ".pdf"
      )
    ) {
      res.send({
        success: true,
        outpath: "private/documents/" + req.body.name.split(".")[0] + ".pdf"
      });
    } else {
      const success = await fs.copyFile(
        req.body.path,
        "./public/documents/" + req.body.name.split(".")[0] + ".pdf",
        err => {
          if (err) console.log(err);
          else
            res.send({
              success: true,
              outpath:
                "private/documents/" + req.body.name.split(".")[0] + ".pdf"
            });
        }
      );
    }
  },
  clearPreviews: function(req, res) {
    const directory = path.join(__dirname, "..", "public", "images");
    const fileDirectory = path.join(__dirname, "..", "public", "documents");
    fs.readdir(fileDirectory, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        fs.unlink(path.join(fileDirectory, file), err => {
          if (err) throw err;
        });
      }
    });
    fs.readdir(directory, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        fs.unlink(path.join(directory, file), err => {
          if (err) throw err;
        });
      }
    });
    res.json({ success: true });
  }
};

module.exports = controllers;
