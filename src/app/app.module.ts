import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { ContentSwitcherComponent } from './shared/component/content-switcher/content-switcher.component';
import { BannerContainerComponent } from './components/banner-container/banner-container.component';
import { CarouselBoxComponent } from './components/carousel-box/carousel-box.component';
import { CollapsableListComponent } from './components/collapsable-list/collapsable-list.component';
import { CarauselComponent } from './components/carausel/carausel.component';
import { TestimonialSlideComponent } from './components/testimonial-slide/testimonial-slide.component';
import { TeamComponent } from './components/team/team.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CubemotionComponent } from './components/cubemotion/cubemotion.component';
import { TermConditionComponent } from './components/term-condition/term-condition.component';
import { BodyComponent } from './components/body/body.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './components/refund-policy/refund-policy.component';
import { SharedModule} from '../app/shared/shared.module';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ServicesPanneComponent } from './components/services-panne/services-panne.component';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { EnrollFormComponent } from './components/enroll-form/enroll-form.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentSwitcherComponent,
    BannerContainerComponent,
    CarouselBoxComponent,
    CollapsableListComponent,
    CarauselComponent,
    TestimonialSlideComponent,
    TeamComponent,
    FooterComponent,
    CubemotionComponent,
    TermConditionComponent,
    BodyComponent,
    PrivacyPolicyComponent,
    RefundPolicyComponent,
    AboutComponent,
    GalleryComponent,
    ServicesPanneComponent,
    ReadMoreComponent,
    EnrollFormComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
