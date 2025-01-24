import { Component, OnInit, ViewChild } from '@angular/core';
import * as worldMapData from '../../../assets/worldMap.json';
// import * as Chart from 'chart.js';
import { NgChartjsDirective } from 'ng-chartjs';
import Chart from 'chart.js/auto';
import { CommonModule } from '@angular/common';
import { MapsModule } from '@syncfusion/ej2-angular-maps';
import { ShareCommonModule } from 'src/app/common/common.module';

@Component({
  standalone: true, imports: [
    ShareCommonModule,
  ],
  selector: 'app-irpackage',
  templateUrl: './irpackage.component.html',
  styleUrls: ['./irpackage.component.scss']
})
export class IRPackageComponent implements OnInit {
  public chart: any;
  public countries = [
    { name: 'Thailand', flag: 'https://flagcdn.com/w320/th.png' },
    { name: 'United States', flag: 'https://flagcdn.com/w320/us.png' },
    { name: 'Japan', flag: 'https://flagcdn.com/w320/jp.png' },
    { name: 'Germany', flag: 'https://flagcdn.com/w320/de.png' },
    { name: 'France', flag: 'https://flagcdn.com/w320/fr.png' },
    { name: 'United Kingdom', flag: 'https://flagcdn.com/w320/gb.png' },
    { name: 'Canada', flag: 'https://flagcdn.com/w320/ca.png' },
    { name: 'Australia', flag: 'https://flagcdn.com/w320/au.png' },
    { name: 'China', flag: 'https://flagcdn.com/w320/cn.png' },
    { name: 'South Korea', flag: 'https://flagcdn.com/w320/kr.png' },
    { name: 'Brazil', flag: 'https://flagcdn.com/w320/br.png' },
    { name: 'India', flag: 'https://flagcdn.com/w320/in.png' },
    { name: 'Italy', flag: 'https://flagcdn.com/w320/it.png' },
    { name: 'Russia', flag: 'https://flagcdn.com/w320/ru.png' },
    { name: 'Mexico', flag: 'https://flagcdn.com/w320/mx.png' },
    { name: 'Spain', flag: 'https://flagcdn.com/w320/es.png' },
    { name: 'Netherlands', flag: 'https://flagcdn.com/w320/nl.png' },
    { name: 'Sweden', flag: 'https://flagcdn.com/w320/se.png' },
    { name: 'Switzerland', flag: 'https://flagcdn.com/w320/ch.png' },
    { name: 'New Zealand', flag: 'https://flagcdn.com/w320/nz.png' }
  ];
  constructor() { }

  ngOnInit(): void {
    this.changeLabels();
    this.createChart();

  }
  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'doughnut', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Asia', 'Africa', 'Europe', 'North America', 'South America',],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 240, 100, 432, 253, 34],
          backgroundColor: [
            '#9a64d9',
            '#62a5d9',
            '#d9629e',
            '#5d5f73',
            '#d9a962',
            '#62cbd9',
          ],
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 1
      }

    });
  }
  changeLabels() {
    // if (this.currentLineChartLabelsIdx === 0) {
    //   this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    //   this.currentLineChartLabelsIdx = 1;
    // } else {
    //   this.lineChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
    //   this.currentLineChartLabelsIdx = 0;
    // }
  }
  title = 'myangularproject';

  public titleOptions: object = {
    text: ''
  }

  public legendOptions: object = {
    visible: false
  }

  public layerOptions: object[] = [{
    dataLabelSettings: {
      visible: true,
      smartLabelMode: 'Trim'
    },
    tooltipSettings: {
      visible: true,
      valuePath: 'Country'
    },
    shapeData: worldMapData,
    shapePropertyPath: 'name',
    shapeDataPath: 'Country',
    shapeSettings: {
      colorValuePath: 'Membership',
      colorMapping: [
        { value: 'Permanent', color: '#bfc9a9' },
        { value: 'Non-Permanent', color: '#6B8E23' }
      ],
      fill: '#E5E5E5'
    },
    dataSource: [
      { Country: 'China', Membership: 'Permanent' },
      { Country: 'France', Membership: 'Permanent' },
      { Country: 'Russia', Membership: 'Permanent' },
      { Country: 'United Kingdom', Membership: 'Permanent' },
      { Country: 'United States', Membership: 'Permanent' },
      { Country: 'Bolivia', Membership: 'Non-Permanent' },
      { Country: 'Eq. Guinea', Membership: 'Non-Permanent' },
      { Country: 'Ethiopia', Membership: 'Non-Permanent' },
      { Country: 'Côte d Ivoire', Membership: 'Permanent' },
      { Country: 'Kazakhstan', Membership: 'Non-Permanent' },
      { Country: 'Kuwait', Membership: 'Non-Permanent' },
      { Country: 'Netherlands', Membership: 'Non-Permanent' },
      { Country: 'Peru', Membership: 'Non-Permanent' },
      { Country: 'Poland', Membership: 'Non-Permanent' },
      { Country: 'Sweden', Membership: 'Non-Permanent' },
    ]
  },
  ]
}
