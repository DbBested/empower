// Typed access to page copy. Edit wording in content/content.json (the data
// file), never in components. This module is the single typed import point so a
// renamed/removed field surfaces as a type error in the consuming page.

import data from "../../content/content.json";

/** A person shown on /our-team (founder or provisional officer). */
export interface TeamPerson {
  name: string;
  role: string;
  description?: string;
  /** May be an empty string when there's no published email. */
  email?: string;
  imageUrl?: string;
}

export interface AboutService {
  title: string;
  description: string;
}

export interface AboutCopy {
  aboutEmpower: string;
  whatWeDo: string;
  mission: string;
  services: AboutService[];
}

export interface TeamCopy {
  founder: TeamPerson;
  provisionalOfficers: TeamPerson[];
}

export interface TutorsCopy {
  whatTheyDo: string;
  benefits: string[];
  responsibilities: string[];
}

/**
 * An officer role's responsibilities are either a flat list or grouped under
 * sub-headings (Secretary, Historian). Components must handle both — see
 * <RoleResponsibilities />.
 */
export type Responsibilities = string[] | Record<string, string[]>;

export interface OfficerRole {
  role: string;
  expectations: string[];
  responsibilities: Responsibilities;
}

export interface StartAChapterCopy {
  interestForm: string;
  steps: string[];
}

export interface ContactCopy {
  email: string;
  instagram: string;
  instagramUrl?: string;
  note?: string;
}

interface SiteCopy {
  about: AboutCopy;
  team: TeamCopy;
  tutors: TutorsCopy;
  officers: OfficerRole[];
  startAChapter: StartAChapterCopy;
  parents: string[];
  contact: ContactCopy;
}

const content = data as unknown as SiteCopy;

export const about = content.about;
export const team = content.team;
export const tutors = content.tutors;
export const officers = content.officers;
export const startAChapter = content.startAChapter;
export const parents = content.parents;
export const contact = content.contact;
