"use client"  // This is a client component 

import React from 'react';
import { Route } from 'react-router-dom';
import { Admin, Resource, Layout, LayoutProps, CustomRoutes} from 'react-admin';
import { buildDataProvider } from 'react-admin-amplify-6';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';

import { JobRequirementList } from './components/JobRequirementList';
import { JobRequirementEdit } from './components/JobRequirementEdit';
import { JobRequirementCreate } from './components/JobRequirementCreate';
import { JobRequirementShow } from './components/JobRequirementShow';

import { ApplicantList } from './components/ApplicantList';
import { ApplicantShow } from './components/ApplicantShow';

import { JobApplicationList } from './components/JobApplicationList';
import { JobApplicationShow } from './components/JobApplicationShow';
import { CheckStatusPage } from './components/CheckStatusPage';

import { LoginPage } from './auth/LoginPage';
import buildAuthProvider from './auth/BuildAuthProvider';
import englishMessages from './i18n/englishMessages';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { MyMenu } from './MyMenu';

Amplify.configure(awsExports);

const roleDefinitions = {
    admin: [
        { action: ["list", "edit", "create", "show", "delete", "stats"], resource: "jobRequirements" },
        { action: ["read"], resource: "jobRequirements.*" },
        { action: ["list", "show"], resource: "applicants" },
        { action: ["list", "show", "delete"], resource: "jobApplications" },
        { action: ["read"], resource: "jobApplications.*" },
    ],
    HR: [
        { action: ["list", "edit", "create", "show", "delete", "stats"], resource: "jobRequirements" },
        { action: ["read"], resource: "jobRequirements.*" },
        { action: ["list", "show"], resource: "jobApplications" },
        { action: ["read"], resource: "jobApplications.*" },
    ],
    applicants: [
        { action: ["list", "show", "apply"], resource: "jobRequirements" },
        { action: ["read"], resource: "jobRequirements.*" },
        { action: ["status"], resource: "jobApplications" },
    ],
};

const dataProvider = buildDataProvider({ queries, mutations });
const authProvider = buildAuthProvider({ authGroups: ["admin", "HR", "applicants"], roleDefinitions: roleDefinitions });
const i18nProvider = polyglotI18nProvider(() => englishMessages, 'en');
const CustomLayout = (props: LayoutProps) => <Layout {...props} menu={MyMenu} />;

const App: React.FC = () => {
    return (
        <Admin loginPage={LoginPage} dataProvider={dataProvider} authProvider={authProvider} i18nProvider={i18nProvider} layout={CustomLayout}>
            <CustomRoutes>
                <Route path="/checkStatus" element={<CheckStatusPage />} />
            </CustomRoutes>
            <Resource name="jobRequirements" list={JobRequirementList} edit={JobRequirementEdit} create={JobRequirementCreate} show={JobRequirementShow} />
            <Resource name="applicants" list={ApplicantList} show={ApplicantShow}/>
            <Resource name="jobApplications" list={JobApplicationList} show={JobApplicationShow} />
        </Admin>
    );
};

export default App;