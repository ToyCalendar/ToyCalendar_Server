import { CalendarVO, SecretCode, SecretName, DayType, DayPoint } from "../models/Calendar";

export const calendar: CalendarVO = {
  code: 200,
  message: "성공",
  data: {
    mySelf: [
      {
        date: new Date(1546338985158),
        sexYn: true,
        deviceUseYn: false,
        secretInfoList: [
          {
            secretInfoCode: SecretCode.MANY,
            secretInfoName: SecretName.MANY
          },
          {
            secretInfoCode: SecretCode.EGG_WHITE,
            secretInfoName: SecretName.EGG_WHITE
          },
          {
            secretInfoCode: SecretCode.DRY,
            secretInfoName: SecretName.DRY
          }
        ],
        dayType: DayType.PHY_CYCLE,
        dayPoint: DayPoint.FUTURE
      },
      {
        date: new Date(1546425385158),
        sexYn: false,
        deviceUseYn: false,
        secretInfoList: [
          {
            secretInfoCode: SecretCode.MANY,
            secretInfoName: SecretName.MANY
          },
          {
            secretInfoCode: SecretCode.EGG_WHITE,
            secretInfoName: SecretName.EGG_WHITE
          },
          {
            secretInfoCode: SecretCode.DRY,
            secretInfoName: SecretName.DRY
          }
        ],
        dayType: DayType.PHY_CYCLE,
        dayPoint: DayPoint.FUTURE
      },
      {
        date: new Date(1546511785158),
        sexYn: true,
        deviceUseYn: true,
        secretInfoList: [
          {
            secretInfoCode: SecretCode.MANY,
            secretInfoName: SecretName.MANY
          },
          {
            secretInfoCode: SecretCode.EGG_WHITE,
            secretInfoName: SecretName.EGG_WHITE
          },
          {
            secretInfoCode: SecretCode.DRY,
            secretInfoName: SecretName.DRY
          }
        ],
        dayType: DayType.PHY_CYCLE,
        dayPoint: DayPoint.FUTURE
      }
    ],
    partner: [
      {
        date: new Date(1546338985158),
        sexYn: true,
        deviceUseYn: false,
        secretInfoList: [
          {
            secretInfoCode: SecretCode.MANY,
            secretInfoName: SecretName.MANY
          },
          {
            secretInfoCode: SecretCode.EGG_WHITE,
            secretInfoName: SecretName.EGG_WHITE
          },
          {
            secretInfoCode: SecretCode.DRY,
            secretInfoName: SecretName.DRY
          }
        ],
        dayType: DayType.PHY_CYCLE,
        dayPoint: DayPoint.FUTURE
      },
      {
        date: new Date(1546425385158),
        sexYn: false,
        deviceUseYn: false,
        secretInfoList: [
          {
            secretInfoCode: SecretCode.MANY,
            secretInfoName: SecretName.MANY
          },
          {
            secretInfoCode: SecretCode.EGG_WHITE,
            secretInfoName: SecretName.EGG_WHITE
          },
          {
            secretInfoCode: SecretCode.DRY,
            secretInfoName: SecretName.DRY
          }
        ],
        dayType: DayType.PHY_CYCLE,
        dayPoint: DayPoint.FUTURE
      },
      {
        date: new Date(1546511785158),
        sexYn: true,
        deviceUseYn: true,
        secretInfoList: [
          {
            secretInfoCode: SecretCode.MANY,
            secretInfoName: SecretName.MANY
          },
          {
            secretInfoCode: SecretCode.EGG_WHITE,
            secretInfoName: SecretName.EGG_WHITE
          },
          {
            secretInfoCode: SecretCode.DRY,
            secretInfoName: SecretName.DRY
          }
        ],
        dayType: DayType.PHY_CYCLE,
        dayPoint: DayPoint.FUTURE
      }
    ]
  }
};
