import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { EstilosService } from 'src/app/services/estilos.service';
import { EncuestaResultadoService } from '../../services/encuestaResultado.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

estilos = [];
dataTable = [];

public barChartData: ChartDataSets[] = [
];

public barChartLabels: Label[];

public barChartOptions: ChartOptions = {
  responsive: true
};

public barChartType: ChartType = 'bar';

public barChartLegend = false;

public totales;

  constructor( private encuestaService: EncuestaResultadoService, private estilosService: EstilosService) { }

  ngOnInit(): void {
    // CARGAR ESTILOS
    this.estilosService.getEstilos().subscribe(resp => {
      resp.forEach(data => {
        this.estilos.push(data.nombreEstilo);
      })
      this.barChartLabels = this.estilos;
      this.totales = Array(this.estilos.length).fill('0');
      console.log(this.barChartLabels);
      
    });

    // CARGAR DATA
    this.encuestaService.getCount().subscribe(resp => {
      resp.forEach((item, idx) => {
        // BUSCAR INDEX EN ESTILOS
        let index = this.barChartLabels.findIndex(data => data == item.nombre);
        this.totales[index] = item.cantidad;
      });
      this.barChartData.push({
        data: this.totales, label: 'Géneros', backgroundColor: "transparent", borderColor: "black", borderWidth: 1
      });
    });
    
    this.encuestaService.getTabla().subscribe(resp => {
      this.dataTable = resp;
    });
    
  }

}
