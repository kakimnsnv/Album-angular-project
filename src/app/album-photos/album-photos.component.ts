import { Component, OnInit } from '@angular/core';
import { Photo } from '../models';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css',
})
export class AlbumPhotosComponent implements OnInit {
  photos!: Photo[];

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.albumsService.getPhotos(id).subscribe((photos) => {
      this.photos = photos;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
