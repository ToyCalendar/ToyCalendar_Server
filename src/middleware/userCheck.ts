import { NextFunction, Request, Response } from "express";
import { MySQL } from "../util/mysql";

const mysql = MySQL.getInstance();

const snsTypes = ["kakaoID", "googleID", "facebookID", "lineID"];

export const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const key: string = await String(req.headers["auth"]);
  const snsType: number = await Number(req.headers["sns"]);

  if (key === null || snsType === null) {
    res.send({
      code: 400,
      err: "header is empty"
    });
  }

  const query = `select * from user where ${snsTypes[snsType]} = ${key}`;

  await mysql.requestQuery(async (err, result) => {
    if (err) {
      res.send({
        code: 400,
        err: err.code
      });
      res.end();
    }

    if (result.length > 0) {
      req.user = result[0];
      next();
    } else {
      res.send({
        code: 500,
        err: "유효하지 않은 ID 입니다."
      });
      res.end();
    }
  }, query);
};

export const readUser = (req: Request, res: Response, next: NextFunction) => {
  res.send({
    initYn: req.user.initYn,
    partnerYn: req.user.partnerYn
  });
  res.end();
};
