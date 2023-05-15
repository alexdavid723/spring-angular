import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import{Routes, RouterModule, RouterEvent} from '@angular/router';
import{FormsModule} from '@angular/Forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClientesComponent } from './clientes/clientes.component';
import { FormClienteComponent } from './clientes/form-cliente.component';

const routes:Routes=[
  {
    path:'',redirectTo:'/clientes',pathMatch:'full'
  },
  {
    path:'clientes',component:ClientesComponent
  },
  {
    path:'cliente/form',component:FormClienteComponent
  },
]



@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    FormClienteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
