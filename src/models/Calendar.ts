import CommonVO from "./common";
export interface CalendarVO extends CommonVO {
  data: CalendarMyOnPartnerVO;
}

export interface CalendarMyOnPartnerVO {
  mySelf: CalendarInfoVO[];
  partner: CalendarInfoVO[];
}

export interface CalendarInfoVO {
  date: Date; // 날짜
  sexYn: boolean; // 섹스 여부
  deviceUseYn: boolean; // 기구 사용 여부 (섹스가 Y일 때만)
  secretInfoList: CalendarSecretInfoVO[];
  physiologyCycleYn: boolean; // true : 생리 주기 있음 ? false : 생리 주기 없음 - 생리주기 여부
  physiologyStartYn: boolean; // true : 생리 시작일 (둥글게 표시) - 생리시작일여부
  physiologyEndYn: boolean; // true : 생리 종료일 (둥글게 표시) - 생리종료일여부
  ovulationCycleYn: boolean; // nullable - 배란주기 여부
  ovulationDayYn: boolean; // nullable - 배란일 여부
  ovulationStartYn: boolean; // - 배란 시작 여부 (둥글게 표시)
  ovulationEndYn: boolean; // - 배란 종료 여부 (둥글게 표시)
  dayPoint: number; // 현재 : 0, 과거 : 1, 미래 : 2 - 시점
}

export interface CalendarSecretInfoVO {
  secretInfoCode: SecretCode; // 민감정보 코드
  secretInfoName: SecretName; // 민감정보 이름
}

export enum SecretCode {
  MANY = "MANY",
  DRY = "DRY",
  DILUTION = "DILUTION",
  EGG_WHITE = "EGG_WHITE",
  CREAM = "CREAM",
  CHEEZE = "CHEEZE"
}

export enum SecretName {
  MANY = "많음",
  DRY = "건조",
  DILUTION = "묽음",
  EGG_WHITE = "달걀 흰자",
  CREAM = "크림",
  CHEEZE = "치즈"
}

export namespace SecretName {
  const secretNameMap = new Map<SecretCode, SecretName>();
  secretNameMap.set(SecretCode.MANY, SecretName.MANY);
  secretNameMap.set(SecretCode.DRY, SecretName.DRY);
  secretNameMap.set(SecretCode.DILUTION, SecretName.DILUTION);
  secretNameMap.set(SecretCode.EGG_WHITE, SecretName.EGG_WHITE);
  secretNameMap.set(SecretCode.CREAM, SecretName.CREAM);
  secretNameMap.set(SecretCode.CHEEZE, SecretName.CHEEZE);

  export function getName(code: SecretCode): string {
    return secretNameMap.get(code);
  }
}
