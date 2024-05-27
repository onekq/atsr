import { useEffect, useState } from 'react';
import { useListContext, useDataProvider } from 'react-admin';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { StrictModeDroppable as Droppable} from './StrictModeDroppable';

const columnStyle = { margin: '0 10px', flex: 1, width: '150px', minHeight: '300px', backgroundColor: '#f0f0f0', padding: '10px' };
const cardStyle = { margin: '10px 0', padding: '10px', fontSize: '12px', backgroundColor: '#fff' };

export const JobApplicationDashboard = () => {
    const { data: applications, isLoading } = useListContext();
    const dataProvider = useDataProvider();
    const [applicants, setApplicants] = useState({});
    const [localApplications, setLocalApplications] = useState([]);
    const statuses = ["Application Submitted", "Phone screen offered", "Phone screen complete", "On-site offered", "Offer", "Hired"];

    useEffect(() => {
        if (applications) {
            setLocalApplications(applications);
        }
    }, [applications]);

    useEffect(() => {
        const fetchApplicants = async () => {
            if (applications && applications.length > 0) {
                try {
                    const applicantIds = applications.map(app => app.applicantID);
                    const { data: applicantsData } = await dataProvider.getMany('applicants', { ids: applicantIds });
                    const applicantsMap = applicantsData.reduce((acc, applicant) => {
                        acc[applicant.id] = applicant;
                        return acc;
                    }, {});
                    setApplicants(applicantsMap);
                } catch (error) {
                    console.error("Error fetching applicants", error);
                }
            }
        };

        fetchApplicants();
    }, [dataProvider, applications]);

    const handleDragEnd = async (result) => {
        if (!result.destination) return;

        const { source, destination } = result;
        const applicationId = result.draggableId;
        const newStatus = statuses[parseInt(destination.droppableId, 10)];

        if (source.droppableId !== destination.droppableId) {
            try {
                const application = localApplications.find(app => app.id.toString() === applicationId);
                await dataProvider.update('jobApplications', { id: applicationId, data: { ...application, status: newStatus }, previousData: application });

                const updatedApplications = localApplications.map(app => 
                    app.id.toString() === applicationId ? { ...app, status: newStatus } : app
                );
                setLocalApplications(updatedApplications);
            } catch (error) {
                console.error("Error updating status", error);
            }
        }
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="dashboard-columns" style={{ display: 'flex' }}>
                {statuses.map((status, index) => (
                    <Droppable key={status} droppableId={index.toString()}>
                        {(provided) => (
                            <div className="column" {...provided.droppableProps} ref={provided.innerRef} style={columnStyle}>
                                <h3>{status}</h3>
                                {localApplications && localApplications.filter(application => application.status === status).map((application, idx) => (
                                    <Draggable key={application.id} draggableId={application.id.toString()} index={idx}>
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={{ ...cardStyle, ...provided.draggableProps.style }}>
                                                {application.id}<br />{applicants[application.applicantID]?.name}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    );
};
