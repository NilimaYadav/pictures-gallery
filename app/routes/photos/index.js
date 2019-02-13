import Ember from 'ember';
const{ Route,set}=Ember;

export default Route.extend({
	model(){
		return this.store.findAll('photo');
	},
	setupController(controller,model){
		set(controller,'photos',model);
	}
});
