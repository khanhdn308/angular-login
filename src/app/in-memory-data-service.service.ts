import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {username: 'Khanh', password: '123' },
      {username: 'Phuc', password: 'SSD' },
      {username: 'NXKhanh', password: 'Diep' },
      {username: 'VA', password: 'luongkho' },
      {username: 'Hoang', password: 'choilon' }
    ];
    return {users};
  }
}
