(function executeRule(current, previous) {

    var api = new CreateUserAPI();
    var userID = api.createUser(current.first_name, current.last_name, current.email, current.department);

    current.u_created_user = userID;

    // Create task for IT
    var itTask = new GlideRecord('sc_task');
    itTask.initialize();
    itTask.short_description = "Setup Laptop & Email";
    itTask.request_item = current.sys_id;
    itTask.insert();

})(current, previous);
