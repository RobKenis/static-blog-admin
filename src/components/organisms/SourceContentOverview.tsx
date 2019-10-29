import * as React from 'react';
import SourceContentList from '../molecules/SourceContentList';
import axios from 'axios';
import { SourceProps } from '../molecules/SourceContent';

interface IState {
    sources: SourceProps[];
}

interface IProps { }

class SourceContentOverview extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            sources: []
        }
    }

    async componentDidMount() {
        const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/content/sources`);
        this.setState({ sources: data });
    }

    render() {
        return <SourceContentList sources={this.state.sources} />
    }
}

export default SourceContentOverview;