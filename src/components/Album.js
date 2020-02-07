import React, { useEffect, useState, createRef } from "react";
import { connect } from "react-redux";
import { fetchedPhotosRequest } from "../redux/actions/photos";
import {
  Loader,
  Card,
  Image,
  Container,
  Button,
  Segment,
  Grid,
  Visibility
} from "semantic-ui-react";

const Album = ({ match, fetchedPhotosRequest, photos }) => {
  const { albumId } = match.params;
  const { loading, error, data } = photos;
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchedPhotosRequest(albumId, page);
  }, [albumId, fetchedPhotosRequest, page]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Grid>
        <Grid.Row>
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
        </Grid.Row>
        <Grid.Row>
          <Button basic fluid onClick={() => setPage(page + 1)}>
            Load More
          </Button>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default connect(state => ({ photos: state.photos }), {
  fetchedPhotosRequest
})(Album);
