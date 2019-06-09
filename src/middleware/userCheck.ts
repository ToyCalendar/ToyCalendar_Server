import { NextFunction, Request, Response } from "express";
import { MySQL } from "../util/mysql";

const mysql = new MySQL();

const snsTypes = ["kakaoID", "googleID", "facebookID", "lineID"];

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const key: string = String(req.headers["auth"]);
  const snsType: number = Number(req.headers["sns"]);

  console.log("key", key, "snsType", snsType);

  const query = `select * from user where ${snsTypes[snsType]} = ${key}`;

  mysql.connect();
  mysql.requestQuery(query, async (err, result) => {
    if (err) {
      res.send({
        code: 400,
        err: err
      });
    }
  });
  mysql.dispose();
  next();
};
