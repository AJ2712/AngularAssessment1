import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrl: './advertisements.component.css'
})
export class AdvertisementsComponent implements OnInit {
  adImages: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.selectRandomImages();
  }

  selectRandomImages() {
    const numImagesToDisplay = 2;
    const totalImagesAvailable = 5;
    const selectedIndices: number[] = [];

    while (selectedIndices.length < numImagesToDisplay) {
      const randomIndex = Math.floor(Math.random() * totalImagesAvailable);
      if (!selectedIndices.includes(randomIndex)) {
        selectedIndices.push(randomIndex);
        this.adImages.push(`../../../assets/ads/ad${randomIndex + 1}.jpg`);
      }
    }
  }
}
