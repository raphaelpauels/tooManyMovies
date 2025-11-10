import { Component, inject, OnInit } from '@angular/core';
import { UserListing } from '@core/models/user-listing.model';
import { UserService } from '@core/services/user.service';
import { ListingTable } from '@components/common/listing-table/listing-table';

@Component({
  selector: 'app-user-index',
  imports: [ListingTable],
  templateUrl: './user-index.html',
  styleUrl: './user-index.scss',
})
export class UserIndex implements OnInit {
  private readonly _userService = inject(UserService);
  users: UserListing[] = [];

  onClickDetails(id: string | number) {
    console.log('Details for user: ', id);
  }

  ngOnInit(): void {
    this.users = this._userService.getUsers();
  }
}
