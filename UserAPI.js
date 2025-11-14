var CreateUserAPI = Class.create();
CreateUserAPI.prototype = {
    initialize: function() {},

    createUser: function(fname, lname, email, dept) {

        var userRec = new GlideRecord('sys_user');
        userRec.initialize();
        userRec.first_name = fname;
        userRec.last_name = lname;
        userRec.email = email;
        userRec.department = dept;
        var userID = userRec.insert();

        return userID;
    },

    type: 'CreateUserAPI'
};
