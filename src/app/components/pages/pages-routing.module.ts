import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BackendpageComponent } from './backendpage/backendpage.component';
import { ChangepasspageComponent } from './changepasspage/changepasspage.component';
import { ConactComponent } from './conact/conact.component';
import { ConstantpageComponent } from './constantpage/constantpage.component';
import { CreditpageComponent } from './creditpage/creditpage.component';
import { DangermessageComponent } from './dangermessage/dangermessage.component';
import { DocumentpageComponent } from './documentpage/documentpage.component';
import { EmailpageComponent } from './emailpage/emailpage.component';
import { EmptypageComponent } from './emptypage/emptypage.component';
import { ExtrapageComponent } from './extrapage/extrapage.component';
import { FaqsComponent } from './faqs/faqs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProfileComponent } from './profile/profile.component';
import { QualificationpageComponent } from './qualificationpage/qualificationpage.component';
import { SettingpageComponent } from './settingpage/settingpage.component';
import { SuccessmessageComponent } from './successmessage/successmessage.component';
import { SystemsettingpageComponent } from './systemsettingpage/systemsettingpage.component';
import { WarningmessageComponent } from './warningmessage/warningmessage.component';
import { WinnerComponent } from './winner/winner.component';
import { WithdrawpageComponent } from './withdrawpage/withdrawpage.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'empty-page',
        component: EmptypageComponent
      },
      {
        path: 'faqs',
        component: FaqsComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'invoice',
        component: InvoiceComponent
      },
      {
        path: 'pricing',
        component: PricingComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'Constant',
        component: ConstantpageComponent
      },
      {
        path: 'Extrapage',
        component: ExtrapageComponent
      },
      {
        path: 'Settingpage',
        component: SettingpageComponent
      },  
      {
        path: 'Systemsetpage',
        component:SystemsettingpageComponent
      },
      {
        path: 'Changepasswpage',
        component:ChangepasspageComponent
      },
      {
        path: 'Emailpage',
        component:EmailpageComponent
      },
      {
        path: 'backendpage',
        component:BackendpageComponent
      },
      {
        path: 'creditpage',
        component:CreditpageComponent
      },
      {
        path: 'withdrawpage',
        component:WithdrawpageComponent
      },
      {
        path: 'qualification',
        component:QualificationpageComponent
      },
      {
        path: 'documenttype',
        component:DocumentpageComponent
      },
      {
        path: 'home',
        component:HomeComponent
      },
      {
        path: 'winner',
        component:WinnerComponent
      },
      {
        path: 'contact',
        component:ConactComponent
      },
      {
        path: 'about',
        component:AboutComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  PagesRoutingModule { }