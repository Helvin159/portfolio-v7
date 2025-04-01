/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    users: User;
    projects: Project;
    previousProjects: PreviousProject;
    languages: Language;
    skills: Skill;
    frameworks: Framework;
    reviews: Review;
    media: Media;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    projects: ProjectsSelect<false> | ProjectsSelect<true>;
    previousProjects: PreviousProjectsSelect<false> | PreviousProjectsSelect<true>;
    languages: LanguagesSelect<false> | LanguagesSelect<true>;
    skills: SkillsSelect<false> | SkillsSelect<true>;
    frameworks: FrameworksSelect<false> | FrameworksSelect<true>;
    reviews: ReviewsSelect<false> | ReviewsSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    pages: Page;
    'meta-details': MetaDetail;
  };
  globalsSelect: {
    pages: PagesSelect<false> | PagesSelect<true>;
    'meta-details': MetaDetailsSelect<false> | MetaDetailsSelect<true>;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword:
    | {
        email: string;
      }
    | {
        username: string;
      };
  login:
    | {
        email: string;
        password: string;
      }
    | {
        password: string;
        username: string;
      };
  registerFirstUser: {
    password: string;
    username: string;
    email: string;
  };
  unlock:
    | {
        email: string;
      }
    | {
        username: string;
      };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name: {
    first: string;
    middle?: string | null;
    last: string;
    suffix?:
      | (
          | 'Junior'
          | 'Senior'
          | 'I'
          | 'II'
          | 'III'
          | 'IV'
          | 'V'
          | 'United States Army'
          | 'United States Navy'
          | 'United States Air Force'
          | 'United States Marine Corps'
          | 'United States Coast Guard'
          | 'Retired'
          | 'Ph.D.'
          | 'M.D.'
          | 'Esq.'
          | 'Certified Public Accountant'
          | 'Doctor of Dental Surgery'
          | 'Doctor of Veterinary Medicine'
          | 'Doctor of Education'
          | 'Master of Business Administration'
          | 'Masters of Science'
        )
      | null;
    preferred?: string | null;
    full?: string | null;
  };
  address?: {
    line1?: string | null;
    line2?: string | null;
    postalCode?: string | null;
    locality?: string | null;
    administrativeArea?: string | null;
    subAdministtrativeArea?: string | null;
    countryCode?: string | null;
    langCode?: string | null;
  };
  emails?:
    | {
        email?: string | null;
        type?: ('primary' | 'secondary' | 'work') | null;
        verified?: boolean | null;
        id?: string | null;
      }[]
    | null;
  phones?:
    | {
        countryCode?: number | null;
        number?: number | null;
        type?: ('mobile' | 'home' | 'work') | null;
        isPrimary?: boolean | null;
        verified?: boolean | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  username: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects".
 */
export interface Project {
  id: string;
  title?: string | null;
  url?: string | null;
  featured?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "previousProjects".
 */
export interface PreviousProject {
  id: string;
  title?: string | null;
  url?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "languages".
 */
export interface Language {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "skills".
 */
export interface Skill {
  id: string;
  title?: string | null;
  expirienceYears?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "frameworks".
 */
export interface Framework {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "reviews".
 */
export interface Review {
  id: string;
  name: {
    first: string;
    middle?: string | null;
    last: string;
    suffix?:
      | (
          | 'Junior'
          | 'Senior'
          | 'I'
          | 'II'
          | 'III'
          | 'IV'
          | 'V'
          | 'United States Army'
          | 'United States Navy'
          | 'United States Air Force'
          | 'United States Marine Corps'
          | 'United States Coast Guard'
          | 'Retired'
          | 'Ph.D.'
          | 'M.D.'
          | 'Esq.'
          | 'Certified Public Accountant'
          | 'Doctor of Dental Surgery'
          | 'Doctor of Veterinary Medicine'
          | 'Doctor of Education'
          | 'Master of Business Administration'
          | 'Masters of Science'
        )
      | null;
    preferred?: string | null;
    full?: string | null;
  };
  emails?:
    | {
        email?: string | null;
        type?: ('primary' | 'secondary' | 'work') | null;
        verified?: boolean | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'projects';
        value: string | Project;
      } | null)
    | ({
        relationTo: 'previousProjects';
        value: string | PreviousProject;
      } | null)
    | ({
        relationTo: 'languages';
        value: string | Language;
      } | null)
    | ({
        relationTo: 'skills';
        value: string | Skill;
      } | null)
    | ({
        relationTo: 'frameworks';
        value: string | Framework;
      } | null)
    | ({
        relationTo: 'reviews';
        value: string | Review;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  name?:
    | T
    | {
        first?: T;
        middle?: T;
        last?: T;
        suffix?: T;
        preferred?: T;
        full?: T;
      };
  address?:
    | T
    | {
        line1?: T;
        line2?: T;
        postalCode?: T;
        locality?: T;
        administrativeArea?: T;
        subAdministtrativeArea?: T;
        countryCode?: T;
        langCode?: T;
      };
  emails?:
    | T
    | {
        email?: T;
        type?: T;
        verified?: T;
        id?: T;
      };
  phones?:
    | T
    | {
        countryCode?: T;
        number?: T;
        type?: T;
        isPrimary?: T;
        verified?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  username?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects_select".
 */
export interface ProjectsSelect<T extends boolean = true> {
  title?: T;
  url?: T;
  featured?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "previousProjects_select".
 */
export interface PreviousProjectsSelect<T extends boolean = true> {
  title?: T;
  url?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "languages_select".
 */
export interface LanguagesSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "skills_select".
 */
export interface SkillsSelect<T extends boolean = true> {
  title?: T;
  expirienceYears?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "frameworks_select".
 */
export interface FrameworksSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "reviews_select".
 */
export interface ReviewsSelect<T extends boolean = true> {
  name?:
    | T
    | {
        first?: T;
        middle?: T;
        last?: T;
        suffix?: T;
        preferred?: T;
        full?: T;
      };
  emails?:
    | T
    | {
        email?: T;
        type?: T;
        verified?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  pages?:
    | {
        title?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "meta-details".
 */
export interface MetaDetail {
  id: string;
  title?: string | null;
  description?: string | null;
  metaOgDetails?: {
    image?: string | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  pages?:
    | T
    | {
        title?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "meta-details_select".
 */
export interface MetaDetailsSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  metaOgDetails?:
    | T
    | {
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}