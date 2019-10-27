import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Task } from './task';

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

    const tasks = [
      {id: 1, name: 'Turn on laptop', creator: 'Khanh', editedBy: ''},
      {id: 2, name: 'Plug in charger', creator: 'Khanh', editedBy: ''},
      {id: 3, name: 'Open firefox', creator: 'Khanh', editedBy: ''},
      {id: 4, name: 'Slacking at work', creator: 'Khanh', editedBy: ''}
    ];
    return {users, tasks};
  }

  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 4;
  }
}
