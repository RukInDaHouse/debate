canvas.installEditPolicy(  new draw2d.policy.connection.DragConnectionCreatePolicy({
	createConnection: function() {
		// return my special kind of connection
		var con =  new draw2d.Connection({
			targetDecorator: new draw2d.decoration.connection.ArrowDecorator()
		});
		return con;
	}
 }));