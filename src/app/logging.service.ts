import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  log() {
    alert('This is loggin services');
  }
  constructor() { }

}
