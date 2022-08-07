export interface Card {
    SRV_ID: number;
    SURVEY_STATUS_AR: string;
    SURVEY_STATUS_EN: string;
    SurveyName: string;
    SurveyNameAr: string;
    SurveyNameEn: string;
    // SurveyPeriods: "[{\"ID\":24425,\"START_DATE\":\"2021-05-24T00:00:00\",\"END_DATE\":\"2022-07-31T00:00:00\"}]"
     SurveyPeriods: any[];

    //SurveyPeriods can have more than just 3 elements, it can have 
    //SurveyPeriods: [id:number,start_date:Date,end_date:Date];
    SystemType: number;
    TEMPLATE_ID: number;
    TemplateName: string;
    TemplateNameAr: string;
    TemplateNameEn: string;
    }