import * as React from 'react';
import Button from '@material-ui/core/Button';

interface SourceContentProps {
    path: string,
}

const SourceContentPath: React.SFC<SourceContentProps> = (props) => (
    <Button href="#text-buttons">{props.path}</Button>
)

export default SourceContentPath;