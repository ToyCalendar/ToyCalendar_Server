import { SecretCode, SecretName } from "./calendar";
import CommonVO from "./common";

export interface SecretInfoVO extends CommonVO {
  data: SecretResourceVO[];
}

export interface SecretResourceVO {
  secretCode: SecretCode;
  secretName: SecretName;
}
