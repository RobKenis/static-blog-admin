import * as React from 'react';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

interface SourceSyncProps {
    status: string,
}

const SourceSyncIcon: React.SFC<SourceSyncProps> = (props) => (
    <CheckCircleRoundedIcon fontSize="small" />
)

export default SourceSyncIcon;