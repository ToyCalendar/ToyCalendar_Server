import { SecretCode, SecretName } from "./Calendar";
import CommonVO from "./Common";

export interface SecretInfoVO extends CommonVO {
  data: SecretResourceVO[];
}

export interface SecretResourceVO {
  secretCode: SecretCode;
  secretName: SecretName;
}
