const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

let data1 = {
  prevVolumeNo: 24554850,
  prevVolumeAuthorNo: 21293282,
  nextVolumeTitle: "신지혜의 영화와 자동차-분노의 질주  홉스 앤 쇼",
  seriesNo: 220148,
  prevImageUrl:
    "https://post-phinf.pstatic.net/MjAxOTA5MDRfOTAg/MDAxNTY3NTgyOTc2MTgz.nMXir15lDOMa53daE-dZjtiGXcK3qwmphYBEWjEjui0g.wMqIJRjd6BhgPHxndB7tnCuZ-Ulj8pkl0ELGUWaEBMEg.JPEG/ITVuJ8ciu-gA2JlHi0b6L-WMMk98.jpg",
  prevVolumeTitle: "엔진 제어를 장악할 새로운 밸브 기술",
  nextVolumeNo: 24732129,
  nextVolumeAuthorNo: 21293282,
  isNextSeriesVolumeHead: false,
  nextImageUrl:
    "https://post-phinf.pstatic.net/MjAxOTA5MDVfMTE0/MDAxNTY3NjY3MDI1MTUz.saNj4OZL7Lhtd_QWKjbMopYP4Qpoax228IiYoUpZPxog.SvgJNI_-Lc86DFrUOn5p9JVWQmNEXqCSHsHR71MiohIg.JPEG/IeVD1zja-DqbZ3mn4gCa-7DOAS9E.jpg",
  seriesTitle: "칼럼",
  commentCount: 22
};

app.get("/api/naver/01", (req, res) => {
  res.json(data1);
});

app.get("/", (req, res) => {
  res.send("<h1>Helo Mulder 111222aaa</h1>");
});
app.get("/scully", (req, res) => {
  // res.send("<h1>Helo scully</h1>");
  throw new Error("error1 !!!!!");
});

const dbHelper = require("./db_helper.js");

app.get("/sql/insert/:name/:age", (req, res) => {
  let vo = {
    name: req.params["name"],
    age: parseInt(req.params["age"])
  };
  dbHelper.insertData(vo, function(r) {
    res.send(r);
  });
});
app.get("/sql/delete/:name", (req, res) => {
  let vo = {
    name: req.params["name"]
  };
  dbHelper.deleteByName(vo.name, function(r) {
    res.send(r);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server started port=> ${PORT}`);
});
