import React from 'react';
import ComponentExample from '../ComponentExample';
import { TreePicker } from '../../rsuiteSource';
import data from '../../../resources/data/city';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./inline.md'),
  require('./placement.md'),
  require('./disabled.md'),
  //require('./custom.md'),
  //require('./searchable.md')
];

export default () => {
  return (
    <ComponentExample
      context={context}
      examples={examples}
      dependencies={{
        TreePicker,
        data
      }}
    />
  );
};