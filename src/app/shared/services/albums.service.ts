import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlbumNotFoundError } from '../errors/album-not-found-error';
import { AlbumModel } from '../models/album.model';

@Injectable()
export class AlbumsService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {}

  fetchAlbums(userId: number): Observable<AlbumModel[]> {
    return this.httpClient.get<AlbumModel[]>(`${this.baseUrl}/albums?userId=${userId}`);
  }

  fetchAlbumById(id: number): Observable<AlbumModel | AlbumNotFoundError> {
    return this.httpClient.get<AlbumModel | {}>(`${this.baseUrl}/albums/${id}`).pipe(
      map(album => {
        return album === {} ? new AlbumNotFoundError() : (album as AlbumModel);
      })
    );
  }
}
