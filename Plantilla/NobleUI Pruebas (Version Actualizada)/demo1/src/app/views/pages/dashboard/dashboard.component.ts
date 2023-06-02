import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from '../Service/services.service';
import { ClienteXReservacion } from '../Model/ClienteXReservacion';
import { Actividades } from '../Model/Actividades';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  preserveWhitespaces: true
})
export class DashboardComponent implements OnInit {
  Actividades!:Actividades[];
  actividades: any= {};
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
  clientesPorSexoChartOptions: any = {};
  // colors and font variables for apex chart 
  obj = {
    primary: "#6571ff",
    secondary: "#7987a1",
    success: "#05a34a",
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
  }

  /**
   * NgbDatepicker
   */
  currentDate: NgbDateStruct;

  constructor(private calendar: NgbCalendar, private service: ServicesService) { }
  
 
  ngOnInit(): void {
    this.currentDate = this.calendar.getToday();

    this.customersChartOptions = getCustomerseChartOptions(this.obj);
    this.ordersChartOptions = getOrdersChartOptions(this.obj);
    this.growthChartOptions = getGrowthChartOptions(this.obj);
    this.revenueChartOptions = getRevenueChartOptions(this.obj);
    this.monthlySalesChartOptions = getMonthlySalesChartOptions(this.obj);
    this.cloudStorageChartOptions = getCloudStorageChartOptions(this.obj);

    this.currentDate = this.calendar.getToday();
    
    this.service.getActividades().subscribe((data: any) => {
      this.actividades = data;
    });
   
   // ...

    this.service.getVisitantesXFecha().subscribe(data => {
      const visitantesData = data.map(item => item.cantidadVisitantes);
      const fechasData = data.map(item => item.acfe_Fecha);

      this.visitantesChartOptions = getVisitantesChartOptions(this.obj, visitantesData, fechasData);
      console.log(data);
    })


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
          categories: fechasData.map(date => date)
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

    // Some RTL fixes. (feel free to remove if you are using LTR))
    if (document.querySelector('html')?.getAttribute('dir') === 'rtl') {
      this.addRtlOptions();
    }

  }
   
  getClientsByActivity(actividades: Actividades) {
    const request = {
      "acti_Id" : actividades.acti_Id
    };
  
    this.service.getClientesXsexo(request).subscribe(data => {
      const numMasculino = data.map(item => item.num_Masculino);
      const numFemenino = data.map(item => item.num_Femenino);
      this.clientesPorSexoChartOptions = this.getMonthlySalesChartOptions(numMasculino, numFemenino);
      console.log('Maculino',numMasculino);
      console.log('Maculino',numFemenino);
    });
  }
  
  getMonthlySalesChartOptions(numMasculino: number[], numFemenino: number[]) {
   console.log('maculinidad',numMasculino);
   
    return {
      series: [
        {
          name: 'Masculino',
          data: numMasculino
        },
        {
          name: 'Femenino',
          data: numFemenino
        }
      ],
      // Resto de la configuración del gráfico
    };
  }


  /**
   * Only for RTL (feel free to remove if you are using LTR)
   */
  addRtlOptions() {
    // Revenue chart
    this.revenueChartOptions.yaxis.labels.offsetX = -25;
    this.revenueChartOptions.yaxis.title.offsetX = -75;

    //  Monthly sales chart
    this.monthlySalesChartOptions.yaxis.labels.offsetX = -10;
    this.monthlySalesChartOptions.yaxis.title.offsetX = -70;
  }
}


/**
 * Customerse chart options
 */
function getCustomerseChartOptions(obj: any) {
  return {
    series: [{
      name: '',
      data: [3844, 3855, 3841, 3867, 3822, 3843, 3821, 3841, 3856, 3827, 3843]
    }],
    chart: {
      type: "line",
      height: 60,
      sparkline: {
        enabled: !0
      }
    },
    colors: [obj.primary],
    xaxis: {
      type: 'datetime',
      categories: ["Jan 01 2022", "Jan 02 2022", "Jan 03 2022", "Jan 04 2022", "Jan 05 2022", "Jan 06 2022", "Jan 07 2022", "Jan 08 2022", "Jan 09 2022", "Jan 10 2022", "Jan 11 2022",],
    },
    stroke: {
      width: 2,
      curve: "smooth"
    },
    markers: {
      size: 0
    },
  }
};



/**
 * Orders chart options
 */
function getOrdersChartOptions(obj: any) {
  return {
    series: [{
      name: '',
      data: [36, 77, 52, 90, 74, 35, 55, 23, 47, 10, 63]
    }],
    chart: {
      type: "bar",
      height: 60,
      sparkline: {
        enabled: !0
      }
    },
    colors: [obj.primary],
    plotOptions: {
      bar: {
        borderRadius: 2,
        columnWidth: "60%"
      }
    },
    xaxis: {
      type: 'datetime',
      categories: ["Jan 01 2022", "Jan 02 2022", "Jan 03 2022", "Jan 04 2022", "Jan 05 2022", "Jan 06 2022", "Jan 07 2022", "Jan 08 2022", "Jan 09 2022", "Jan 10 2022", "Jan 11 2022",],
    }
  }
};



/**
 * Growth chart options
 */
function getGrowthChartOptions(obj: any) {
  return {
    series: [{
      name: '',
      data: [41, 45, 44, 46, 52, 54, 43, 74, 82, 82, 89]
    }],
    chart: {
      type: "line",
      height: 60,
      sparkline: {
        enabled: !0
      }
    },
    colors: [obj.primary],
    xaxis: {
      type: 'datetime',
      categories: ["Jan 01 2022", "Jan 02 2022", "Jan 03 2022", "Jan 04 2022", "Jan 05 2022", "Jan 06 2022", "Jan 07 2022", "Jan 08 2022", "Jan 09 2022", "Jan 10 2022", "Jan 11 2022",],
    },
    stroke: {
      width: 2,
      curve: "smooth"
    },
    markers: {
      size: 0
    },
  }
};



/**
 * Revenue chart options
 */
function getRevenueChartOptions(obj: any) {
  return {
    series: [{
      name: "Revenue",
      data: [
      ]
    }],
    chart: {
      type: "line",
      height: '400',
      parentHeightOffset: 0,
      foreColor: obj.bodyColor,
      background: obj.cardBg,
      toolbar: {
        show: false
      },
    },
    colors: [obj.primary, obj.danger, obj.warning],
    grid: {
      padding: {
        bottom: -4,
      },
      borderColor: obj.gridBorder,
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      type: "datetime",
      categories: [
        "Jan 01 2022", "Jan 02 2022", "jan 03 2022", "Jan 04 2022", "Jan 05 2022", "Jan 06 2022", "Jan 07 2022", "Jan 08 2022", "Jan 09 2022", "Jan 10 2022", "Jan 11 2022", "Jan 12 2022", "Jan 13 2022", "Jan 14 2022", "Jan 15 2022", "Jan 16 2022", "Jan 17 2022", "Jan 18 2022", "Jan 19 2022", "Jan 20 2022", "Jan 21 2022", "Jan 22 2022", "Jan 23 2022", "Jan 24 2022", "Jan 25 2022", "Jan 26 2022", "Jan 27 2022", "Jan 28 2022", "Jan 29 2022", "Jan 30 2022", "Jan 31 2022",
        "Feb 01 2022", "Feb 02 2022", "Feb 03 2022", "Feb 04 2022", "Feb 05 2022", "Feb 06 2022", "Feb 07 2022", "Feb 08 2022", "Feb 09 2022", "Feb 10 2022", "Feb 11 2022", "Feb 12 2022", "Feb 13 2022", "Feb 14 2022", "Feb 15 2022", "Feb 16 2022", "Feb 17 2022", "Feb 18 2022", "Feb 19 2022", "Feb 20 2022", "Feb 21 2022", "Feb 22 2022", "Feb 23 2022", "Feb 24 2022", "Feb 25 2022", "Feb 26 2022", "Feb 27 2022", "Feb 28 2022",
        "Mar 01 2022", "Mar 02 2022", "Mar 03 2022", "Mar 04 2022", "Mar 05 2022", "Mar 06 2022", "Mar 07 2022", "Mar 08 2022", "Mar 09 2022", "Mar 10 2022", "Mar 11 2022", "Mar 12 2022", "Mar 13 2022", "Mar 14 2022", "Mar 15 2022", "Mar 16 2022", "Mar 17 2022", "Mar 18 2022", "Mar 19 2022", "Mar 20 2022", "Mar 21 2022", "Mar 22 2022", "Mar 23 2022", "Mar 24 2022", "Mar 25 2022", "Mar 26 2022", "Mar 27 2022", "Mar 28 2022", "Mar 29 2022", "Mar 30 2022", "Mar 31 2022",
        "Apr 01 2022", "Apr 02 2022", "Apr 03 2022", "Apr 04 2022", "Apr 05 2022", "Apr 06 2022", "Apr 07 2022", "Apr 08 2022", "Apr 09 2022", "Apr 10 2022", "Apr 11 2022", "Apr 12 2022", "Apr 13 2022", "Apr 14 2022", "Apr 15 2022", "Apr 16 2022", "Apr 17 2022", "Apr 18 2022", "Apr 19 2022", "Apr 20 2022", "Apr 21 2022", "Apr 22 2022", "Apr 23 2022", "Apr 24 2022", "Apr 25 2022", "Apr 26 2022", "Apr 27 2022", "Apr 28 2022", "Apr 29 2022", "Apr 30 2022",
        "May 01 2022", "May 02 2022", "May 03 2022", "May 04 2022", "May 05 2022", "May 06 2022", "May 07 2022", "May 08 2022", "May 09 2022", "May 10 2022", "May 11 2022", "May 12 2022", "May 13 2022", "May 14 2022", "May 15 2022", "May 16 2022", "May 17 2022", "May 18 2022", "May 19 2022", "May 20 2022", "May 21 2022", "May 22 2022", "May 23 2022", "May 24 2022", "May 25 2022", "May 26 2022", "May 27 2022", "May 28 2022", "May 29 2022", "May 30 2022",
      ],
      lines: {
        show: true
      },
      axisBorder: {
        color: obj.gridBorder,
      },
      axisTicks: {
        color: obj.gridBorder,
      },
      crosshairs: {
        stroke: {
          color: obj.secondary,
        },
      },
    },
    yaxis: {
      title: {
        text: 'Revenue ( $1000 x )',
        style: {
          size: 9,
          color: obj.muted
        }
      },
      tickAmount: 4,
      tooltip: {
        enabled: true
      },
      crosshairs: {
        stroke: {
          color: obj.secondary,
        },
      },
      labels: {
        offsetX: 0,
      },
    },
    markers: {
      size: 0,
    },
    stroke: {
      width: 2,
      curve: "straight",
    },
  }
};



/**
 * Monthly sales chart options
 */
function getMonthlySalesChartOptions(obj: any) {
  return {
    series: [{
      name: 'Sales',
      data: [152, 109, 93, 113, 126, 161, 188, 143, 102, 113, 116, 124]
    }],
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
    },
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
      type: 'datetime',
      categories: ['01/01/2022', '02/01/2022', '03/01/2022', '04/01/2022', '05/01/2022', '06/01/2022', '07/01/2022', '08/01/2022', '09/01/2022', '10/01/2022', '11/01/2022', '12/01/2022'],
      axisBorder: {
        color: obj.gridBorder,
      },
      axisTicks: {
        color: obj.gridBorder,
      },
    },
    yaxis: {
      title: {
        text: 'Number of Sales',
        style: {
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
        columnWidth: "50%",
        borderRadius: 4,
        dataLabels: {
          position: 'top',
          orientation: 'vertical',
        }
      },
    }
  }
}



/**
 * Cloud storage chart options
 */
function getCloudStorageChartOptions(obj: any) {
  return {
    series: [67],
    chart: {
      height: 260,
      type: "radialBar"
    },
    colors: [obj.primary],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "70%"
        },
        track: {
          show: true,
          background: obj.light,
          strokeWidth: '100%',
          opacity: 1,
          margin: 5,
        },
        dataLabels: {
          showOn: "always",
          name: {
            offsetY: -11,
            show: true,
            color: obj.muted,
            fontSize: "13px"
          },
          value: {
            color: obj.bodyColor,
            fontSize: "30px",
            show: true
          }
        }
      }
    },
    fill: {
      opacity: 1
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Storage Used"]
  }
};
