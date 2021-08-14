/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { memo } from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import Dropdown from '../Dropdown';

interface WrapperProps {
  lang: string;
  onChange: (event: any) => void;
  children: React.ReactNode | React.ReactElement;
}

const Wrapper = ({ lang, onChange, children }: WrapperProps): JSX.Element => (
  <Container className="p-5">
    <Row>
      <Col
        className="p-3"
        xs={{ span: 4, offset: 8 }}
        xl={{ span: 3, offset: 9 }}
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
