import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  json;

  constructor() {
    this.json = {
      "clearInvisibleValues": "onHidden",
      "questions": [
        {
          "type": "radiogroup",
          "name": "age18",
          "title": "Are you 18 years old or older?",
          "isRequired": true,
          "choices": [
            "Yes",
            "No"
          ],
          "colCount": 0
        },
        {
          "type": "radiogroup",
          "name": "haveKids",
          "title": "Do you have a kid(s)?",
          "visibleIf": "{age18}='Yes'",
          "isRequired": true,
          "choices": [
            "Yes",
            "No"
          ],
          "colCount": 0
        },
        {
          "type": "dropdown",
          "name": "kids",
          "title": "How many kids do you have",
          "visibleIf": "{haveKids}='Yes'",
          "isRequired": true,
          "choices": [
            1,
            2,
            3,
            4,
            5
          ]
        },
        {
          "type": "dropdown",
          "name": "kid1Age",
          "title": "The first kid age:",
          "visibleIf": "{kids} >= 1",
          "isRequired": true,
          "choicesMax": 18
        },
        {
          "type": "dropdown",
          "name": "kid2Age",
          "title": "The second kid age:",
          "visibleIf": "{kids} >= 2",
          "isRequired": true,
          "startWithNewLine": false,
          "choicesMax": 18
        },
        {
          "type": "dropdown",
          "name": "kid3Age",
          "title": "The third kid age:",
          "visibleIf": "{kids} >= 3",
          "isRequired": true,
          "startWithNewLine": false,
          "choicesMax": 18
        },
        {
          "type": "dropdown",
          "name": "kid4Age",
          "title": "The fourth kid age:",
          "visibleIf": "{kids} >= 4",
          "isRequired": true,
          "startWithNewLine": false,
          "choicesMax": 18
        },
        {
          "type": "dropdown",
          "name": "kid5Age",
          "title": "The fifth kid age:",
          "visibleIf": "{kids} >= 5",
          "isRequired": true,
          "startWithNewLine": false,
          "choicesMax": 18
        }
      ]
    };
  }

  sendData(result) {
    //TODO update with your own behavior
    alert('Check your console to view survey response.')
    console.log('Survey response',result);
  }
}
