import { Routes, RouterModule } from '@angular/router';
import { CadastroPageComponent } from './pages/cadastro-page/cadastro-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
    //matricula
    {
        path: '',
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