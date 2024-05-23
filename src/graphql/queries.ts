/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getJobRequirement = /* GraphQL */ `query GetJobRequirement($id: ID!) {
  getJobRequirement(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetJobRequirementQueryVariables,
  APITypes.GetJobRequirementQuery
>;
export const listJobRequirements = /* GraphQL */ `query ListJobRequirements(
  $filter: ModelJobRequirementFilterInput
  $limit: Int
  $nextToken: String
) {
  listJobRequirements(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      department
      rank
      title
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListJobRequirementsQueryVariables,
  APITypes.ListJobRequirementsQuery
>;
export const getApplicant = /* GraphQL */ `query GetApplicant($id: ID!) {
  getApplicant(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetApplicantQueryVariables,
  APITypes.GetApplicantQuery
>;
export const listApplicants = /* GraphQL */ `query ListApplicants(
  $filter: ModelApplicantFilterInput
  $limit: Int
  $nextToken: String
) {
  listApplicants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      name
      resume
      contactInformation
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListApplicantsQueryVariables,
  APITypes.ListApplicantsQuery
>;
export const getJobApplication = /* GraphQL */ `query GetJobApplication($id: ID!) {
  getJobApplication(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetJobApplicationQueryVariables,
  APITypes.GetJobApplicationQuery
>;
export const listJobApplications = /* GraphQL */ `query ListJobApplications(
  $filter: ModelJobApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  listJobApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListJobApplicationsQueryVariables,
  APITypes.ListJobApplicationsQuery
>;
export const applicationsByApplicant = /* GraphQL */ `query ApplicationsByApplicant(
  $applicantID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelJobApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  applicationsByApplicant(
    applicantID: $applicantID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ApplicationsByApplicantQueryVariables,
  APITypes.ApplicationsByApplicantQuery
>;
export const applicationsByJobRequirement = /* GraphQL */ `query ApplicationsByJobRequirement(
  $jobRequirementID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelJobApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  applicationsByJobRequirement(
    jobRequirementID: $jobRequirementID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ApplicationsByJobRequirementQueryVariables,
  APITypes.ApplicationsByJobRequirementQuery
>;
export const applicationsByApplicationNumber = /* GraphQL */ `query ApplicationsByApplicationNumber(
  $applicationNumber: String!
  $sortDirection: ModelSortDirection
  $filter: ModelJobApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  applicationsByApplicationNumber(
    applicationNumber: $applicationNumber
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ApplicationsByApplicationNumberQueryVariables,
  APITypes.ApplicationsByApplicationNumberQuery
>;
