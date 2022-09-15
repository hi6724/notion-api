//express 모듈 불러오기
import express from "express";
import cors from "cors";

import router from "./router/router";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(8800, () => console.log("http://localhost:8800"));
