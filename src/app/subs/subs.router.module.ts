import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubsPage } from './subs.page';
import { ChatPage } from './chat/chat.page';
import { BlogPage } from './blog/blog.page';

const routes: Routes = [
  {
    path: 'subs',
    component: SubsPage,
    children: [
      {
        path: '',
        redirectTo: '/subs/chat',
        pathMatch: 'full',
      },
      {
        path: 'chat/:userID',
        // outlet: 'subs',
        component: ChatPage
      },
      {
        path: 'blog',
        // outlet: 'subs',
        component: BlogPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/subs/chat',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubsPageRoutingModule {}
