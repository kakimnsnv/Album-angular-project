import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, Photo } from './models';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.albumsUrl}/${id}`);
  }

  getPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.albumsUrl}/${id}/photos`);
  }

  addAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.albumsUrl, album);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.albumsUrl}/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<Album> {
    return this.http.delete<Album>(`${this.albumsUrl}/${id}`);
  }
}
