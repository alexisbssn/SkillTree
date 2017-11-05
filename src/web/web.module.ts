import { NgModule }      from '@angular/core';
import { HttpModule }      from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SkillTreeModule } from '../tree/skillTree.module';
import { BioModule } from '../sentiers-bio/bio.module';
import { HomepageComponent } from '../sentiers-bio/homepage/homepage.component';
import { UniverseComponent } from '../sentiers-bio/universe/universe.component';
import { RootComponent } from '../tree/root.component';
import { SkillListComponent } from '../tree/skill-list/skill-list.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './notfound/not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'universe', component: UniverseComponent },
  { path: 'skillbook', component: RootComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:[
        BrowserModule,
        HttpModule,
        SkillTreeModule,
        BioModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        HeaderComponent,
        ContentComponent,
        NotFoundComponent
    ],
    bootstrap: [ ContentComponent ]
})
export class WebModule { }
