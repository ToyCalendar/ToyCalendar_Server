"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SecretCode;
(function (SecretCode) {
    SecretCode["MANY"] = "MANY";
    SecretCode["DRY"] = "DRY";
    SecretCode["DILUTION"] = "DILUTION";
    SecretCode["EGG_WHITE"] = "EGG_WHITE";
    SecretCode["CREAM"] = "CREAM";
    SecretCode["CHEEZE"] = "CHEEZE";
})(SecretCode = exports.SecretCode || (exports.SecretCode = {}));
var SecretName;
(function (SecretName) {
    SecretName["MANY"] = "\uB9CE\uC74C";
    SecretName["DRY"] = "\uAC74\uC870";
    SecretName["DILUTION"] = "\uBB3D\uC74C";
    SecretName["EGG_WHITE"] = "\uB2EC\uAC40 \uD770\uC790";
    SecretName["CREAM"] = "\uD06C\uB9BC";
    SecretName["CHEEZE"] = "\uCE58\uC988";
})(SecretName = exports.SecretName || (exports.SecretName = {}));
(function (SecretName) {
    const secretNameMap = new Map();
    secretNameMap.set(SecretCode.MANY, SecretName.MANY);
    secretNameMap.set(SecretCode.DRY, SecretName.DRY);
    secretNameMap.set(SecretCode.DILUTION, SecretName.DILUTION);
    secretNameMap.set(SecretCode.EGG_WHITE, SecretName.EGG_WHITE);
    secretNameMap.set(SecretCode.CREAM, SecretName.CREAM);
    secretNameMap.set(SecretCode.CHEEZE, SecretName.CHEEZE);
    function getName(code) {
        return secretNameMap.get(code);
    }
    SecretName.getName = getName;
})(SecretName = exports.SecretName || (exports.SecretName = {}));
//# sourceMappingURL=Calendar.js.map