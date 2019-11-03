/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.4.1
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bugie-api-ts
 * Do not edit these files manually.
 */

import {
  DateRange
} from '../common';
import {
  UserInfoCard
} from '../user/interfaces';

export interface ApiUsage {
  /** The date range for the data being reported. */
  readonly range: DateRange;
  /** Counts for on API calls made for the time range. */
  readonly apiCalls: Series[];
  /**
   * Instances of blocked requests or requests that crossed the warn threshold during
   * the time range.
   */
  readonly throttledRequests: Series[];
}

export interface Series {
  /** Collection of samples with time and value. */
  readonly datapoints: Datapoint[];
  /** Target to which to datapoints apply. */
  readonly target: string;
}

export interface Datapoint {
  /** Timestamp for the related count. */
  readonly time: string;
  /** Count associated with timestamp */
  readonly count?: number;
}

export interface Application {
  readonly applicationType: OAuthApplicationType;
  /** Unique ID assigned to the application */
  readonly applicationId: number;
  /** Name of the application */
  readonly name: string;
  /** URL used to pass the user's authorization code to the application */
  readonly redirectUrl: string;
  /** Link to website for the application where a user can learn more about the app. */
  readonly link: string;
  /** Permissions the application needs to work */
  readonly scope: string;
  /** Value of the Origin header sent in requests generated by this application. */
  readonly origin: string;
  /** Current status of the application. */
  readonly status: ApplicationStatus;
  /** Date the application was first added to our database. */
  readonly creationDate: string;
  /** Date the application status last changed. */
  readonly statusChanged: string;
  /** Date the first time the application status entered the 'Public' status. */
  readonly firstPublished: string;
  /**
   * List of team members who manage this application on Bungie.net. Will always
   * consist of at least the application owner.
   */
  readonly team: ApplicationDeveloper[];
}

export const enum OAuthApplicationType {
  None = 0,
  /**
   * Indicates the application is server based and can keep its secrets from end
   * users and other potential snoops.
   */
  Confidential = 1,
  /**
   * Indicates the application runs in a public place, and it can't be trusted to
   * keep a secret.
   */
  Public = 2
}

export const enum ApplicationStatus {
  /** No value assigned */
  None = 0,
  /**
   * Application exists and works but will not appear in any public catalog. New
   * applications start in this state, test applications will remain in this state.
   */
  Private = 1,
  /** Active applications that can appear in an catalog. */
  Public = 2,
  /**
   * Application disabled by the owner. All authorizations will be treated as
   * terminated while in this state. Owner can move back to private or public state.
   */
  Disabled = 3,
  /**
   * Application has been blocked by Bungie. It cannot be transitioned out of this
   * state by the owner. Authorizations are terminated when an application is in this
   * state.
   */
  Blocked = 4
}

export interface ApplicationDeveloper {
  readonly role: DeveloperRole;
  readonly apiEulaVersion: number;
  readonly user: UserInfoCard;
}

export const enum DeveloperRole {
  None = 0,
  Owner = 1,
  TeamMember = 2
}
