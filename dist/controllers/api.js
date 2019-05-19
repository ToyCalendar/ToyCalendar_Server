"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fbgraph_1 = __importDefault(require("fbgraph"));
const calendar = __importStar(require("../dump/calendar"));
const secretInfo = __importStar(require("../dump/secretInfo"));
/**
 * GET /api
 * List of API examples.
 */
exports.getApi = (req, res) => {
    res.render("api/index", {
        title: "API Examples"
    });
};
/**
 * GET /api/facebook
 * Facebook API example.
 */
exports.getFacebook = (req, res, next) => {
    const token = req.user.tokens.find((token) => token.kind === "facebook");
    fbgraph_1.default.setAccessToken(token.accessToken);
    fbgraph_1.default.get(`${req.user.facebook}?fields=id,name,email,first_name,last_name,gender,link,locale,timezone`, (err, results) => {
        if (err) {
            return next(err);
        }
        res.render("api/facebook", {
            title: "Facebook API",
            profile: results
        });
    });
};
exports.readCalendarInfoList = (req, res, next) => {
    res.send(calendar.calendar);
};
exports.readSecretInfo = (req, res, next) => {
    res.send(secretInfo.secretInfo);
};
//# sourceMappingURL=api.js.map