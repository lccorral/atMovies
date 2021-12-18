import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

 @Output() SideNavToggle = new EventEmitter();

 constructor(@Inject(TranslateService) translate: TranslateService) {
  translate.addLangs(['es']);
  translate.setDefaultLang('es');

  // const browserLang = translate.getBrowserLang();
  // translate.use(browserLang.match(/es/) ? browserLang : 'es');
  // translate.use('es');
}

  openSidenav() {
   this.SideNavToggle.emit();
  }
}
