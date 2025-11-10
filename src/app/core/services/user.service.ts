import { Injectable } from '@angular/core';
import { UserListing } from '@core/models/user-listing.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers(): UserListing[] {
    return [
      {
        id: 1,
        email: 'raph@web.de',
        role: 'admin',
      },
      {
        id: 2,
        email: 'lucy@web.de',
        role: 'user',
      },
    ];
  }
}
