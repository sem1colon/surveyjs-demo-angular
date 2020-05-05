import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import * as Survey from "survey-angular";

@Component({
  selector: 'survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  @Output() submitSurvey = new EventEmitter<any>();
  @Input()
  json: object;
  result: any;

  constructor() { }

  ngOnInit() {

    //Applying stylesheet
    // Survey.StylesManager.applyTheme("bootstrap");

    //Creating a survey model
    const surveyModel = new Survey.Model(this.json);
    //Saving the survey response
    surveyModel.onComplete.add((result, options) => {
      this.submitSurvey.emit(result.data);
      this.result = result.data;
    });
    //Displaying the survey
    Survey.SurveyNG.render(
      "surveyElement", {
      model: surveyModel
    }
    );
  }

}
