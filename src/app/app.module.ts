import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//modulos
import { RoutingModule } from './app.routes';
import { MenuService } from './providers/menu.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CadastroPageComponent } from './pages/cadastro-page/cadastro-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { AlunosComponent } from './components/alunos/alunos.component';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AlunosPageComponent } from './pages/alunos-page/alunos-page.component';
import { AlunoPageComponent } from './pages/aluno-page/aluno-page.component';
import { AlunoComponent } from './components/aluno/aluno.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CadastroComponent,
    CadastroPageComponent,
    ErrorPageComponent,
    MenuComponent,
    AlunosComponent,
    LoginComponent,
    LoginPageComponent,
    AlunosPageComponent,
    AlunoPageComponent,
    AlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
