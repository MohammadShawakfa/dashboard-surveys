import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter',


})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string,start_date:Date,end_date:Date): any {
    console.log(value?.length);

    var Survey_start_date = start_date.toLocaleDateString();
    var Survey_end_date = end_date.toLocaleDateString();
    var Survey_start_date_formatted: Date;
    var Survey_end_date_formatted: Date;


    const resultArr=[];
    for(let i =0;i < value?.length;i++)
    {
      if(value[i].SurveyPeriods.length!=0)
        {
          if(value[i].SurveyName.includes(filterString))
          //&& (value[i].SurveyPeriods[0].START_DATE > start_date && value[i].SurveyPeriods[0].END_DATE < end_date)
          {

            // console.log("///////////////////////////////////////////////");

            // console.log("Start Date from survey");
            // console.log(value[i].SurveyPeriods[0].START_DATE);

            Survey_start_date = value[i].SurveyPeriods[0].START_DATE;
            Survey_end_date = value[i].SurveyPeriods[0].END_DATE;

            // console.log("Parsed date");

            // console.log(Date.parse(value[i].SurveyPeriods[0].START_DATE));

            Survey_start_date_formatted = new Date(Survey_start_date);
            Survey_end_date_formatted   = new Date(Survey_end_date);


            // if (date > start && date < end) {
            //   console.log('✅ date is between the 2 dates');
            // }

            //to check if a date is in between a range,
            /*the survey start period should be greater than or equal to the start period on range picker
            and the survey end period should be less than or equal to the date range picker date */

             if(Survey_start_date_formatted > start_date && Survey_end_date_formatted <end_date)
             {
              resultArr.push(value[i]);
              // console.log("date is in between ranges");
             }






            // console.log("Start Date from pipe");
            // console.log(start_date);
            // resultArr.push(value[i]);

            // console.log("Survey_start_date");
            // console.log(Survey_start_date);

            // console.log("logging the date varibale");
            // console.log(date);



            // if(date > start_date)
            // {
            //   console.log("Date is bigger than start date");
            // }
            // if(date < start_date)
            // {
            //   console.log("Date is smaller than start date");
            // }

            // console.log("///////////////////////////////////////////////");
               // console.log(value[i].SurveyName);
               // if(value[i].SurveyPeriods.length!=0)
               // {

                //   console.log(value[i].SurveyPeriods[0].START_DATE);

              // }
            }

          // console.log(value[i].SurveyPeriods[0].START_DATE);

        }



    }
    // console.log("Here are the items in saved array");
    // console.log(resultArr);
    // console.log(this.fetchedPosts[0].SurveyPeriods[0].ID);

    console.log(resultArr);


    return resultArr;
  }

}
