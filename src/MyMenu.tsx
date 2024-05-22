import { Menu } from './rbac/Menu';

export const MyMenu = () => (
    <Menu>
        <Menu.Item
            to="/jobRequirements"
            resource="jobRequirements"
            action="list"
            primaryText="JobRequirements"
        />
        <Menu.Item
            to="/applicants"
            resource="applicants"
            action="list"
            primaryText="Applicants"
        />
        <Menu.Item
            to="/jobApplications"
            resource="jobApplications"
            action="list"
            primaryText="Job Applications"
        />
        <Menu.Item
            to="/checkStatus"
            resource="jobApplications"
            action="status"
            primaryText="Check Status"
        />
        <Menu.Item
            to="/dashboard"
            resource="jobApplications"
            action="dashboard"
            primaryText="Dashboard"
        />
    </Menu>
);