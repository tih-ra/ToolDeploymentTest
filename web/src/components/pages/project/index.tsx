import React from 'react';
import ProjectS from 'components/grids/project.styled';
import CalcPanel from './calc-panel';
import ScenarioPanel from './scenario-panel';

const Project = () => (
  <ProjectS>
    <CalcPanel />
    <ScenarioPanel />
  </ProjectS>
);

export default Project;
