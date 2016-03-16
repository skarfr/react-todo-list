/**
 * This file is the action creator
 * Every actions need at least a type and optional extra parameters
 */

let UserActions = {

  createNewUserId: function(){
    return {
      type: "CREATE_USER_ID",
      id: Math.floor(Math.random()* 100)
    }
  },

  createNewUserIdOdd: function() {
    return (dispatch, getState) => {
      const { user } = getState()
      if(user.id % 2 === 0) return;
      dispatch(UserActions.createNewUserId())
    }
  },

  createNewUserIdAsync: function() {
    return (dispatch) => {
      // server call

      /*$.get('url', {
       'success': (response) => {
       dispatch(actions.createNewUserId(response.data))
       }
       })*/


      setTimeout(()=> {
        dispatch(UserActions.createNewUserId())
      }, 2500)
    }
  }

}

export default UserActions