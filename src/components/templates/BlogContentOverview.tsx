import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AdminPanelContainer from './AdminPanelContainer';
import SourceContentOverview from '../organisms/SourceContentOverview';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => (
    <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`nav-tabpanel-${index}`}
        aria-labelledby={`nav-tab-${index}`}
        {...other}
    >
        <Box p={3}>{children}</Box>
    </Typography>
);

interface LinkTabProps {
    label?: string;
    href?: string;
    disabled?: boolean;
}

const LinkTab = (props: LinkTabProps) => (
    <Tab
        component="a"
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            event.preventDefault();
        }}
        {...props}
    />
);

const BlogContentOverview = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <AppBar position="static">
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs content"
                >
                    <LinkTab label="Sources" href="/sources" />
                    <LinkTab label="Published Posts" href="/published" />
                    <LinkTab label="Images" disabled />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <AdminPanelContainer title="Sources">
                    <SourceContentOverview />
                </AdminPanelContainer>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AdminPanelContainer title="Published Posts">
                    <small>Nothing to see here...yet</small>
                </AdminPanelContainer>
            </TabPanel>
        </div>
    );
}

export default BlogContentOverview;