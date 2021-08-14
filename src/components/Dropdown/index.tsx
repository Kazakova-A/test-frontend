import React, { memo } from 'react';
import { Form } from 'react-bootstrap';

import { SELECT_VALUES } from '../../utils/utils';
import './dropdown.css';

interface DropdownProps {
  selected: string;
  onChange: (event: any) => void;
}

const Dropdown = ({
  selected,
  onChange,
}: DropdownProps): JSX.Element => (
  <div className="dropdown-container">
    <p>Lang:</p>
    <Form.Select onChange={(e) => onChange(e)}>
      {SELECT_VALUES.map((item) => (
        <option
          selected={selected === item.key}
          key={item.key}
          value={item.key}
        >
          {item.title}
        </option>
      ))}
    </Form.Select>
  </div>
);

export default memo(Dropdown);
