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
  dayType: DayType;
  dayPoint: DayPoint; // 현재 : 0, 과거 : 1, 미래 : 2 - 시점
}

export interface CalendarSecretInfoVO {
  secretInfoCode: SecretCode; // 민감정보 코드
  secretInfoName: SecretName; // 민감정보 이름
}

export enum DayType {
  NONE = "NONE", // 아무날도 아님
  PHY_START = "PHYSIOLOGY_START", // 생리 시작일
  PHY_CYCLE = "PHYSIOLOGY_CYCLE", // 생리 진행 중
  PHY_END = "PHYSIOLOGY_END", // 생리 종료일
  OVL_START = "OVULATION_START", // 배란 시작일
  OVL_CYCLE = "OVULATION_CYCLE", // 배란 진행중
  OVL_END = "OVULATION_END", // 배란 종료일
  OVL_DAY = "OVULATION_DAY" // 배란일
}

export enum DayPoint {
  CURRENT = 0,
  PAST = 1,
  FUTURE = 2
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
