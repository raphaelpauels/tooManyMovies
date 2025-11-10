import { Injectable, Signal, signal } from '@angular/core';
import { UserRegisterForm } from '@core/models/user-register.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isConntected = signal<boolean>(true);
  isConnected: Signal<boolean> = this._isConntected.asReadonly();

  login(email: String, password: String) {
    console.log('logged in: ', email, password);

    this._isConntected.set(true);
    // TODO call aPI avec credential
    // récuperation du JWT
  }

  logout() {
    this._isConntected.set(false);
  }

  register(form: UserRegisterForm) {
    // TODO call API avec données
    console.log('save user: ', form);
  }
}
