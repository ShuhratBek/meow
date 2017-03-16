import { BreedsComponent } from './breeds.component';

export const routes = [
  { path: '', children: [
    { path: '', component: BreedsComponent }
  ]}
];
