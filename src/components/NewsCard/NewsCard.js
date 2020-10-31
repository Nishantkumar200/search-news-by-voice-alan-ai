import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@material-ui/core";
import React from "react";
import useStyle from "../NewsCard/style";
import classnames from 'classnames';

const NewsCard = ({ article, i,activeArticle }) => {
  const classes = useStyle();

  const { description, publishedAt, source, title, url, urlToImage } = article;

  return (
    <Card className={classnames(classes.card,activeArticle===i?classes.activeCard:null,)}>
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className={classes.image}
          image={
            urlToImage ||
            "https://image.shutterstock.com/image-vector/newspaper-icon-vector-template-600w-1269716161.jpg"
          }
        />

        <div className={classes.details}>
          <Typography variant="body2" component="h2" color="textSecondary">
            {new Date(publishedAt).toLocaleDateString()}
          </Typography>

          <Typography variant="body2" component="h2" color="textSecondary">
            {source.name}
          </Typography>
        </div>

        <Typography gutterBottom variant="h5" className={classes.title}>
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body1" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          variant="text"
          color="primary"
          href={url}
          target="_blank"
        >
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
