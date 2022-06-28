import { SerieModel } from './models/serie.model';
import { ModuleModel } from './models/module.model';
import { NotaModel } from './models/nota.model';
import { DataModel } from './models/data.model';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  multi: any[] = [];
  multi2: any[] = [];
  view: number[] = [900, 500];

  //options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Modulos';
  yAxisLabel: string = 'Calificacion';
  timeline: boolean = true;
  roundDomains: boolean = true;

  nota: Array<NotaModel> = [
    {
      "studentName": "Alvaro Mena",
      "average": 73,
      "courses": [
        {
          "nameCourse": "Introduccion al Desarrollo de Software",
          "score": 75
        },
        {
          "nameCourse": "Introduccion al Desarrollo de Software",
          "score": 69
        },
        {
          "nameCourse": "Introduccion a Scrum",
          "score": 61
        }
      ],
      "modules": [
        {
          "nameCourse": "Introduccion al Desarrollo de Software",
          "nameModule": "Java Back",
          "score": 75
        },
        {
          "nameCourse": "Introduccion al Desarrollo de Software",
          "nameModule": "Angular Front",
          "score": 69
        },
        {
          "nameCourse": "Introduccion al Desarrollo de Software",
          "nameModule": "Java Back",
          "score": 61
        },
        {
          "nameCourse": "Introduccion al Desarrollo de Software",
          "nameModule": "Angular Front",
          "score": 94
        },
        {
          "nameCourse": "Introduccion a Scrum",
          "nameModule": "Agilismo",
          "score": 87
        },
        {
          "nameCourse": "Introduccion a Scrum",
          "nameModule": "intro a scrum",
          "score": 96
        },
        {
          "nameCourse": "Introduccion a Scrum",
          "nameModule": "Scrum master",
          "score": 7
        },
        {
          "nameCourse": "Introduccion a Scrum",
          "nameModule": "Trabajo en eqipo",
          "score": 67
        }
      ]
    },
    {
      "studentName": "Steveen rodriguez",
      "average": 85,
      "courses": [
        {
          "nameCourse": "Introduccion al Desarrollo de Software",
          "score": 78
        },
        {
          "nameCourse": "Introduccion al Desarrollo de Software",
          "score": 89
        },
        {
          "nameCourse": "Introduccion a Scrum",
          "score": 71
        }
      ],
      "modules": [
        {
          "nameCourse": "Introduccion al Desarrollo de Software",
          "nameModule": "Java Back",
          "score": 65
        },
        {
          "nameCourse": "Introduccion al Desarrollo de Software",
          "nameModule": "Angular Front",
          "score": 89
        },
        {
          "nameCourse": "Introduccion al Desarrollo de Software",
          "nameModule": "Java Back",
          "score": 81
        },
        {
          "nameCourse": "Introduccion al Desarrollo de Software",
          "nameModule": "Angular Front",
          "score": 74
        },
        {
          "nameCourse": "Introduccion a Scrum",
          "nameModule": "Agilismo",
          "score": 77
        },
        {
          "nameCourse": "Introduccion a Scrum",
          "nameModule": "intro a scrum",
          "score": 86
        },
        {
          "nameCourse": "Introduccion a Scrum",
          "nameModule": "Scrum master",
          "score": 20
        },
        {
          "nameCourse": "Introduccion a Scrum",
          "nameModule": "Trabajo en eqipo",
          "score": 75
        }
      ]
    },
    {
      "studentName": "Jose Echavarria",
      "average": 85,
      "courses": [
        {
          "nameCourse": "Introduccion al Desarrollo de Software",
          "score": 87
        },
        {
          "nameCourse": "Introduccion al Desarrollo de Software",
          "score": 98
        },
        {
          "nameCourse": "Introduccion a Scrum",
          "score": 57
        }
      ],
      "modules": [
        {
          "nameCourse": "Introduccion al Desarrollo de Software",
          "nameModule": "Java Back",
          "score": 69
        },
        {
          "nameCourse": "Introduccion al Desarrollo de Software",
          "nameModule": "Angular Front",
          "score": 83
        },
        {
          "nameCourse": "Introduccion al Desarrollo de Software",
          "nameModule": "Java Back",
          "score": 68
        },
        {
          "nameCourse": "Introduccion al Desarrollo de Software",
          "nameModule": "Angular Front",
          "score": 84
        },
        {
          "nameCourse": "Introduccion a Scrum",
          "nameModule": "Agilismo",
          "score": 100
        },
        {
          "nameCourse": "Introduccion a Scrum",
          "nameModule": "intro a scrum",
          "score": 100
        },
        {
          "nameCourse": "Introduccion a Scrum",
          "nameModule": "Scrum master",
          "score": 100
        },
        {
          "nameCourse": "Introduccion a Scrum",
          "nameModule": "Trabajo en eqipo",
          "score": 85
        }
      ]
    }
  ]


  colorScheme = {
    domain: ['#FFFFFF', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    this.multi2=this.nota.map(nota => this.notaToData(nota))
  }
  ngOnInit(): void {

    Object.assign(this, );
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


  moduleToserie(module: ModuleModel){
    const serie: SerieModel = {name:module.nameModule,value:module.score};
    return serie; 
  }

  notaToData(nota: NotaModel){
    const series: Array<SerieModel> = nota.modules.map(module => this.moduleToserie(module));
    const data: DataModel = {name:nota.studentName,series:series};
    return data; 
  }

}

