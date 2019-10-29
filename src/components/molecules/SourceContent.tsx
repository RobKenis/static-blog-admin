import * as React from 'react';
import Origin from '../atoms/Origin';
import SourceContentPath from '../atoms/SourceContentPath';

export interface SourceProps {
    origin: string,
    path: string,
}

const SourceContent: React.SFC<SourceProps> = (props) => (
    <div>
        <Origin name={props.origin}/>
        <SourceContentPath path={props.path}/>
    </div>
)

export default SourceContent;