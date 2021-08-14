import React, { memo } from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { useParams, Link, useHistory } from 'react-router-dom';

import Dropdown from '../Dropdown';
import { ROUTES } from '../../routes/constants';

interface WrapperProps {
  lang: string;
  onChange: (event: any) => void;
  children: React.ReactNode | React.ReactElement;
}

const Wrapper = ({ lang, onChange, children }: WrapperProps): JSX.Element => (
  <Container className="p-5">
    <Row className="align-items-center">
      <Col
        className="p-3"
        xs={{ span: 8 }}
        xl={{ span: 9 }}
      >
        <Link to={`/${ROUTES.admin}/${lang}/${ROUTES.article}/${ROUTES.addArticle}`}>
          <span>
            Add article
          </span>
        </Link>
      </Col>
      <Col
        className="p-3"
        xs={{ span: 4 }}
        xl={{ span: 3 }}
      >
        <Dropdown
          selected={lang}
          onChange={onChange}
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <h1 className="title">Articles listing</h1>
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col>
        {children}
      </Col>
    </Row>
  </Container>
);

export default memo(Wrapper);
