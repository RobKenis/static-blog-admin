import * as React from 'react'
import Chip from '@material-ui/core/Chip';
import FolderOpenRoundedIcon from '@material-ui/icons/FolderOpenRounded';

interface OriginProps {
    name: string,
}

const Origin: React.SFC<OriginProps> = (props) => (
    <Chip
        size="small"
        icon={<FolderOpenRoundedIcon />}
        label={props.name}
        clickable
        color="primary"
      />
)

export default Origin;