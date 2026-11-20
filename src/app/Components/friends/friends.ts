import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-friends',
  imports: [],
  templateUrl: './friends.html',
  styleUrl: './friends.css',
})
export class Friends {
  friends= signal<{name: string}[]>(
    [
      {name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}, {name: 'David'}, {name: 'Eve'}]);
}
