import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchedPhotosRequest } from "../redux/actions/photos";
import { Loader, Card, Image, Container } from "semantic-ui-react";

const Album = ({ match, fetchedPhotosRequest, photos }) => {
  const { albumId } = match.params;
  const { loading, error, data } = photos;

  useEffect(() => {
    fetchedPhotosRequest(albumId);
  }, [albumId, fetchedPhotosRequest]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Card.Group itemsPerRow={4}>
        {data.map(photo => (
          <Card key={photo.id}>
            <Image src={photo.url} wrapped />
            <Card.Content>
              <Card.Description>{photo.title}</Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  );
};

export default connect(state => ({ photos: state.photos }), {
  fetchedPhotosRequest
})(Album);
