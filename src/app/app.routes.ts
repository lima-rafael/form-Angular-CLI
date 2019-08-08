import { Routes, RouterModule } from '@angular/router';
import { CadastroPageComponent } from './pages/cadastro-page/cadastro-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AlunosPageComponent } from './pages/alunos-page/alunos-page.component';

const routes: Routes = [
    //login
    {
        path: '',
        component: LoginPageComponent
    },
    
    //alunos
    {
        path: 'alunos',
        component: AlunosPageComponent
    },

    //matricula
    {
        path: 'cadastro-aluno',
        component: CadastroPageComponent
    },
    
    //hendling 404
    {
        path:'**',
        component: ErrorPageComponent
    }
];

//exportando components de rotas
export const RoutingModule = RouterModule.forRoot(routes)