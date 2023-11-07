import { Injectable } from '@angular/core';
import {Login} from '../models/login.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: Login[] = [];
  private currentUser: Login | null = null;

  constructor() { 
    this.users.push({
      name:'Calvario',
      password:'8597',
    });
    this.users.push({
      name:'Jose',
      password:'8597',
    });

  }
  authenticate(name: string, password: string): boolean {
    const user = this.users.find(u => u.name === name && u.password === password);
    if (user) {
      this.currentUser = user; 
      return true;
    }
    return false;
  }

  getCurrentUser(): Login | null {
    return this.currentUser;
  }

  logout() {
    this.currentUser = null; 
  }
}
