import { Component, OnInit } from '@angular/core';
import { Album } from '../models';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent implements OnInit {
  albums!: Album[];
  loaded: boolean = false;
  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {
    this.getAlbums();
  }
  getAlbums(): void {
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }
  addAlbum(album: Album): void {
    this.albumsService.addAlbum(album).subscribe(() => this.getAlbums());
  }
  updateAlbum(album: Album): void {
    this.albumsService.updateAlbum(album).subscribe(() => this.getAlbums());
  }
  deleteAlbum(album: Album): void {
    this.albumsService.deleteAlbum(album.id).subscribe();
    this.getAlbums();
  }
}
