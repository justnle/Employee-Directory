import React from 'react';

import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Header from '../components/Header';
import BirthBar from '../components/BirthBar';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import Footer from '../components/Footer';

function Main() {
  return (
    <div className='Main'>
      <Header />
      <Container>
        <Row>
          <Col size='md-9' style={{ paddingBottom: 5 }}>
            <BirthBar />
          </Col>
          <Col size='md-3'>
            <SearchBar />
          </Col>
        </Row>

        <Row style={{ paddingTop: 25 }}>
          <Col size='md-12'>
            <Table />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Main;
