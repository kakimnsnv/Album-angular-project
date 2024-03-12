import { Component, OnInit } from '@angular/core';
import { Album } from '../models';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { AlbumsService } from '../albums.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css',
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  title: string = '';
  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum(): void {
    this.albumsService
      .getAlbum(+this.route.snapshot.paramMap.get('id')!)
      .subscribe((album) => {
        this.album = album;
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.album) {
      this.album.title = this.title;
      this.albumsService.updateAlbum(this.album).subscribe(() => this.goBack());
    }
  }
}
