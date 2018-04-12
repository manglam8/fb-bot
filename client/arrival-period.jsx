/* eslint-disable react/react-in-jsx-scope */

import React from 'react';
import {CellBody, CellFooter, CellHeader, FormCell, Radio} from 'react-weui';

import SelectedIndicator from './selected-indicator';

/**
 * Component for picking how recently released they would like their gifts to be
 * Conditionally renders a checkmark for the selected item
 */

const ArrivalPeriod = ({label, value, selected, setArrivalPeriod}) => {
  return (
    <FormCell radio>
      <CellHeader>
        <Radio
          name={value}
          value={value}
          onClick={() => setArrivalPeriod(value)}
        />
      </CellHeader>

      <SelectedIndicator on={selected} />

      <CellBody className='checkbox-text'>
        {label}
      </CellBody>
    </FormCell>
  );
};

ArrivalPeriod.propTypes = {
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool.isRequired,
  setArrivalPeriod: React.PropTypes.func.isRequired,
};

export default ArrivalPeriod;
