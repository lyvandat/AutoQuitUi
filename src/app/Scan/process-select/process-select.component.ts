import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-process-select',
  templateUrl: './process-select.component.html',
  styleUrls: ['./process-select.component.css']
})
export class ProcessSelectComponent {
  configIcon = faCoffee;
}
