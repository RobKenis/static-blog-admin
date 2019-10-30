import * as React from 'react';
import Typography from '@material-ui/core/Typography';

interface AdminPanelProps {
    title: string;
}

const AdminPanelContainer: React.SFC<AdminPanelProps> = (props) => (
    <div>
        <Typography variant="h4" gutterBottom>
            {props.title}
        </Typography>
        {props.children}
    </div>
)

export default AdminPanelContainer;