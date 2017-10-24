import axios from 'axios'

export function AddComment(userId, parentId, sessionId, title, text) {
  return axios.post('/comment', {
    user_id: userId,
    parent_id: parentId,
    session_id: sessionId,
    title: title,
    text: text
  })
}

export function EditComment(commentId, title, text) {
  console.log('inside EditComment axios call')
  return axios.put('/comment', {
    comment_id: commentId,
    title: title,
    text: text
  });
}

export function GetComment(commentId) {
  return axios.get('/comment', {
    params: {
      id: commentId
    }
  });
}

export function CreateSession(title, text, userId) { // comment will be an object with keys: userId, title, text
  return axios.post('/session', {
    user_id: userId,
    title: title,
    text: text
  });
}

export function GetSession(sessionId) {
  return axios.get('/session', {
    params: {
      id: sessionId
    }
  });
}

// export function DeleteSession(sessionId) {
//   return axios.delete('/session', {
//     params: {
//       id: sessionId
//     }
//   })
// }

export function findUser(userId) {
  console.log('inside findUser axios call!')
  return axios.get('/findUser', {
    params: {
      id: userId
    }
  })
}

export function inviteUsers(emailArray, sessionId) {
  console.log('inside inviteUsers axios call!', emailArray, sessionId)
  return axios.post('/addUserToSession', {
    emails: emailArray,
    session_id: sessionId
  })
}

export function login() {
  return axios.get('/getUser');
}

export function logout() {
  return axios.get('/logout');
}


// axios call to server to check for session

export function authenticate() {
  console.log('inside authenticate!')
  return axios.get('/authenticate').then(
    (data) => {
      console.log('DATA FROM AUTH FUNCTION', data.status);
      return data.status;
    }
  );
}
