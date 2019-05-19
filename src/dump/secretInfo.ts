import { SecretInfoVO } from "..//models/secretInfo";
import { SecretCode, SecretName } from "../models/Calendar";

export const secretInfo: SecretInfoVO = {
  code: 200,
  message: "성공",
  data: [
    {
      secretCode: SecretCode.MANY,
      secretName: SecretName.MANY
    },
    {
      secretCode: SecretCode.CHEEZE,
      secretName: SecretName.CHEEZE
    },
    {
      secretCode: SecretCode.CREAM,
      secretName: SecretName.CREAM
    },
    {
      secretCode: SecretCode.DILUTION,
      secretName: SecretName.DILUTION
    },
    {
      secretCode: SecretCode.DRY,
      secretName: SecretName.DRY
    },
    {
      secretCode: SecretCode.EGG_WHITE,
      secretName: SecretName.EGG_WHITE
    }
  ]
};
