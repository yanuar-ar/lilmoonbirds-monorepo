import classes from './Banner.module.css';
import Section from '../../layout/Section';
import { Col } from 'react-bootstrap';
import calendar_noun from '../../assets/calendar_noun.png';
import Noun from '../Noun';
import { Trans } from '@lingui/macro';

const Banner = () => {
  return (
    <Section fullWidth={false} className={classes.bannerSection}>
      <div className={classes.wrapper}>
        <h1 style={{ textAlign: 'center' }}>
          <Trans>ONE LIL MOONBIRDS,</Trans>
          <br />
          <Trans>EVERY 30 MINUTES,</Trans>
          <br />
          <Trans>FOREVER.</Trans>
        </h1>
      </div>
      <div style={{ padding: '2rem' }}>
        <Noun imgPath={calendar_noun} alt="noun" />
      </div>
    </Section>
  );
};

export default Banner;
