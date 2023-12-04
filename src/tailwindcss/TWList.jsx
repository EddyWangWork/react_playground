import { List, ListItem, Card } from "@material-tailwind/react";

function TWList() {
    return (
        <Card className="max-w-xs">
            <List className="max-w-xs">
                <ListItem className="max-w-xs">Inbox</ListItem>
                <ListItem className="max-w-xs">Trash</ListItem>
                <ListItem className="max-w-xs">Settings</ListItem>
            </List>
        </Card>
    );
};

export default TWList;