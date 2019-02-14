import Ember from 'ember';
const{ Route,set}=Ember;

export default Route.extend({
	model(params){
		debugger
		return this.store.findRecord('photo',params.id);

	},
	
	setupController(controller,model){
		set(controller,'photo',model);
	}
});