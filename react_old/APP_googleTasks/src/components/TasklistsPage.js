import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import ListIcon from 'material-ui/lib/svg-icons/action/view-list';
import HomeIcon from 'material-ui/lib/svg-icons/action/home';
import ExitIcon from 'material-ui/lib/svg-icons/action/exit-to-app';
import FolderIcon from 'material-ui/lib/svg-icons/file/folder';
import AddIcon from 'material-ui/lib/svg-icons/content/add';
import Colors from 'material-ui/lib/styles/colors';
import './styles/TasklistsPage.less';

const TasklistsPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render() {
    const { router } = this.context;
    return (
      <div class='TasklistsPage'>
        <div class='TasklistsPage__menu'>
          <List class='TasklistsPage__list'>
            <h3 class='TasklistsPage__title'>
              Google Task Manager
            </h3>
            <Divider />
            <List class='TasklistsPage__list'>
              <ListItem
                leftIcon={<HomeIcon />}
                primaryText="Home"
                onClick={router.push.bind(null, `/lists`)}
              />
              <ListItem
                leftIcon={<ListIcon />}
                primaryText="About"
                onClick={router.push.bind(null, `/about`)}
              />
            </List>
            <Divider />
            <List class='TasklistsPage__list' subheader="Task Lists">
              {
                this.props.taskLists.map(list =>
                  <ListItem
                    key={list.id}
                    leftIcon={<FolderIcon />}
                    style={
                      this.props.selectedListId === list.id
                      ?
                      { backgroundColor: 'rgba(0,0,0,0.1)' }
                      :
                      null
                    }
                    primaryText={list.name}
                    onClick={router.push.bind(null, `/lists/${list.id}`)}
                  />
                )
              }
              <ListItem
                leftIcon={<AddIcon />}
                primaryText="Create new list"
                onClick={this.props.onAddTaskList}
              />
            </List>
            <Divider />
          </List>
        </div>
        <div class='TasklistsPage__tasks'>
          {this.props.page}
        </div>
      </div>
    );
  }
});

export default TasklistsPage;
