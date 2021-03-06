import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menuOptions: Observable<Componente[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.menuOptions = this.dataService.getMenuOptions();
  }

}
