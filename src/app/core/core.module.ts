import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PlTableComponent } from './components/pl-table/pl-table.component';

import { RouterModule } from '@angular/router';

// state management
import { NgxsModule, StateContext } from '@ngxs/store';
import { NgxsRouterPluginModule, RouterStateSerializer } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';

import { environment } from '@env';

import { MaterialModule } from '@shared/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthModule } from './auth/auth.module';

import { ApplicationInsightsModule, AppInsightsService } from '@markpieszak/ng-application-insights';
import { NotificationsComponent } from './components/notifications/notifications.component';

// states
import { SettingsState } from './states/settings.state';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ContentWrapperComponent,
    NavbarComponent,
    PageNotFoundComponent,
    SidenavComponent,
    PlTableComponent,
    NotificationsComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,

    MaterialModule,
    FontAwesomeModule,

    RouterModule,
    HttpClientModule,

    AuthModule,
    // store
    NgxsModule.forRoot([
      SettingsState
    ],
      { developmentMode: !environment.production }
    ),
    NgxsFormPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(),

    ApplicationInsightsModule.forRoot({ instrumentationKeySetLater: true }),
  ],
  providers: [
    AppInsightsService,
  ],
  exports: [
    NavbarComponent,
    SidenavComponent,
    ContentWrapperComponent
  ]
})
export class CoreModule { }
