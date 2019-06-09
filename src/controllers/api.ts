"use strict";

import async from "async";
import request from "request";
import graph from "fbgraph";
import { Response, Request, NextFunction } from "express";
import * as calendar from "../dump/calendar";
import * as secretInfo from "../dump/secretInfo";

import "../util/mysql";

import express from "express";
import { MySQL } from "../util/mysql";

const mysql = new MySQL();

export const selectAllSecretInfo = (
  callback: (err: any, result: any) => void
) => {
  return mysql.requestQuery("select * from secrection", async callback => {
    console.log("CALL_BACK", callback);
    return callback;
  });
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
  mysql.connect();
  mysql.requestQuery("select * from secrection", async (err, result) => {
    res.send({
      code: 200,
      contents: result
    });
  });
  mysql.dispose();
};
