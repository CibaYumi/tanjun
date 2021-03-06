/**
 * Created by USER HERE on DATE HERE.
 * PROJECT NAME HERE { PACKAGE_NAME_HERE }
 * Copyright © 2018 COMPANY NAME HERE. All rights reserved.
*/

module.exports = app => {

	const DemoModel = app.models.Demo;

	class Controller{
		static async get(req, res){
			return DemoModel.find({ id : req.params.id})
				.then((demo) => {
					return res.json(demo);
				}).catch((err) => {
					return res.status(500).json(err.message);
			});
		}
		static async set(req, res){
			const demo = new DemoModel(req.body);
			return demo.save()
				.then((demoCreated) => {
					return res.status(202).json(demoCreated);
				}).catch((err) => {
					return res.status(500).json(err.message);
				});
		}
		// static async remove(req, res){
		// 	return DemoModel.destroy({where : {domain: req.params.id}})
		// 		.then(() => {
		// 			return res.json({success : true, message: 'Demo <' + req.params.id + '> removed with success!'})
		// 		}).catch((err) => {
		// 			return res.status(500).json(err.message);
		// 		});
		// }
		// static async update(req, res){
		// 	return DemoModel.findById(req.params.id)
		// 		.then((demo) => {
		// 			return demo.update(req.body)
		// 				.then((demoUpdated) => {
		// 					return res.json(demoUpdated);
		// 				});
		// 		}).catch((err) => {
		// 			return res.status(500).json(err.message);
		// 		});
		// }
		static async getAll(req, res){
			return DemoModel.find({})
				.then((demos) => {
					return res.json(demos);
				}).catch((err) => {
					return res.status(500).json(err.message);
				});
		}
	}

	return Controller;

};