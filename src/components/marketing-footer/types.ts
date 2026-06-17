import type { CSSProperties, ReactNode } from 'react';

export type FooterLink = {
  label: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
};

export type FooterLinkSection = {
  title: string;
  links: FooterLink[];
};

export type FooterLinkGroup = {
  title: string;
  sections: FooterLinkSection[];
};

export type FooterContentPair = {
  title: string;
  body: string;
};

export type FooterSocialPlatform = 'linkedin' | 'instagram' | 'twitter' | 'youtube' | 'pinterest';

export type FooterSocialLink = {
  platform: FooterSocialPlatform;
  href: string;
  label?: string;
};

export type MarketingFooterProps = {
  logo?: ReactNode;
  heading?: string;
  contentPairs?: FooterContentPair[];
  trailingContent?: ReactNode;
  linkSections?: FooterLinkSection[];
  linkGroups?: FooterLinkGroup[];
  legalLinks?: FooterLink[];
  socialLinks?: FooterSocialLink[];
  wordmark?: ReactNode;
  copyright?: string;
  className?: string;
  style?: CSSProperties;
};

