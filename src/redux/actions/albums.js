import { getAllAlbums } from "../../api/albums";
import {
  FETCHED_ALBUMS_REQUEST,
  FETCHED_ALBUMS_SUCCESS,
  FETCHED_ALBUMS_ERROR
} from "./actionTypes";

export const fetchAlbumsRequested = () => async dispatch => {
  dispatch({ type: FETCHED_ALBUMS_REQUEST });

  try {
    const albums = await getAllAlbums();
    dispatch({ type: FETCHED_ALBUMS_SUCCESS, payload: albums.data });
  } catch (e) {
    dispatch({ type: FETCHED_ALBUMS_ERROR, payload: e });
  }
};
