import { Component, OnInit } from '@angular/core';
import { IMenu } from '../../interfaces/IMenu';
import { VersionService } from '../../services/version.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpclientService } from '../../services/http-client-services.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  menuList: Observable<IMenu[]>;

  constructor(
    private versionService: VersionService,
    private httpService: HttpclientService
  ) {

this.menuList = this.httpService.getList<IMenu>('assets/menu.json');
console.log(this.menuList);
  }

  ngOnInit() {
    this.menuList = this.httpService.getList<IMenu>('assets/menu.json');
  }
}
