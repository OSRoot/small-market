import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class SelectComponent implements OnInit {
  @Input() data: any[] = []
  @Output() selection = new EventEmitter()
  constructor() { }

  ngOnInit() { }


  filteration(event: any) {
    this.selection.emit(event)

  }


}
