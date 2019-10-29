import * as React from 'react';
import SourceContent, { SourceProps } from './SourceContent';

interface SourceListProps {
    sources: SourceProps[],
}

const SourceContentList: React.SFC<SourceListProps> = (props) => {
    return (
        <ul>
            {props.sources.map(source => (<SourceContent key={`${source.origin}-${source.path}`} path={source.path} origin={source.origin}  />))}
        </ul>
    )
}

export default SourceContentList;