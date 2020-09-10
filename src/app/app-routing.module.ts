import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermConditionComponent } from './components/term-condition/term-condition.component';
import { BodyComponent } from './components/body/body.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './components/refund-policy/refund-policy.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { EnrollFormComponent } from './components/enroll-form/enroll-form.component';


const routes: Routes = [
  { path:'', pathMatch:'full', component: BodyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'enroll', component: EnrollFormComponent },
  { path: 'term', component: TermConditionComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'refund-policy', component: RefundPolicyComponent },
  { path: 'admin', 
    loadChildren: () => 
    import('../app/admin/admin.module').then(m => m.AdminModule),
    // canActivate: [adminGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash : true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
