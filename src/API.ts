/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateJobRequirementInput = {
  id?: string | null,
  department: string,
  rank: string,
  title: string,
  description: string,
};

export type ModelJobRequirementConditionInput = {
  department?: ModelStringInput | null,
  rank?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelJobRequirementConditionInput | null > | null,
  or?: Array< ModelJobRequirementConditionInput | null > | null,
  not?: ModelJobRequirementConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type JobRequirement = {
  __typename: "JobRequirement",
  id: string,
  department: string,
  rank: string,
  title: string,
  description: string,
  jobApplications?: ModelJobApplicationConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelJobApplicationConnection = {
  __typename: "ModelJobApplicationConnection",
  items:  Array<JobApplication | null >,
  nextToken?: string | null,
};

export type JobApplication = {
  __typename: "JobApplication",
  id: string,
  applicantID: string,
  jobRequirementID: string,
  status: string,
  passcode: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateJobRequirementInput = {
  id: string,
  department?: string | null,
  rank?: string | null,
  title?: string | null,
  description?: string | null,
};

export type DeleteJobRequirementInput = {
  id: string,
};

export type CreateApplicantInput = {
  id?: string | null,
  email: string,
  name: string,
  resume: string,
  contactInformation: string,
};

export type ModelApplicantConditionInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  resume?: ModelStringInput | null,
  contactInformation?: ModelStringInput | null,
  and?: Array< ModelApplicantConditionInput | null > | null,
  or?: Array< ModelApplicantConditionInput | null > | null,
  not?: ModelApplicantConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  id?: ModelStringInput | null,
};

export type Applicant = {
  __typename: "Applicant",
  id: string,
  email: string,
  name: string,
  resume: string,
  contactInformation: string,
  jobApplications?: ModelJobApplicationConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateApplicantInput = {
  id: string,
  email?: string | null,
  name?: string | null,
  resume?: string | null,
  contactInformation?: string | null,
};

export type DeleteApplicantInput = {
  id: string,
};

export type CreateJobApplicationInput = {
  id?: string | null,
  applicantID: string,
  jobRequirementID: string,
  status: string,
  passcode: string,
};

export type ModelJobApplicationConditionInput = {
  applicantID?: ModelIDInput | null,
  jobRequirementID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  passcode?: ModelStringInput | null,
  and?: Array< ModelJobApplicationConditionInput | null > | null,
  or?: Array< ModelJobApplicationConditionInput | null > | null,
  not?: ModelJobApplicationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateJobApplicationInput = {
  id: string,
  applicantID?: string | null,
  jobRequirementID?: string | null,
  status?: string | null,
  passcode?: string | null,
};

export type DeleteJobApplicationInput = {
  id: string,
};

export type ModelJobRequirementFilterInput = {
  id?: ModelIDInput | null,
  department?: ModelStringInput | null,
  rank?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelJobRequirementFilterInput | null > | null,
  or?: Array< ModelJobRequirementFilterInput | null > | null,
  not?: ModelJobRequirementFilterInput | null,
};

export type ModelJobRequirementConnection = {
  __typename: "ModelJobRequirementConnection",
  items:  Array<JobRequirement | null >,
  nextToken?: string | null,
};

export type ModelApplicantFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  resume?: ModelStringInput | null,
  contactInformation?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelApplicantFilterInput | null > | null,
  or?: Array< ModelApplicantFilterInput | null > | null,
  not?: ModelApplicantFilterInput | null,
};

export type ModelApplicantConnection = {
  __typename: "ModelApplicantConnection",
  items:  Array<Applicant | null >,
  nextToken?: string | null,
};

export type ModelJobApplicationFilterInput = {
  id?: ModelIDInput | null,
  applicantID?: ModelIDInput | null,
  jobRequirementID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  passcode?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelJobApplicationFilterInput | null > | null,
  or?: Array< ModelJobApplicationFilterInput | null > | null,
  not?: ModelJobApplicationFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionJobRequirementFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  department?: ModelSubscriptionStringInput | null,
  rank?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionJobRequirementFilterInput | null > | null,
  or?: Array< ModelSubscriptionJobRequirementFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionApplicantFilterInput = {
  email?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  resume?: ModelSubscriptionStringInput | null,
  contactInformation?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionApplicantFilterInput | null > | null,
  or?: Array< ModelSubscriptionApplicantFilterInput | null > | null,
  id?: ModelStringInput | null,
};

export type ModelSubscriptionJobApplicationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  jobRequirementID?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  passcode?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionJobApplicationFilterInput | null > | null,
  or?: Array< ModelSubscriptionJobApplicationFilterInput | null > | null,
  applicantID?: ModelStringInput | null,
};

export type CreateJobRequirementMutationVariables = {
  input: CreateJobRequirementInput,
  condition?: ModelJobRequirementConditionInput | null,
};

export type CreateJobRequirementMutation = {
  createJobRequirement?:  {
    __typename: "JobRequirement",
    id: string,
    department: string,
    rank: string,
    title: string,
    description: string,
    jobApplications?:  {
      __typename: "ModelJobApplicationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateJobRequirementMutationVariables = {
  input: UpdateJobRequirementInput,
  condition?: ModelJobRequirementConditionInput | null,
};

export type UpdateJobRequirementMutation = {
  updateJobRequirement?:  {
    __typename: "JobRequirement",
    id: string,
    department: string,
    rank: string,
    title: string,
    description: string,
    jobApplications?:  {
      __typename: "ModelJobApplicationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteJobRequirementMutationVariables = {
  input: DeleteJobRequirementInput,
  condition?: ModelJobRequirementConditionInput | null,
};

export type DeleteJobRequirementMutation = {
  deleteJobRequirement?:  {
    __typename: "JobRequirement",
    id: string,
    department: string,
    rank: string,
    title: string,
    description: string,
    jobApplications?:  {
      __typename: "ModelJobApplicationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateApplicantMutationVariables = {
  input: CreateApplicantInput,
  condition?: ModelApplicantConditionInput | null,
};

export type CreateApplicantMutation = {
  createApplicant?:  {
    __typename: "Applicant",
    id: string,
    email: string,
    name: string,
    resume: string,
    contactInformation: string,
    jobApplications?:  {
      __typename: "ModelJobApplicationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateApplicantMutationVariables = {
  input: UpdateApplicantInput,
  condition?: ModelApplicantConditionInput | null,
};

export type UpdateApplicantMutation = {
  updateApplicant?:  {
    __typename: "Applicant",
    id: string,
    email: string,
    name: string,
    resume: string,
    contactInformation: string,
    jobApplications?:  {
      __typename: "ModelJobApplicationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteApplicantMutationVariables = {
  input: DeleteApplicantInput,
  condition?: ModelApplicantConditionInput | null,
};

export type DeleteApplicantMutation = {
  deleteApplicant?:  {
    __typename: "Applicant",
    id: string,
    email: string,
    name: string,
    resume: string,
    contactInformation: string,
    jobApplications?:  {
      __typename: "ModelJobApplicationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateJobApplicationMutationVariables = {
  input: CreateJobApplicationInput,
  condition?: ModelJobApplicationConditionInput | null,
};

export type CreateJobApplicationMutation = {
  createJobApplication?:  {
    __typename: "JobApplication",
    id: string,
    applicantID: string,
    jobRequirementID: string,
    status: string,
    passcode: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateJobApplicationMutationVariables = {
  input: UpdateJobApplicationInput,
  condition?: ModelJobApplicationConditionInput | null,
};

export type UpdateJobApplicationMutation = {
  updateJobApplication?:  {
    __typename: "JobApplication",
    id: string,
    applicantID: string,
    jobRequirementID: string,
    status: string,
    passcode: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteJobApplicationMutationVariables = {
  input: DeleteJobApplicationInput,
  condition?: ModelJobApplicationConditionInput | null,
};

export type DeleteJobApplicationMutation = {
  deleteJobApplication?:  {
    __typename: "JobApplication",
    id: string,
    applicantID: string,
    jobRequirementID: string,
    status: string,
    passcode: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetJobRequirementQueryVariables = {
  id: string,
};

export type GetJobRequirementQuery = {
  getJobRequirement?:  {
    __typename: "JobRequirement",
    id: string,
    department: string,
    rank: string,
    title: string,
    description: string,
    jobApplications?:  {
      __typename: "ModelJobApplicationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListJobRequirementsQueryVariables = {
  filter?: ModelJobRequirementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJobRequirementsQuery = {
  listJobRequirements?:  {
    __typename: "ModelJobRequirementConnection",
    items:  Array< {
      __typename: "JobRequirement",
      id: string,
      department: string,
      rank: string,
      title: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetApplicantQueryVariables = {
  id: string,
};

export type GetApplicantQuery = {
  getApplicant?:  {
    __typename: "Applicant",
    id: string,
    email: string,
    name: string,
    resume: string,
    contactInformation: string,
    jobApplications?:  {
      __typename: "ModelJobApplicationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListApplicantsQueryVariables = {
  filter?: ModelApplicantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListApplicantsQuery = {
  listApplicants?:  {
    __typename: "ModelApplicantConnection",
    items:  Array< {
      __typename: "Applicant",
      id: string,
      email: string,
      name: string,
      resume: string,
      contactInformation: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetJobApplicationQueryVariables = {
  id: string,
};

export type GetJobApplicationQuery = {
  getJobApplication?:  {
    __typename: "JobApplication",
    id: string,
    applicantID: string,
    jobRequirementID: string,
    status: string,
    passcode: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListJobApplicationsQueryVariables = {
  filter?: ModelJobApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJobApplicationsQuery = {
  listJobApplications?:  {
    __typename: "ModelJobApplicationConnection",
    items:  Array< {
      __typename: "JobApplication",
      id: string,
      applicantID: string,
      jobRequirementID: string,
      status: string,
      passcode: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ApplicationsByApplicantQueryVariables = {
  applicantID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelJobApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ApplicationsByApplicantQuery = {
  applicationsByApplicant?:  {
    __typename: "ModelJobApplicationConnection",
    items:  Array< {
      __typename: "JobApplication",
      id: string,
      applicantID: string,
      jobRequirementID: string,
      status: string,
      passcode: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ApplicationsByJobRequirementQueryVariables = {
  jobRequirementID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelJobApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ApplicationsByJobRequirementQuery = {
  applicationsByJobRequirement?:  {
    __typename: "ModelJobApplicationConnection",
    items:  Array< {
      __typename: "JobApplication",
      id: string,
      applicantID: string,
      jobRequirementID: string,
      status: string,
      passcode: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateJobRequirementSubscriptionVariables = {
  filter?: ModelSubscriptionJobRequirementFilterInput | null,
};

export type OnCreateJobRequirementSubscription = {
  onCreateJobRequirement?:  {
    __typename: "JobRequirement",
    id: string,
    department: string,
    rank: string,
    title: string,
    description: string,
    jobApplications?:  {
      __typename: "ModelJobApplicationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateJobRequirementSubscriptionVariables = {
  filter?: ModelSubscriptionJobRequirementFilterInput | null,
};

export type OnUpdateJobRequirementSubscription = {
  onUpdateJobRequirement?:  {
    __typename: "JobRequirement",
    id: string,
    department: string,
    rank: string,
    title: string,
    description: string,
    jobApplications?:  {
      __typename: "ModelJobApplicationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteJobRequirementSubscriptionVariables = {
  filter?: ModelSubscriptionJobRequirementFilterInput | null,
};

export type OnDeleteJobRequirementSubscription = {
  onDeleteJobRequirement?:  {
    __typename: "JobRequirement",
    id: string,
    department: string,
    rank: string,
    title: string,
    description: string,
    jobApplications?:  {
      __typename: "ModelJobApplicationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateApplicantSubscriptionVariables = {
  filter?: ModelSubscriptionApplicantFilterInput | null,
  id?: string | null,
};

export type OnCreateApplicantSubscription = {
  onCreateApplicant?:  {
    __typename: "Applicant",
    id: string,
    email: string,
    name: string,
    resume: string,
    contactInformation: string,
    jobApplications?:  {
      __typename: "ModelJobApplicationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateApplicantSubscriptionVariables = {
  filter?: ModelSubscriptionApplicantFilterInput | null,
  id?: string | null,
};

export type OnUpdateApplicantSubscription = {
  onUpdateApplicant?:  {
    __typename: "Applicant",
    id: string,
    email: string,
    name: string,
    resume: string,
    contactInformation: string,
    jobApplications?:  {
      __typename: "ModelJobApplicationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteApplicantSubscriptionVariables = {
  filter?: ModelSubscriptionApplicantFilterInput | null,
  id?: string | null,
};

export type OnDeleteApplicantSubscription = {
  onDeleteApplicant?:  {
    __typename: "Applicant",
    id: string,
    email: string,
    name: string,
    resume: string,
    contactInformation: string,
    jobApplications?:  {
      __typename: "ModelJobApplicationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateJobApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionJobApplicationFilterInput | null,
  applicantID?: string | null,
};

export type OnCreateJobApplicationSubscription = {
  onCreateJobApplication?:  {
    __typename: "JobApplication",
    id: string,
    applicantID: string,
    jobRequirementID: string,
    status: string,
    passcode: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateJobApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionJobApplicationFilterInput | null,
  applicantID?: string | null,
};

export type OnUpdateJobApplicationSubscription = {
  onUpdateJobApplication?:  {
    __typename: "JobApplication",
    id: string,
    applicantID: string,
    jobRequirementID: string,
    status: string,
    passcode: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteJobApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionJobApplicationFilterInput | null,
  applicantID?: string | null,
};

export type OnDeleteJobApplicationSubscription = {
  onDeleteJobApplication?:  {
    __typename: "JobApplication",
    id: string,
    applicantID: string,
    jobRequirementID: string,
    status: string,
    passcode: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
