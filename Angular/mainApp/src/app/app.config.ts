import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp,initializeApp } from '@angular/fire/app';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAuth, getAuth } from '@angular/fire/auth';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyCvL9gUkxzKjGV_wWh47Y1GaZ02CldX4ak',
        authDomain: 'ang-chat-e0b27.firebaseapp.com',
        projectId: 'ang-chat-e0b27',
        storageBucket: 'ang-chat-e0b27.firebasestorage.app',
        messagingSenderId: '1073042621035',
        appId: '1:1073042621035:web:b6e888c6ad95e3346c672e',
      })
    ),
    provideAuth(() => getAuth()),
  ],
};
