import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAlbumsRequested } from "../redux/actions/albums";
import { Grid, Card, Container, Image } from "semantic-ui-react";
const placeholderImage =
  "https://react.semantic-ui.com/images/wireframe/image.png";

const Albums = ({ albums, fetchAlbumsRequested }) => {
  useEffect(() => {
    fetchAlbumsRequested();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (albums.error) {
    return <div> An Error Occured </div>;
  }

  if (albums.loading) {
    return <div> loading... </div>;
  }

  return (
    <Container>
      <Card.Group itemsPerRow={4}>
        {albums.data.map(album => (
          <Card onClick={() => console.log("abc")}>
            <Image src={placeholderImage} />
            <Card.Content>
              <Card.Header>{album.title}</Card.Header>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  );
};

const mapStateToProps = ({ albums }) => ({
  albums
});
const mapDispatchToProps = {
  fetchAlbumsRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
