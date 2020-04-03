export interface ICollapsed {
  collapsed: boolean;
}

export interface IAnyChildren {
  children?: any;
}

export interface ILogoProps {
  isDark?: boolean;
  isLoading?: boolean;
}

export interface ILogoSProps extends ILogoProps {
  collapsed: boolean;
}

export interface IProfileAvatarS extends ICollapsed {
  imageUrl: string;
}

export interface ILabelProps {
  suffix?: string;
  title: string;
}

export interface IInputProps extends ILabelProps {
  defaultValue: number;
  step?: number;
}

export interface IInputSProps {
  defaultValue?: number;
  step: number;
}

export interface IFieldsetProps {
  title: string;
  items: IInputProps[];
}

export interface IScenarioKpi {
  title: string;
  items: {
    title?: string;
    value?: string;
    type: 'value' | 'separator';
  }[];
}

export interface IButtonArrowsPropsS {
  arrowType: 'up' | 'down';
}
