"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calendar_1 = require("../models/Calendar");
exports.secretInfo = {
    code: 200,
    message: "성공",
    data: [
        {
            secretCode: Calendar_1.SecretCode.MANY,
            secretName: Calendar_1.SecretName.MANY
        },
        {
            secretCode: Calendar_1.SecretCode.CHEEZE,
            secretName: Calendar_1.SecretName.CHEEZE
        },
        {
            secretCode: Calendar_1.SecretCode.CREAM,
            secretName: Calendar_1.SecretName.CREAM
        },
        {
            secretCode: Calendar_1.SecretCode.DILUTION,
            secretName: Calendar_1.SecretName.DILUTION
        },
        {
            secretCode: Calendar_1.SecretCode.DRY,
            secretName: Calendar_1.SecretName.DRY
        },
        {
            secretCode: Calendar_1.SecretCode.EGG_WHITE,
            secretName: Calendar_1.SecretName.EGG_WHITE
        }
    ]
};
//# sourceMappingURL=secretInfo.js.map