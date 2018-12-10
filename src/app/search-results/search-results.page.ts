import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStoreService } from '../data-store.service';
import { Room } from '../room-list';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.page.html',
  styleUrls: ['../share/scss/room-list.scss', './search-results.page.scss'],
})
export class SearchResultsPage implements OnInit {

  constructor(
    private navCtrl :NavController,
    private route :ActivatedRoute,
    private dataStore :DataStoreService
  ) { }

  searchRequest :string;
  searchResults :Room[];

  ngOnInit() {
    this.route.queryParams.subscribe(value => {
      this.searchRequest = value.search;
      this.searchResults = this.filterResults();
    })
  }

  filterResults() :Room[] {
    const compareRequest :string = this.searchRequest.toLowerCase();
    const filteredRooms :Room[] = this.dataStore.roomList.filter((data :Room) => {
        const matchingPersons :string[] = data.person.filter(person => {
          return person.toLowerCase().indexOf(compareRequest) !== -1;
        });
        const matchingRooms :string[] = data.room_identifier.filter(room => {
          return room.toLowerCase().indexOf(compareRequest) !== -1;
        });
      return (matchingPersons.length !== 0  || matchingRooms.length !== 0) ? true : false;
    });

    return filteredRooms;
  }

  startNavigation() :void {
    this.navCtrl.navigateForward(['/navigation']);
    // this.navCtrl.navigateForward(['/navigation'], true, {
    //   queryParams: { search: searchRequest }
    // });
  }

  goToRoomList() :void {
    this.navCtrl.navigateForward(['/select']);
  }

}
