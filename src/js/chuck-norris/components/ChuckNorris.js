// @flow
import React from 'react';
import { Grid, Cell } from 'radium-grid';
import GetJokeContainer from './GetJoke';
import chuckNorrisImage from '../../../img/chuck-norris.jpg';
import Container from '../../common/components/Container';

export default () => (
  <Container>
    <h1>Chuck Norris</h1>

    <p>This view demonstrates the use of Saga, an implementation of Side Effects middleware.</p>
    <Grid>
      <Cell width="6/12">
        <GetJokeContainer />
      </Cell>
      <Cell width="6/12" align="right">
        <img src={chuckNorrisImage} alt="Chuck Norris" />
      </Cell>
    </Grid>
  </Container>
);
