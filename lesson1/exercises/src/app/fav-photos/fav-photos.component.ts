import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/06/19/16/garfield-mondays.jpg?width=990';
  image3 = 'https://www.gannett-cdn.com/presto/2019/12/19/PBIN/c15dd0b9-ee21-4a95-903a-07650cc37d9c-Lucy.jpg?width=660&height=495&fit=crop&format=pjpg&auto=webp';

  constructor() { }

  ngOnInit() {
  }

}