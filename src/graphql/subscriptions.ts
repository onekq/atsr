/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateJobRequirement = /* GraphQL */ `subscription OnCreateJobRequirement(
  $filter: ModelSubscriptionJobRequirementFilterInput
) {
  onCreateJobRequirement(filter: $filter) {
    id
    department
    rank
    title
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateJobRequirementSubscriptionVariables,
  APITypes.OnCreateJobRequirementSubscription
>;
export const onUpdateJobRequirement = /* GraphQL */ `subscription OnUpdateJobRequirement(
  $filter: ModelSubscriptionJobRequirementFilterInput
) {
  onUpdateJobRequirement(filter: $filter) {
    id
    department
    rank
    title
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateJobRequirementSubscriptionVariables,
  APITypes.OnUpdateJobRequirementSubscription
>;
export const onDeleteJobRequirement = /* GraphQL */ `subscription OnDeleteJobRequirement(
  $filter: ModelSubscriptionJobRequirementFilterInput
) {
  onDeleteJobRequirement(filter: $filter) {
    id
    department
    rank
    title
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteJobRequirementSubscriptionVariables,
  APITypes.OnDeleteJobRequirementSubscription
>;
export const onCreateApplicant = /* GraphQL */ `subscription OnCreateApplicant(
  $filter: ModelSubscriptionApplicantFilterInput
  $id: String
) {
  onCreateApplicant(filter: $filter, id: $id) {
    id
    email
    name
    resume
    contactInformation
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateApplicantSubscriptionVariables,
  APITypes.OnCreateApplicantSubscription
>;
export const onUpdateApplicant = /* GraphQL */ `subscription OnUpdateApplicant(
  $filter: ModelSubscriptionApplicantFilterInput
  $id: String
) {
  onUpdateApplicant(filter: $filter, id: $id) {
    id
    email
    name
    resume
    contactInformation
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateApplicantSubscriptionVariables,
  APITypes.OnUpdateApplicantSubscription
>;
export const onDeleteApplicant = /* GraphQL */ `subscription OnDeleteApplicant(
  $filter: ModelSubscriptionApplicantFilterInput
  $id: String
) {
  onDeleteApplicant(filter: $filter, id: $id) {
    id
    email
    name
    resume
    contactInformation
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteApplicantSubscriptionVariables,
  APITypes.OnDeleteApplicantSubscription
>;
export const onCreateJobApplication = /* GraphQL */ `subscription OnCreateJobApplication(
  $filter: ModelSubscriptionJobApplicationFilterInput
  $applicantID: String
) {
  onCreateJobApplication(filter: $filter, applicantID: $applicantID) {
    id
    applicantID
    jobRequirementID
    applicationNumber
    status
    passcode
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateJobApplicationSubscriptionVariables,
  APITypes.OnCreateJobApplicationSubscription
>;
export const onUpdateJobApplication = /* GraphQL */ `subscription OnUpdateJobApplication(
  $filter: ModelSubscriptionJobApplicationFilterInput
  $applicantID: String
) {
  onUpdateJobApplication(filter: $filter, applicantID: $applicantID) {
    id
    applicantID
    jobRequirementID
    applicationNumber
    status
    passcode
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateJobApplicationSubscriptionVariables,
  APITypes.OnUpdateJobApplicationSubscription
>;
export const onDeleteJobApplication = /* GraphQL */ `subscription OnDeleteJobApplication(
  $filter: ModelSubscriptionJobApplicationFilterInput
  $applicantID: String
) {
  onDeleteJobApplication(filter: $filter, applicantID: $applicantID) {
    id
    applicantID
    jobRequirementID
    applicationNumber
    status
    passcode
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteJobApplicationSubscriptionVariables,
  APITypes.OnDeleteJobApplicationSubscription
>;
