import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Components/header/header';
import { Friends } from './Components/friends/friends';
import { Navbar } from './Components/navbar/navbar';
import { Notificatons } from './Components/notificatons/notificatons';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Header , Friends , Navbar , Notificatons],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('workshop');
}
