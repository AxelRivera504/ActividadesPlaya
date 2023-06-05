import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from '../Service/services.service';
import { Actividades } from '../Model/Actividades';
import { ActividadesXFecha } from '../Model/ActividadesXFecha';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  preserveWhitespaces: true
})
export class DashboardComponent implements OnInit {
  Actividades: Actividades[];
  actividades: any = {};
  submitted: boolean = false;
  selectedActivity: string;
  activities: string[] = ["Actividad 1", "Actividad 2", "Actividad 3"]; // Ejemplo, reemplaza con tu lista de actividades reales

  /**
   * Apex chart
   */
  public customersChartOptions: any = {};
  public ordersChartOptions: any = {};
  public growthChartOptions: any = {};
  public revenueChartOptions: any = {};
  public monthlySalesChartOptions: any = {};
  public cloudStorageChartOptions: any = {};
  public visitantesChartOptions: any = {};
  public clientesPorSexoChartOptions: any = {};

  // colors and font variables for apex chart
  obj = {
    primary: "#00979E",
    secondary: "#F27022",
    success: "#F27022",
    info: "#66d1d1",
    warning: "#fbbc06",
    danger: "#ff3366",
    light: "#e9ecef",
    dark: "#060c17",
    muted: "#7987a1",
    gridBorder: "rgba(77, 138, 240, .15)",
    bodyColor: "#000",
    cardBg: "#fff",
    fontFamily: "'Roboto', Helvetica, sans-serif"
  };
  /**
   * NgbDatepicker
   */
  currentDate: NgbDateStruct;
  startDate: string = '';
  endDate: string = '';
  visitantesDataCompleta: ActividadesXFecha[] = [];

  constructor(private calendar: NgbCalendar, private service: ServicesService, private dateParser: NgbDateParserFormatter) {}

  ngOnInit(): void {
    this.currentDate = this.calendar.getToday();

    // Configuración inicial de los gráficos Apex

    this.service.getActividades().subscribe((data: any) => {
      this.actividades = data;
    });

    this.service.getVisitantesXFecha().subscribe((data: ActividadesXFecha[]) => {
      this.visitantesDataCompleta = data.map(item => ({
        ...item,
        acfe_Fecha: new Date(item.acfe_Fecha)
      }));
    
      console.log('Datos de visitantes:', this.visitantesDataCompleta);
      console.log('Datos:',data);


      const visitantesData = this.visitantesDataCompleta.map(item => item.cantidadVisitantes);
      const fechasData = this.visitantesDataCompleta.map(item => item.acfe_Fecha);
    
      this.visitantesChartOptions = getVisitantesChartOptions(this.obj, visitantesData, fechasData);
    });
  }
 
  setDateRange(): void {
    console.log('StartDate:', this.startDate);
    console.log('EndDate:', this.endDate);
  
    if (!this.startDate || !this.endDate) {
      console.log('Fechas vacías');
      return;
    }
  
    const filteredStartDate = new Date(this.startDate);
    const filteredEndDate = new Date(this.endDate);
  
    if (isNaN(filteredStartDate.getTime()) || isNaN(filteredEndDate.getTime())) {
      console.log('Fechas inválidas');
      return;
    }
  
    this.filterDataByDateRange();
  }

  parseDateString(dateString: string): Date {
    const [year, month, day] = dateString.split('-');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  }
  filterDataByDateRange(): void {
    if (!this.startDate || !this.endDate) {
      console.log('Fechas vacías');
      return;
    }
  
    const filteredStartDate = new Date(this.startDate);
    const filteredEndDate = new Date(this.endDate);
  
    if (isNaN(filteredStartDate.getTime()) || isNaN(filteredEndDate.getTime())) {
      console.log('Fechas inválidas');
      return;
    }
  
    const filteredData = this.visitantesDataCompleta.filter(item => {
      const fecha = item.acfe_Fecha;
      return fecha >= filteredStartDate && fecha <= filteredEndDate;
    });
  
    const visitantesData = filteredData.map(item => item.cantidadVisitantes);
    const fechasData = filteredData.map(item => item.acfe_Fecha);
  
    // Actualiza las opciones de la gráfica con los nuevos datos
    this.visitantesChartOptions = getVisitantesChartOptions(this.obj, visitantesData, fechasData);
  }
  
  getClientsByActivity(actividades: Actividades) {
    const request = {
      "acti_Id": actividades.acti_Id
    };

    this.service.getClientesXsexo(request).subscribe(data => {
      const numMasculino = data.map(item => item.num_Masculino);
      const numFemenino = data.map(item => item.num_Femenino);

      const totalMasculino = numMasculino.reduce((a, b) => a + b, 0);
      const totalFemenino = numFemenino.reduce((a, b) => a + b, 0);

      const porcentajeMasculino = numMasculino.map(num => (num / (totalMasculino + totalFemenino)) * 100);
      const porcentajeFemenino = numFemenino.map(num => (num / (totalMasculino + totalFemenino)) * 100);

      this.clientesPorSexoChartOptions = this.getMonthlySalesChartOptions(numMasculino, numFemenino, porcentajeMasculino, porcentajeFemenino);
    });
  }

  getMonthlySalesChartOptions(numMasculino: number[], numFemenino: number[], porcentajeMasculino: number[], porcentajeFemenino: number[]) {
    if (!numMasculino || !numFemenino) {
      return {}; // Otra opción podría ser mostrar un mensaje de error
    } 
    const obj = this.obj;
    const porcentajeMasculinoRedondeado = porcentajeMasculino.map(valor => valor.toFixed(2) + "%");
    const porcentajeFemeninoRedondeado = porcentajeFemenino.map(valor => valor.toFixed(2) + "%");
    const porcentajes = porcentajeMasculinoRedondeado.map((valor, index) => `${valor} ${porcentajeFemeninoRedondeado[index]}`);
  
    console.log(porcentajeMasculino),
    console.log(porcentajeFemenino)
    
    return {
      series: [
        {
          name: 'Masculino',
          data: numMasculino,
          porcentaje: porcentajeMasculinoRedondeado,
          color: obj.primary
        },
        {
          name: 'Femenino',
          data: numFemenino,
          porcentaje: porcentajeFemeninoRedondeado,
          color: obj.success
        }
      ],
      chart: {
        type: 'bar',
        height: '318',
        parentHeightOffset: 0,
        foreColor: obj.bodyColor,
        background: obj.cardBg,
        toolbar: {
          show: false
        },
      },
      colors: [obj.primary],  
      fill: {
        opacity: .9
      } , 
      grid: {
        padding: {
          bottom: -4
        },
        borderColor: obj.gridBorder,
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      xaxis: {
        categories: porcentajes,
        axisBorder: {
          color: obj.gridBorder,
        },
        axisTicks: {
          color: obj.gridBorder,
        },
      },
      yaxis: {
        title: {
          text: 'Número de Personas',
          style:{
            size: 9,
            color: obj.muted
          }
        },
        labels: {
          offsetX: 0,
        },
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: 'center',
        fontFamily: obj.fontFamily,
        itemMargin: {
          horizontal: 8,
          vertical: 0
        },
      },
      stroke: {
        width: 0
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '10px',
          fontFamily: obj.fontFamily,
        },
        offsetY: -27
      },
      plotOptions: {
        bar: {
          columnWidth: "10%",
          borderRadius: 4,
          dataLabels: {
            position: 'top',
            orientation: 'horizontal',
          }
        },
      }
    };
  }

}

function getVisitantesChartOptions(obj: any, visitantesData: number[], fechasData: Date[]) {
  console.log('visitantes', visitantesData);
  console.log('fechas', fechasData);
  return {
    series: [{
      name: 'Visitantes',
      data: visitantesData
    }],
    chart: {
      type: 'line',
      height: 300,
      toolbar: {
        show: true
      }
    },
    colors: [obj.primary],
    xaxis: {
      type: 'datetime',
      categories: fechasData.map(date => new Date(date).getTime())
    },
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    markers: {
      size: 0
    }
  };
}

  
 



