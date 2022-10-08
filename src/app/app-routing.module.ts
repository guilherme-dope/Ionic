import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    path: '',
    redirectTo: 'app-acad01',
    pathMatch: 'full'
  },
  {
    path: 'app-acad01',
    loadChildren: () => import('./paginas/app-acad01/app-acad01.module').then( m => m.AppAcad01PageModule)
  },
  {
    path: 'dados-pessoais',
    loadChildren: () => import('./paginas/dados-pessoais/dados-pessoais.module').then( m => m.DadosPessoaisPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('./paginas/notas/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'financeiro',
    loadChildren: () => import('./paginas/financeiro/financeiro.module').then( m => m.FinanceiroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
