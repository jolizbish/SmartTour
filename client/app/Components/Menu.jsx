import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, DropdownButton, MenuItem, ButtonGroup } from 'react-bootstrap';
import CreateSessionDetail from './CreateSessionDetail.jsx';
import ReactModal from 'react-modal';
import { PROFILE_PAGE_ROUTE,
         LOGOUT_PAGE_ROUTE,
         SESSIONS_PAGE_ROUTE,
         MAIN_PAGE_ROUTE
       } from '../routes.js'

const Menu = (props) => {
  return (
    <div>
      <ReactModal isOpen={props.menuVisible}
                  contentLabel="Menu Modal"
                  shouldCloseOnOverlayClick={props.menuVisible}
                  className="ReactModal__Content--after-open--menu"
      >
        <Button className="menu-exit-btn" onClick={props.hideMenu}>X</Button>
        <div className="menu-modal-content">
          <a href={PROFILE_PAGE_ROUTE}><img src={props.user.image} /></a>
          <a href={PROFILE_PAGE_ROUTE}><h3>{props.user.name}</h3></a>
          <h2>My Sessions</h2>
          <p>Session 1</p>
          <p>Session 2</p>
          <p>Session 3: a really long session name to test the auto width css property </p>
          <Button bsStyle="info"
            className="add-comment"
            onClick={() => { props.showCreateSession(); props.hideMenu(); }}>
            New Session!
          </Button>
          <Button bsStyle="info" href={LOGOUT_PAGE_ROUTE}>
            <NavLink to={LOGOUT_PAGE_ROUTE}></NavLink>
            Logout
          </Button>
        </div>
      </ReactModal>

      <ReactModal isOpen={props.createSessionVisible}
        contentLabel="Detail Modal"
        className=".ReactModal__Content--after-open--new-session"
        shouldCloseOnOverlayClick={props.createSessionVisible}
        >
          <Button onClick={props.hideCreateSession}>X</Button>
          <CreateSessionDetail
            addComment={props.addComment}
            currentNode={props.currentNode}
            setNode={props.setNode}
            updateNode={props.updateNode}
            thunkCreateSession={props.thunkCreateSession}
            clearComments={props.clearComments}
            user={props.user}
            hideCreateSession={props.hideCreateSession}
          />
        </ReactModal>
    </div>
  )
}

export default Menu

/* <ButtonGroup>
  <Button bsStyle="info" href={PROFILE_PAGE_ROUTE}>
    <NavLink to={PROFILE_PAGE_ROUTE}></NavLink>
    My Profile
  </Button>
  <Button bsStyle="info" className="add-comment" onClick={() => props.showCreateSession()}>New Session!</Button>
  <Button bsStyle="info" href={LOGOUT_PAGE_ROUTE}>
    <NavLink to={LOGOUT_PAGE_ROUTE}></NavLink>
    Logout
  </Button>
</ButtonGroup>
<ReactModal isOpen={props.createSessionVisible}
  contentLabel="Detail Modal"
  shouldCloseOnOverlayClick={props.createSessionVisible}
  >
    <Button onClick={props.hideCreateSession}>X</Button>
    <CreateSessionDetail
      addComment={props.addComment}
      currentNode={props.currentNode}
      setNode={props.setNode}
      updateNode={props.updateNode}
      thunkCreateSession={props.thunkCreateSession}
    />
  </ReactModal> */
