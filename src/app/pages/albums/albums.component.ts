import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { AlbumsService } from 'src/app/shared/services/albums.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PhotosService } from 'src/app/shared/services/photos.service';
import { AlbumModel } from '../../shared/models/album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
  providers: [AlbumsService, PhotosService]
})
export class AlbumsComponent implements OnInit {
  albums$: Observable<AlbumModel[]>;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly albumsService: AlbumsService,
    private readonly photosService: PhotosService,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.fetchAlbums();
  }

  navigateToPhotosPage(album: AlbumModel): void {
    this.router.navigate([album.id, 'photos'], { relativeTo: this.activatedRoute });
  }

  private fetchAlbums(): void {
    this.albums$ = this.authService.getLoggedUser().pipe(
      mergeMap(user => this.albumsService.fetchAlbums(user.id)),
      mergeMap(albums => forkJoin(albums.map(this.getAlbumWithThumbnail.bind(this))))
    );
  }

  private getAlbumWithThumbnail(album: AlbumModel): Observable<AlbumModel> {
    return this.photosService.fetchFirstPhotoFromAlbum(album.id).pipe(map(photo => ({ ...album, thumbnailUrl: photo.thumbnailUrl })));
  }
}
