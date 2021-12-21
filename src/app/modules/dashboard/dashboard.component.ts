import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  title = 'atMovies';

  constructor(@Inject(TranslateService) translate: TranslateService) {
    translate.addLangs(['es']);
    translate.setDefaultLang('es');
  }
}
