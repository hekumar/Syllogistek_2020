import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermConditionComponent } from './components/term-condition/term-condition.component';
import { BodyComponent } from './components/body/body.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './components/refund-policy/refund-policy.component';


const routes: Routes = [
  { path:'', pathMatch:'full', component: BodyComponent },
  { path: 'term', component: TermConditionComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'refund-policy', component: RefundPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
