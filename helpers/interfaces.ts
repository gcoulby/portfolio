export interface IPost {
  title: string;
  slug: string;
  keywords: string[];
  description: string;
}

export interface ISocialIcon {
  title: string;
  url: string;
  icon: React.ReactElement;
}

export interface INavItem {
  anchor: string;
  icon: React.ReactElement;
  title: string;
  active: boolean;
}

export interface IEducationItem {
  institution: string;
  startYear: string;
  endYear: string;
  qualification: string;
  description: string;
}

export interface IExperienceItem {
  role: string;
  company: string;
  startYear: string;
  endYear: string;
  description: string;
}

export interface IPublicationItem {
  title: string;
  publicationType: string;
  publicationDate: Date;
  publisher: string;
  doi: string;
  abstract: string;
  keywords: string[];
  authorType: string;
}

export interface ISkillItem {
  title: string;
  level: number;
  icon: React.ReactElement;
}

export interface IAwardItem {
  title: string;
  year: string;
  description: string;
}
