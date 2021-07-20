import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionComponent } from './components/accordion/accordion.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PostExcerptComponent } from './components/post-excerpt/post-excerpt.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PostComponent } from './pages/post/post.component';
import { FeaturedImageComponent } from './components/featured-image/featured-image.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoaderComponent,
    PostExcerptComponent,
    FooterComponent,
    HeaderComponent,
    PostComponent,
    FeaturedImageComponent,
    SkillComponent,
    ProjectsComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
