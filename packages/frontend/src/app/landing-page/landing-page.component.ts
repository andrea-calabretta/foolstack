import { Component } from '@angular/core';

interface Module {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  readonly modules: Module[] = [
    {
      number: '01',
      title: 'TypeScript & fondamenta Angular',
      description: 'Tipizzazione, decoratori, standalone components, signals e reactive forms.',
    },
    {
      number: '02',
      title: 'Backend con NestJS',
      description: 'Architettura modulare, dependency injection, controllers e pipes di validazione.',
    },
    {
      number: '03',
      title: 'Database & TypeORM',
      description: 'Modellazione entità, relazioni, migrations e query builder con PostgreSQL.',
    },
    {
      number: '04',
      title: 'Autenticazione & JWT',
      description: 'Access token, refresh token, guards, ruoli e protezione delle route.',
    },
    {
      number: '05',
      title: 'Integrazione full-stack',
      description: 'HttpClient, interceptors, state management e comunicazione API type-safe.',
    },
    {
      number: '06',
      title: 'Deploy & CI/CD',
      description: 'Docker, GitHub Actions, variabili d\'ambiente e deploy su VPS/cloud.',
    },
  ];
}
