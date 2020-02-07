import jsonPlaceholder from "../jsonPlaceholder";

export const getAllAlbums = () => jsonPlaceholder.get("/albums");
