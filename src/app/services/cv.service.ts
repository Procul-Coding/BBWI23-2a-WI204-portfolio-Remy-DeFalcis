import { Injectable } from '@angular/core';
import { CV } from '../models/cv';

@Injectable({
  providedIn: 'root'
})
export class CVService {

  constructor() { }

  getCVs(): CV[] {
    return [
      new CV('Autobahngarage',2018, 2021),
      new CV('Autoverkehr', 2021, 2024),
      new CV('EuroGarage', 2024, 2024),
    ]
  }
}
