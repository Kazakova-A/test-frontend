/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { memo, useContext, useState } from 'react';
import {
  Container,
  Row,
  Col,
  ListGroup,
} from 'react-bootstrap';

import Dropdown from '../../components/Dropdown';
import ListItem from '../../components/ListItem';

import { ArticlesContext, Data } from '../../context';
import { Languages } from '../../utils/utils';

import './articles.css';

const Articles = (): JSX.Element => {
  const articles = useContext<Data[] | null>(ArticlesContext);

  const [lang, setLang] = useState<Languages>('en');

  const changeLanguage = (event: any) => {
    setLang(event.target.value);
  };

  return (
    <Container className="p-5">
      <Row>
        <Col xs={{ span: 4, offset: 8 }}>
          <Dropdown
            selected={lang}
            onChange={changeLanguage}
          />
        </Col>
      </Row>
      <Row>
        <Col className="p-3">
          <h1 className="title">Articles listing</h1>
        </Col>
      </Row>
      <Row>
        <ListGroup className="p-3" variant="flush">
          {articles?.map((item: Data) => (
            item.isActive && (<ListItem key={item.id} lang={lang} {...item} />
            )))}
        </ListGroup>
      </Row>
    </Container>
  );
};

export default memo(Articles);
