import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SubsPageRoutingModule } from './subs.router.module';

import { SubsPage } from './subs.page';
import { ChatPage } from './chat/chat.page';
import { BlogPage } from './blog/blog.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SubsPageRoutingModule
  ],
  declarations: [SubsPage, ChatPage, BlogPage]
})
export class SubsPageModule {}
