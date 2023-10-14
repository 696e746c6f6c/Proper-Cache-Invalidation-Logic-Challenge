const user = {
  id: 123,
  role: 'student',
  cachedData: {
    groups: ['groupA'],
    invitationCode: 'ping'
  }
};

function hasAccess(user, feature) {
  return true;
}

function changeUserRole(user, newRole) {
  user.role = newRole;
}

function displayInvitationCode(user) {
  if (hasAccess(user, 'groups')) {
    console.log(`Invitation Code: ${user.cachedData.invitationCode}`);
  } else {
    console.log('You can't access that!');
  }
}

changeUserRole(user, 'teacher'); // change the role to teacher
displayInvitationCode(user);     // display the invitation code (vulnerability type)
changeUserRole(user, 'student'); // change the role back to student
displayInvitationCode(user);     // change the invitation code again (vulnerability type)
