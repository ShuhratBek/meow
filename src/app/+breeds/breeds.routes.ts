import { BreedListComponent } from './breed-list';
import { BreedViewComponent } from './breed-view';

export const routes = [
  {
      path: '',
      children: [
          {
              path: '',
              component: BreedListComponent
          },
          {
              path: ':id',
              component: BreedViewComponent
          }
      ]
  }
];
