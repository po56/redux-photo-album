import jsonPlaceholder from "../jsonPlaceholder";

export const getAllAlbums = () => jsonPlaceholder.get("/albums");

export const getAlbumPhotos = albumId =>
  jsonPlaceholder.get(`/albums/${albumId}/photos`);
