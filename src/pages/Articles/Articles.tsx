/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { memo, useContext } from 'react';
import { ListGroup } from 'react-bootstrap';

import ListItem from '../../components/ListItem';
import Wrapper from '../../components/Wrapper';
import { ArticlesContext, Context } from '../../context';
import { Data } from '../../utils/utils';

import './articles.css';

const Articles = (): JSX.Element => {
  const { articles, selectedLanguage, changeLanguage } = (useContext<Context | null>(ArticlesContext)) as Context;

  const onSelectChange = (event: any) => {
    changeLanguage(event.target.value);
  };

  return (
    <Wrapper
      lang={selectedLanguage}
      onChange={onSelectChange}
    >
      <ListGroup className="p-3" variant="flush">
        {articles?.map((item: Data) => (
          item.isActive && (<ListItem key={item.id} lang={selectedLanguage} {...item} />
          )))}
      </ListGroup>
    </Wrapper>
  );
};

export default memo(Articles);
