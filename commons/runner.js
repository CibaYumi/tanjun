/**
 * Created by USER HERE on DATE HERE.
 * PROJECT NAME HERE { PACKAGE_NAME_HERE }
 * Copyright © 2018 COMPANY NAME HERE. All rights reserved.
*/

module.exports = app => {

	const port = process.env.PORT || 8080;

	app.listen(port, () => {
		console.info('[INFO] API running in port - ' + port);
	});

};