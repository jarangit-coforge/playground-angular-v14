import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simulator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {
  @Input() html: any
  constructor() { }

  ngOnInit(): void {
  }

}
