import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderCtasComponent} from "./components/header-ctas/header-ctas.component";
import {RouterLink} from "@angular/router";
import {NavBarComponent} from "../../nav/components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderCtasComponent, RouterLink, NavBarComponent],
  templateUrl: './app-header.component.html',
})
export class AppHeader {

}
