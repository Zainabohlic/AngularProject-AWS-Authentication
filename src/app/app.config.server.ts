// import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
// import { provideServerRendering } from '@angular/platform-server';
// import { appConfig } from './app.config';

// const serverConfig: ApplicationConfig = {
//   providers: [
//     provideServerRendering()
//   ]
// };

// export const config = mergeApplicationConfig(appConfig, serverConfig);
import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { AppRoutingModule } from './app.routes'; // Import your routes
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
   // AppRoutingModule // Include routing configuration
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
