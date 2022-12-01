export interface IProfile {
    isActive: boolean;
    profileName: string;
    pointConfig: any;
}

export interface IPointConfig {
    pointId : string;
    pointName: string;
    isOn: boolean;
}

export interface ISensors {
    location : string;
    isTriggered : boolean;
    shouldNotify: boolean;
    shouldBuzzer:boolean;
}

export interface IConfig {
    profiles : IProfile[],
    points : IPointConfig[],
    sensorsConfig: any
}