"use strict";

import async from "async";
import request from "request";
import graph from "fbgraph";
import { Response, Request, NextFunction } from "express";
import * as calendar from "../dump/calendar";
import * as secretInfo from "../dump/secretInfo";
import * as moment from "moment";
require("moment-timezone");

import "../util/mysql";

import express from "express";
import { MySQL } from "../util/mysql";
import { awaitExpression } from "babel-types";

const mysql = MySQL.getInstance();

export const selectAllSecretInfo = (
  callback: (err: any, result: any) => void
) => {
  return mysql.requestQuery(async callback => {
    return callback;
  }, "select * from secrection");
};

/**
 * GET /api
 * List of API examples.
 */
export let getApi = (req: Request, res: Response) => {
  res.render("api/index", {
    title: "API Examples"
  });
};

/**
 * GET /api/facebook
 * Facebook API example.
 */
export let getFacebook = (req: Request, res: Response, next: NextFunction) => {
  const token = req.user.tokens.find((token: any) => token.kind === "facebook");
  graph.setAccessToken(token.accessToken);
  graph.get(
    `${
      req.user.facebook
    }?fields=id,name,email,first_name,last_name,gender,link,locale,timezone`,
    (err: Error, results: graph.FacebookUser) => {
      if (err) {
        return next(err);
      }
      res.render("api/facebook", {
        title: "Facebook API",
        profile: results
      });
    }
  );
};

export const readCalendarInfoList = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send(calendar.calendar);
};

export const readSecretInfo = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  mysql.requestQuery(async (err, result) => {
    if (err) {
      res.send({
        code: 400,
        err: err
      });
      await res.end();
    }
    await res.send({
      code: 200,
      contents: result
    });
    await res.end();
  }, "select * from secrection");
};

export const saveMenstruation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.user.id;

  // 생리 기간
  const startMenstruationDate: Date =
    req.body.menstruation.startMenstruationDate || null;
  const endMenstruationDate: Date =
    req.body.menstruation.endMenstruationDate || null;

  // 평균 생리 기간
  // 평균 생리 기간을 사용할 경우 start나 end는 null 들어오기 때문에 5로 저장한다.
  const everageTermYn: boolean = req.body.menstruation.everageTermYn; // 평균 생리 기간 = 5
  const everageTermStart: Date = req.body.menstruation.everageTermStart || 5;
  const everageTermEnd: Date = req.body.menstruation.everageTermEnd || 5;

  // 평균 생리 주기
  // 평균 생리 주기를 사용할 경우 start나 end는 null 들어오기 때문에 28로 저장한다.
  const everageCycleYn: boolean = req.body.menstruation.everageCycleYn; // 평균 생리 주기 28
  const everageCycleStart: Date = req.body.menstruation.everageCycleStart || 28;
  const everageCycleEnd: Date = req.body.menstruation.everageCycleEnd || 28;

  const query =
    "insert into menstruationMethod (userId, everageTermYn, everageTermStart, everageTermEnd, everageCycleYn, everageCycleStart, everageCycleEnd) values(?);" +
    "insert into menstruation (userId, startmenstruationDate, endMenstruationDate) values(?);";

  // const query = `begin;insert into menstruation (userId, startMenstruationDate, endMenstruationDate) values (${id}, ${startMenstruationDate}, ${endMenstruationDate});insert into menstruationMethod (userId, everageTermYn, everageTermStart, everageTermEnd, everageCycleYn, everageCycleStart, everageCycleEnd) values(${id},  ${everageTermYn}, ${everageTermStart}, ${everageTermEnd}, ${everageCycleYn}, ${everageCycleStart}, ${everageCycleEnd});commit;`;

  mysql.requestQuery(
    async (err, result) => {
      if (err) {
        await res.send({
          code: 400,
          err: err
        });
        await res.end();
      }

      await res.send({
        code: 200,
        centents: result // TODO 생리주기 예측 API 반환
      });
      await res.end();
    },
    query,
    [
      [
        id,
        everageTermYn,
        everageTermStart,
        everageTermEnd,
        everageCycleYn,
        everageCycleStart,
        everageCycleEnd
      ],
      [
        id,
        startMenstruationDate,
        endMenstruationDate
      ]
    ]
  );
};
