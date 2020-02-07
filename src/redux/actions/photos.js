import {
  FETCHED_PHOTOS_REQUEST,
  FETCHED_PHOTOS_ERROR,
  FETCHED_PHOTOS_SUCCESS
} from "./actionTypes";
import { getAlbumPhotos } from "../../api/albums";
import { memoize } from "lodash";

const getPhotosForAlbum = memoize(async (page, albumId, dispatch) => {
  dispatch({ type: FETCHED_PHOTOS_REQUEST });
  try {
    const photos = await getAlbumPhotos(albumId, page);

    dispatch({ type: FETCHED_PHOTOS_SUCCESS, payload: photos.data });
  } catch (e) {
    dispatch({ type: FETCHED_PHOTOS_ERROR, payload: e });
  }
});

export const fetchedPhotosRequest = (albumId, page) => dispatch => {
  console.log(albumId, page);
  getPhotosForAlbum(page, albumId, dispatch);
};
