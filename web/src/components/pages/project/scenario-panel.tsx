/* eslint no-shadow: ["error", { "allow": ["title"] }] */
import React from 'react';
import uuid from 'react-uuid';
import scenarioKpiMock from 'mocks/scenario-kpi';
import {
  ScenarioPanelS,
  KpiPanelS,
  HeadTitleS,
  KpiBlockS,
  SeparatorS
} from './scenario-panel.style';

const ScenarioPanel = () => (
  <ScenarioPanelS>
    <HeadTitleS>Scenario 1</HeadTitleS>
    {scenarioKpiMock.map(({ title, items }) => (
      <KpiPanelS key={uuid()}>
        <KpiBlockS>{title}</KpiBlockS>
        {items.map(({ title, value, type }) =>
          type === 'separator' ? (
            <SeparatorS key={uuid()} />
          ) : (
            <KpiBlockS key={uuid()}>
              <span>{title}</span>
              {value}
            </KpiBlockS>
          )
        )}
      </KpiPanelS>
    ))}
  </ScenarioPanelS>
);

export default ScenarioPanel;
