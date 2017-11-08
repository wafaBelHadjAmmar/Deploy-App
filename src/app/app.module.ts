import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes , RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PersonneComponent } from './Personne/personne.component';
import { ListComponent } from './Etudiant/list.component';
import { DetailComponent } from './Etudiant/detail.component';
import { AccueilComponent } from './Etudiant/accueil.component';
import { FilsComponent } from './fils.component';

// const listPath: Routes = [
//   {path: '' , redirectTo: 'list' , pathMatch: 'full' },
//   {path: 'accueil' , component: AccueilComponent },
//   {path: 'list' , component: ListComponent },
//   {path: 'detail' , component: DetailComponent },
//   {path: '**' , component: AccueilComponent }
//
// ]
@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    ListComponent,
    DetailComponent,
    AccueilComponent,
    FilsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
    // RouterModule.forRoot(listPath)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
