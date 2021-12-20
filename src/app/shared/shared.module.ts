
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SidenavListComponent } from '../components/sidenav-list/sidenav-list.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { MaterialModule } from '../modules/material.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavListComponent
  ],
  imports: [
    RouterModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    ToolbarComponent,
    SidenavListComponent
  ]
})

export class SharedModule { }
