var drivelist = require("drivelist");
var filePreview = require("filepreview-es6");
var path = require("path");
let generatePreview = async (outgoingPath, previewOptions) => {
  return new Promise(async (resolve, reject) => {
    fileToPreview = [];
    const drivers = await drivelist.list();
    const driver = drivers.find(driver => driver.isRemovable === true);
    var options = {
      width: previewOptions.width,
      height: previewOptions.height,
      quality: previewOptions.quality,
      background: "#fff",
      pdf: true,
      keepAspect: true,
      pdf_path: path.resolve("public", "documents")
    };
    const inPath = outgoingPath;
    var name = outgoingPath.split("/")[outgoingPath.split("/").length - 1];
    name = previewOptions.isDetailed
      ? name.split(".")[0] + "_detailed"
      : name.split(".")[0];
    const outPath = path.join(
      __dirname,
      "..",
      "public",
      "images",
      name + ".jpg"
    );
    filePreview
      .generateAsync(inPath, outPath, options)
      .then(val => {
        resolve({ success: true, outPath: "private/images/" + name + ".jpg" });
      })
      .catch(err => {
        console.log(err);
        resolve({ success: false });
      });
  }).catch(err => console.log(err));
};
module.exports = {
  generatePreview: generatePreview
};
