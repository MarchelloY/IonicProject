import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'postlist', loadChildren: './postlist/postlist.module#PostlistPageModule' },
  { path: 'categorylist', loadChildren: './categorylist/categorylist.module#CategorylistPageModule' },
  { path: 'authorlist', loadChildren: './authorlist/authorlist.module#AuthorlistPageModule' },
  { path: 'postlist', loadChildren: './postlist/postlist.module#PostlistPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
