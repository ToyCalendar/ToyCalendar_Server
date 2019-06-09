import * as config from "../config/mysql";
import mysql from "mysql";

export class MySQL {
  connection: mysql.Connection;

  private static instance: MySQL;

  static getInstance(): MySQL {
    if (!MySQL.instance) {
      MySQL.instance = new MySQL();
    }

    return MySQL.instance;
  }

  constructor() {
    this.connection = mysql.createConnection({
      host: config.config.mysql_dev.host,
      user: config.config.mysql_dev.username,
      password: config.config.mysql_dev.password,
      database: config.config.mysql_dev.database
    });
  }

  connect = async () => {
    try {
      await this.connection.connect();
    } catch {
      console.error("MySQL Connection Error");
    }
  };

  dispose = async () => {
    await this.connection.end();
  };

  requestQuery = async (
    query: string,
    callback: (err: any | null, result?: any | null) => void
  ) => {
    try {
      await this.connection.query(query, (err, result) => {
        if (err) {
          return callback(err);
        }
        callback(null, result);
      });
      return callback;
    } catch (err) {
      await this.connection.rollback();
      console.error("Query Error");
      return false;
    }
  };
}
