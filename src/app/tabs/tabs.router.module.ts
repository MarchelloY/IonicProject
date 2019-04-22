import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'postlist',
        children: [
          {
            path: '',
            loadChildren: '../postlist/postlist.module#PostlistPageModule'
          }
        ]
      },
      {
        path: 'categorylist',
        children: [
          {
            path: '',
            loadChildren: '../categorylist/categorylist.module#CategorylistPageModule'
          }
        ]
      },
      {
        path: 'authorlist',
        children: [
          {
            path: '',
            loadChildren: '../authorlist/authorlist.module#AuthorlistPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/postlist',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/postlist',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
