import { GetStudentService } from './services/get-student.service';
import { SerieModel } from './models/serie.model';
import { ModuleModel } from './models/module.model';
import { NotaModel } from './models/nota.model';
import { DataModel } from './models/data.model';
import * as shape from 'd3-shape';
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
  notasConvertida: Array<DataModel>=[];
  view: number[] = [1500, 800];
  notas:Array<any>=[]
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
  curve: any = shape.curveBumpX;
  idprogram : string = "ciclo-col-c2";


  constructor(private getStudentService: GetStudentService) {

    this.actualizarGrafica(this.idprogram);
  }

  ngOnInit(): void {
    
    //console.log(this.notasConvertida)
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

  actualizarGrafica(idProgram:string){
    this.getStudentService.getStudentsGrades(idProgram)
    .subscribe((respuesta: any) => {
      this.notas = respuesta;
      this.notasConvertida=this.notas.map(nota => this.notaToData(nota))
      
    })
  }

}

