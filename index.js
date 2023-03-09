var express = require("express");
var app = express();
var ytdl = require("ytdl-core");

app.listen("4000", function () {
  console.log("listening on 4000");
});

app.get("/download", function (req, res) {
  console.log("Download " + link);
  const link = req.query.url;
  const format = req.query.format;
  const quality = req.query.quality;

  const video = ytdl(link, {
    format: format,
    quality: quality,
    filter: "audioandvideo",
  });
  video.pipe(res);
});
