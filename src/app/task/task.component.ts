import { Component, OnInit } from '@angular/core';

import { TASKS } from '../task/mock-task';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[];
  selectedTask: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  // getTask(): Observable<Task[]> {
  //   return this.taskService.getTasks();
  // }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }

    const task = new Task();
    task.name = name;
    task.creator = localStorage.getItem('CURRENT_USER');
    task.editedBy = task.creator;
    this.taskService.addTask(task).subscribe(newTask => {this.tasks.push(newTask); });
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

}
