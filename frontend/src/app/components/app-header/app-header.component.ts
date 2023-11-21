import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderCtasComponent} from "./components/header-ctas/header-ctas.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderCtasComponent],
  templateUrl: './app-header.component.html',
})
export class AppHeader {

}
