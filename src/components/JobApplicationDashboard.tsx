import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { useDataProvider } from 'react-admin';
import { StrictModeDroppable } from './StrictModeDroppable';

export const JobApplicationDashboard = () => {
    const dataProvider = useDataProvider();
    const [applications, setApplications] = useState([]);
    const [jobRequirements, setJobRequirements] = useState({});
    const [applicants, setApplicants] = useState({});
    const statuses = [
        "Application Submitted", 
        "Phone screen offered", 
        "Phone screen complete", 
        "On-site offered", 
        "Offer", 
        "Hired"
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch job applications
                const { data: applicationsData } = await dataProvider.getList('jobApplications', {
                    filter: {},
                    sort: { field: 'id', order: 'ASC' },
                    pagination: { page: 1, perPage: 100 },
                });
                setApplications(applicationsData);

                // Fetch job requirements
                const jobRequirementIds = applicationsData.map(app => app.jobRequirementID);
                const { data: jobRequirementsData } = await dataProvider.getMany('jobRequirements', { ids: jobRequirementIds });
                const jobRequirementsMap = jobRequirementsData.reduce((acc, jobRequirement) => {
                    acc[jobRequirement.id] = jobRequirement;
                    return acc;
                }, {});
                setJobRequirements(jobRequirementsMap);

                // Fetch applicants
                const applicantIds = applicationsData.map(app => app.applicantID);
                const { data: applicantsData } = await dataProvider.getMany('applicants', { ids: applicantIds });
                const applicantsMap = applicantsData.reduce((acc, applicant) => {
                    acc[applicant.id] = applicant;
                    return acc;
                }, {});
                setApplicants(applicantsMap);

            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, [dataProvider]);

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const { source, destination } = result;
        const applicationId = result.draggableId;
        const newStatus = statuses[parseInt(destination.droppableId, 10)];

        if (source.droppableId !== destination.droppableId) {
            // Update application status in the backend
            const application = applications.find(app => app.id === applicationId);
            dataProvider.update('jobApplications', {
                id: applicationId,
                data: { ...application, status: newStatus },
                previousData: application,
            })
            .then(() => {
                setApplications(prev =>
                    prev.map(app => app.id === applicationId ? { ...app, status: newStatus } : app)
                );
            })
            .catch(error => console.error("Error updating status", error));
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="dashboard-columns" style={{ display: 'flex' }}>
                {statuses.map((status, index) => (
                    <StrictModeDroppable key={status} droppableId={index.toString()}>
                        {(provided) => (
                            <div
                                className="column"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{ margin: '0 10px', flex: 1, width: '150px', minHeight: '300px', backgroundColor: '#f0f0f0', padding: '10px' }}
                            >
                                <h3>{status}</h3>
                                {applications
                                    .filter(application => application.status === status)
                                    .map((application, idx) => (
                                        <Draggable key={application.id} draggableId={application.id.toString()} index={idx}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{ margin: '10px 0', padding: '10px', fontSize: '12px', backgroundColor: '#fff', ...provided.draggableProps.style }}
                                                >
                                                    {jobRequirements[application.jobRequirementID]?.title} - {applicants[application.applicantID]?.email}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </StrictModeDroppable>
                ))}
            </div>
        </DragDropContext>
    );
};
