import React from 'react';
import Breadcrumbs from 'components/common/breadcrumbs';
import Fieldset from 'components/common/form/fieldset';
import DescriptionImage from 'assets/images/car.png';
import projectCalcInitialMock from 'mocks/project-calc-initial';
import { DescriptionS, CalcPanelS } from './calc-panel.style';

const CalcPanel = () => (
  <CalcPanelS>
    <Breadcrumbs />
    <DescriptionS>
      <img src={DescriptionImage} alt="car" />
      <h4>
        0111-P1-Chassis
        <br />
        🇬🇧Banbury, UK
      </h4>
    </DescriptionS>
    {projectCalcInitialMock.map(({ title, items }) => (
      <Fieldset title={title} items={items} key={title} />
    ))}
  </CalcPanelS>
);

export default CalcPanel;
