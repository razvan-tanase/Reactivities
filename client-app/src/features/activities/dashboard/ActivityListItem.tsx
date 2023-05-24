import { useState, SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { Button, Item, Label } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";

interface props {
    activity: Activity;
}

export default function ActivityListItem({activity}: props) {
    const {activityStore} = useStore();
    const {deleteActivity, loading} = activityStore;
    const [target, setTarget] = useState(''); // This is for the delete button

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return (
        <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button as={Link} to={`/activities/${activity.id}`} floated='right' content='View' color='blue' />
                                <Button floated='right' content='Join Activity' color='green' />
                                <Button floated='right' content='Edit' color='orange' />
                                <Button 
                                    name={activity.id}
                                    loading={loading && target === activity.id} 
                                    onClick={(e) => handleActivityDelete(e, activity.id)} 
                                    floated='right' 
                                    content='Delete' 
                                    color='red' />
                                <Label basic content={activity.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
    )
}