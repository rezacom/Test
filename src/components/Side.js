import { ReactComponent as Logo } from "../images/logo.svg";

import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AnnouncementIcon from '@material-ui/icons/Announcement';

const useStyles = makeStyles({
    root: {
        height: 240,
        flexGrow: 1,
        maxWidth: 400,
    },
});

export default function Side() {

    const classes = useStyles();

    return (
        <div className="side">
            <div className="side__logo flex items-center">
                <Logo />
                <h1 className="ml-4">TEST</h1>
            </div>

            <TreeView
                className={classes.root}
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
            >
                <TreeItem
                    nodeId="1"
                    label="Applications"
                    className="side__items"
                    label={
                        <div className="side__item_label">
                            <AddBoxIcon />
                            <span>Bussines</span>
                        </div>
                    }
                >
                    <TreeItem nodeId="2" label="Customers" className="side__item_sub" />
                    <TreeItem nodeId="3" label="Suppliers" className="side__item_sub" />
                    <TreeItem nodeId="4" label="Users" className="side__item_sub" />
                    <TreeItem nodeId="4" label="Certificates" className="side__item_sub" />
                </TreeItem>
                <TreeItem
                    nodeId="5"
                    label="Documents"
                    className="side__items"
                    label={
                        <div className="side__item_label">
                            <AnnouncementIcon />
                            <span>Settings</span>
                        </div>
                    }
                >
                    <TreeItem nodeId="10" label="OSS" className="side__item_sub" />
                    <TreeItem nodeId="6" label="Material-UI" className="side__item_sub">
                        {/* <TreeItem nodeId="7" label="src">
                            <TreeItem nodeId="8" label="index.js" />
                            <TreeItem nodeId="9" label="tree-view.js" />
                        </TreeItem> */}
                    </TreeItem>
                </TreeItem>
            </TreeView>

        </div>
    )
}
