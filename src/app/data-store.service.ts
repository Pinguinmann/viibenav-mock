import { Injectable } from '@angular/core';
import { Room } from './room-list';
import { Waypoint } from './waypoints';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() { }

  roomList :Room[] = [
    {
      person: [
        'Peter Griebel',
      ],
      room_identifier: [
        'Zimmer 101',
        'Raum 101',
        'Büro 101'
      ]
    },
    {
      person: [
        'Annette Schuller',
      ],
      room_identifier: [
        'Zimmer 404',
        'Raum 404',
        'Büro 404'
      ]
    },
    {
      person: [
        'Hans Werner',
      ],
      room_identifier: [
        'Zimmer 331',
        'Raum 331',
        'Büro 331'
      ]
    },
    {
      person: [
        'David Müller',
      ],
      room_identifier: [
        'Zimmer 443',
        'Raum 443',
        'Büro 443'
      ]
    },
    {
      person: [
        'Hildegard Böhm',
      ],
      room_identifier: [
        'Zimmer 505',
        'Raum 505',
        'Büro 505'
      ]
    }
  ];

  waypoints :Waypoint[] = [
    {
      direction: 'top',
      waypoint: `
        Geradeaus circa 10 Schritte. Vorbei an Zigarettenautomat links,
        durch die Eisentür, bis zur Glastür und dann rechts abbiegen.
      `
    },
    {
      direction: 'top',
      waypoint: `
        Geradeaus circa 9 Schritte. An Wand links halten, vorbei an Heizkörper links,
        rechts halten zweite Tür links, und dann haben Sie Ihr Ziel erreicht.
      `
    }
  ];




}
