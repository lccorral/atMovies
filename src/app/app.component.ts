import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atMovies';

  constructor(@Inject(TranslateService) translate: TranslateService) {
    translate.addLangs(['es']);
    translate.setDefaultLang('es');

    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/es/) ? browserLang : 'es');
    // translate.use('es');
  }
}
