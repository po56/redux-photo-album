import jsonPlaceholder from "../jsonPlaceholder";

export const getAllAlbums = () => jsonPlaceholder.get("/albums");

export const getAlbumPhotos = (albumId, page) =>
  jsonPlaceholder.get(`/albums/${albumId}/photos?_page=${page}`);
