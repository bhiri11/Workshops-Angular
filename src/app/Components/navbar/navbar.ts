import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  links = signal([
    { name:'Accueil', path:'/home' },
    { name:'Profil', path:'#profil' },
    { name:'Conférences', path:'#conference-list' },
    { name:'Détail', path:'#conference' },
    { name:'Amis', path:'#amis' },
    { name:'Notifications', path:'#notifications' }
  ]);
}
