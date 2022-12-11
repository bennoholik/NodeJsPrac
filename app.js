const express = require("express");
const app = express();
const port = 3000;
const goodsRouter = require("./routes/goods.js");

const connect = require("./schemas");
connect();

app.use(express.json());

// app.post("/", (req, res) => {
//   console.log(req.body);
//   res.send("post method work!");
// });

// //메인 루트에서 들어왔을때 이거실행
// app.get("/", (req, res) => {
//   console.log(req.query);
//   const abc = { abc: "value123", name: "name" };

//   res.json(abc);
// });
// app.get("/:id", (req, res) => {
//   console.log(req.params);
//   res.send(":id uri로 정상반환");
// });

// 가지고온 router를 통해 /api로 들어온거 모두 router에서 실행
app.use("/api", [goodsRouter]);

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
