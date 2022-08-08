import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { StatusBarComponent } from './main/status-bar/status-bar.component';
import { CardListComponent } from './main/card-list/card-list.component';
import { NavigationTabsComponent } from './main/status-bar/navigation-tabs/navigation-tabs.component';
import { SideTabComponent } from './main/status-bar/side-tab/side-tab.component';
import { CardComponent } from './main/card-list/card/card.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './main/status-bar/side-tab/dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatRadioModule} from '@angular/material/radio';
import { DataTableComponent } from './data-table/data-table.component';
import { FilterPipe } from './filter.pipe';
import {MatDatepickerModule} from '@angular/material/datepicker';
// import {FormGroup, FormControl} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { NgToastModule } from 'ng-angular-popup';
import { ToastrModule } from 'ngx-toastr';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PublishedComponent } from './tables/published/published/published.component';
import { ExpiredComponent } from './tables/expired/expired/expired.component';
import { AllSurveysTableComponent } from './tables/all  surveys/all-surveys-table/all-surveys-table.component';









// Factory function required during AOT compilation
// export function httpTranslateLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);

// }

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }

// export function HttpLoaderFactory(http: Http) {
//   return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
// }

export function HttpLoaderFactory(http:HttpClient)
{
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    StatusBarComponent,
    CardListComponent,
    NavigationTabsComponent,
    SideTabComponent,
    CardComponent,
    DialogComponent,
    DataTableComponent,
    FilterPipe,
    PublishedComponent,
    ExpiredComponent,
    AllSurveysTableComponent,



  ],
  entryComponents:[DialogComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    CommonModule,
    NgToastModule,
    HttpClientModule,


    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
    // ToastrModule.forRoot(),
    // TranslateModule.forRoot(
    //   {
    //     loader:{
    //       provide:TranslateLoader,
    //       useFactory:HttpLoaderFactory,
    //       deps:[HttpClient]
    //     }
    //   })


    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //       useFactory: HttpLoaderFactory,
    //       deps: [HttpClient]
    //   }
    // })


  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
