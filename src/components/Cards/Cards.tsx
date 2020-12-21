import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Cards = ({
  confirmed = 0,
  recovered = 0,
  deaths = 0,
  lastUpdate = new Date(),
}: dataType) => {
  return (
    <div className={styles.container}>
      <Grid container justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={5}
          lg={2}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              NHIỄM BỆNH
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed} duration={1.8} separator="." />
            </Typography>
            <Typography color="textSecondary">
              Cập nhật: {new Date(lastUpdate).toLocaleString()}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={5}
          lg={2}
          className={cx(styles.card, styles.active)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              ĐANG NHIỄM BỆNH
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed - recovered - deaths}
                duration={1.8}
                separator="."
              />
            </Typography>
            <Typography color="textSecondary">
              Cập nhật: {new Date(lastUpdate).toLocaleString()}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={5}
          lg={2}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              KHỎI BỆNH
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered} duration={1.8} separator="." />
            </Typography>
            <Typography color="textSecondary">
              Cập nhật: {new Date(lastUpdate).toLocaleString()}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={5}
          lg={2}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              TỬ VONG
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths} duration={1.8} separator="." />
            </Typography>
            <Typography color="textSecondary">
              Cập nhật: {new Date(lastUpdate).toLocaleString()}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;