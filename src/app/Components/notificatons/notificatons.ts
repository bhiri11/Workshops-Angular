import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notificatons',
  imports: [],
  templateUrl: './notificatons.html',
  styleUrl: './notificatons.css',
})
export class Notificatons {
  notifications = signal<{message: string}[]>([
    {message: 'Une nouvelle conférence est disponible.'},
    {message: 'Sami vous a envoyé une invitation.'},
    {message: 'vous avez 2 nouvelles notifications.'}
  ]);
  show=signal(false);
  bntTxt='afficher les notifications';
  ShowNotifications() {
    this.show.set(!this.show());
    this.bntTxt=this.show()?'cacher les notifications':'afficher les notifications';
  }

}
