import { CalendarVO, SecretCode, SecretName } from "../models/calendar";

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
        physiologyCycleYn: true,
        physiologyStartYn: false,
        physiologyEndYn: false,
        ovulationCycleYn: false,
        ovulationDayYn: false,
        ovulationStartYn: false,
        ovulationEndYn: false,
        dayPoint: 2
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
        physiologyCycleYn: true,
        physiologyStartYn: false,
        physiologyEndYn: false,
        ovulationCycleYn: false,
        ovulationDayYn: false,
        ovulationStartYn: false,
        ovulationEndYn: false,
        dayPoint: 2
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
        physiologyCycleYn: true,
        physiologyStartYn: false,
        physiologyEndYn: false,
        ovulationCycleYn: false,
        ovulationDayYn: false,
        ovulationStartYn: false,
        ovulationEndYn: false,
        dayPoint: 2
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
        physiologyCycleYn: true,
        physiologyStartYn: false,
        physiologyEndYn: false,
        ovulationCycleYn: false,
        ovulationDayYn: false,
        ovulationStartYn: false,
        ovulationEndYn: false,
        dayPoint: 2
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
        physiologyCycleYn: true,
        physiologyStartYn: false,
        physiologyEndYn: false,
        ovulationCycleYn: false,
        ovulationDayYn: false,
        ovulationStartYn: false,
        ovulationEndYn: false,
        dayPoint: 2
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
        physiologyCycleYn: true,
        physiologyStartYn: false,
        physiologyEndYn: false,
        ovulationCycleYn: false,
        ovulationDayYn: false,
        ovulationStartYn: false,
        ovulationEndYn: false,
        dayPoint: 2
      }
    ]
  }
};
