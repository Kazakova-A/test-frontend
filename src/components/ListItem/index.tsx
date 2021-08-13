import React, { memo, useMemo } from 'react';
import { ListGroup } from 'react-bootstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { Languages, Data } from '../../utils/utils';
import { ROUTES } from '../../routes/constants';

import './list-item.css';

interface ListItemProps extends Data {
  lang: Languages;
}

const ListItem = ({
  id,
  title,
  content,
  date,
  lang,
}: ListItemProps): JSX.Element => {
  const text = useMemo(() => (
    content[lang].length <= 50 ? content[lang] : `${content[lang].substr(0, 50)}...`
  ), [content, lang]);

  const redirectUrl = useMemo(() => `${ROUTES.article}/${lang}/${id}`, [id, lang]);

  return (
    <ListGroup.Item>
      <Link className="list-item__link" to={redirectUrl}>
        <h3 className="list-item__title">{title[lang]}</h3>
        <p className="list-item__content">
          {text}
        </p>
        <p className="list-item__date">{moment(date * 1000).format('MMMM D, YYYY')}</p>
      </Link>
    </ListGroup.Item>
  );
};

export default memo(ListItem);
