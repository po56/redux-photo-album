import {
  FETCHED_PHOTOS_REQUEST,
  FETCHED_PHOTOS_ERROR,
  FETCHED_PHOTOS_SUCCESS
} from "./actionTypes";
import { getAlbumPhotos } from "../../api/albums";

export const fetchedPhotosRequest = albumId => async dispatch => {
  dispatch({ type: FETCHED_PHOTOS_REQUEST });
  try {
    const photos = await getAlbumPhotos(albumId);

    dispatch({ type: FETCHED_PHOTOS_SUCCESS, payload: photos.data });
  } catch (e) {
    dispatch({ type: FETCHED_PHOTOS_ERROR, payload: e });
  }
};
