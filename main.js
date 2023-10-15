const user = {
  id: 123,
  role: 'student',
  cachedData: {
    groups: ['groupA'],
    invitationCode: 'ping'
  }
};

function hasAccess(user, feature) {
  if (user.role !== user.cachedData.role) {
    return false;
  }
  return user.role === 'teacher' && feature === 'groups';
}

function changeUserRole(user, newRole) {
  user.cachedData.role = user.role;
  user.role = newRole;
}

function displayInvitationCode(user) {
  if (hasAccess(user, 'groups')) {
    console.log(`Invitation Code: ${user.cachedData.invitationCode}`);
  } else {
    console.log("You can't access that!");
  }
}

// Change a role
changeUserRole(user, 'teacher');
displayInvitationCode(user); // Display the invitation code

// Change the role back to student
changeUserRole(user, 'student');
displayInvitationCode(user); // Deny the access

