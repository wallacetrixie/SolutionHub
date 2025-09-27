export interface Step {
  number: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
  detailedDesc?: string;
  duration?: string;
  tips?: string[];
}

export interface UserType {
  clients: 'clients';
  freelancers: 'freelancers';
}

export type TabType = keyof UserType;

export interface HowItWorksProps {
  className?: string;
  defaultTab?: TabType;
  onTabChange?: (tab: TabType) => void;
  showProgressConnectors?: boolean;
  enableDetailedView?: boolean;
  customSteps?: {
    clients?: Step[];
    freelancers?: Step[];
  };
}

export interface StepCardProps {
  step: Step;
  index: number;
  isActive?: boolean;
  onClick?: (step: Step) => void;
  showConnector?: boolean;
  isLastStep?: boolean;
}