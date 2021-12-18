import { Component, OnInit, EventEmitter, Output, Inject  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

@Output() closeSideNav = new EventEmitter();

constructor(@Inject(TranslateService) translate: TranslateService) {
  translate.addLangs(['es']);
  translate.setDefaultLang('es');

  // const browserLang = translate.getBrowserLang();
  // translate.use(browserLang.match(/es/) ? browserLang : 'es');
  // translate.use('es');
}

   onToggleClose() {
    this.closeSideNav.emit();
}

  ngOnInit() {
  }

}
