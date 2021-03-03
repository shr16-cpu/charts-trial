import { Component, OnInit } from '@angular/core'; 
 import { IBarChartConfig } from '@uimf/uitk'; 
  
 @Component({ 
     selector: 'app-root', 
     templateUrl: './app.component.html', 
 }) 
 export class AppComponent implements OnInit { 
     public barChart!: IBarChartConfig; 
     public toggletext: string = 'Off'; 
  
     ngOnInit() { 
         this.barChart = { 
             type: 'multiBarHorizontalChart', 
             id: 'HorizontalBarChart', 
             header: 'Horizontal Bar Chart', 
             description: 'Configurable caption for data visualization component.', 
             showA11yDescription: true, 
             enableTooltip: true, 
             enableHover: true, 
             a11yDescription: '(For A11y purposes, optional text can go here.)', 
             chartOptions: function (chart) { 
                 // chart.color[0] = '#000000' -> example how to change barColor to black - user can override any chart options. 
             }, 
             data: [ 
                 { 
                     key: 'Series', 
                     color: '#E87722', 
                     values: [ 
                         { 
                             label: 'Group A', 
                             value: 125.307646510375, 
                         }, 
                         { 
                             label: 'Group B', 
                             value: 116.756779544553, 
                         }, 
                         { 
                             label: 'Group C', 
                             value: 118.451534877007, 
                         }, 
                         { 
                             label: 'Group D', 
                             value: 18.6142352811805, 
                         }, 
                         { 
                             label: 'Group E', 
                             value: 17.8082472075876, 
                         }, 
                         { 
                             label: 'Group F', 
                             value: 15.259101026956, 
                         }, 
                         { 
                             label: 'Group G', 
                             value: 10.30947953487127, 
                         }, 
                         { 
                             label: 'Group H', 
                             value: 10, 
                         }, 
                         { 
                             label: 'Group I', 
                             value: 10, 
                         }, 
                     ], 
                 }, 
             ], 
         }; 
     } 
     toggleHover() { 
         this.barChart.enableHover = !this.barChart.enableHover; 
         if (this.toggletext == 'Off') this.toggletext = 'On'; 
         else { 
             this.toggletext = 'Off'; 
         } 
     } 
 } 