/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createJobRequirement = /* GraphQL */ `mutation CreateJobRequirement(
  $input: CreateJobRequirementInput!
  $condition: ModelJobRequirementConditionInput
) {
  createJobRequirement(input: $input, condition: $condition) {
    id
    department
    function
    rank
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateJobRequirementMutationVariables,
  APITypes.CreateJobRequirementMutation
>;
export const updateJobRequirement = /* GraphQL */ `mutation UpdateJobRequirement(
  $input: UpdateJobRequirementInput!
  $condition: ModelJobRequirementConditionInput
) {
  updateJobRequirement(input: $input, condition: $condition) {
    id
    department
    function
    rank
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateJobRequirementMutationVariables,
  APITypes.UpdateJobRequirementMutation
>;
export const deleteJobRequirement = /* GraphQL */ `mutation DeleteJobRequirement(
  $input: DeleteJobRequirementInput!
  $condition: ModelJobRequirementConditionInput
) {
  deleteJobRequirement(input: $input, condition: $condition) {
    id
    department
    function
    rank
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteJobRequirementMutationVariables,
  APITypes.DeleteJobRequirementMutation
>;
export const createApplicant = /* GraphQL */ `mutation CreateApplicant(
  $input: CreateApplicantInput!
  $condition: ModelApplicantConditionInput
) {
  createApplicant(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateApplicantMutationVariables,
  APITypes.CreateApplicantMutation
>;
export const updateApplicant = /* GraphQL */ `mutation UpdateApplicant(
  $input: UpdateApplicantInput!
  $condition: ModelApplicantConditionInput
) {
  updateApplicant(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateApplicantMutationVariables,
  APITypes.UpdateApplicantMutation
>;
export const deleteApplicant = /* GraphQL */ `mutation DeleteApplicant(
  $input: DeleteApplicantInput!
  $condition: ModelApplicantConditionInput
) {
  deleteApplicant(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteApplicantMutationVariables,
  APITypes.DeleteApplicantMutation
>;
export const createJobApplication = /* GraphQL */ `mutation CreateJobApplication(
  $input: CreateJobApplicationInput!
  $condition: ModelJobApplicationConditionInput
) {
  createJobApplication(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateJobApplicationMutationVariables,
  APITypes.CreateJobApplicationMutation
>;
export const updateJobApplication = /* GraphQL */ `mutation UpdateJobApplication(
  $input: UpdateJobApplicationInput!
  $condition: ModelJobApplicationConditionInput
) {
  updateJobApplication(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateJobApplicationMutationVariables,
  APITypes.UpdateJobApplicationMutation
>;
export const deleteJobApplication = /* GraphQL */ `mutation DeleteJobApplication(
  $input: DeleteJobApplicationInput!
  $condition: ModelJobApplicationConditionInput
) {
  deleteJobApplication(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteJobApplicationMutationVariables,
  APITypes.DeleteJobApplicationMutation
>;
