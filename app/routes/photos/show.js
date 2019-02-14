import Ember from 'ember';
const{ Route,set}=Ember;

export default Route.extend({
	model(params){
		return this.store.findRecord('photo',params.id);
	},
	
	setupController(controller,model){
		set(controller,'photo',model);
	},

	actions:{
    	addComment(comment){
    		this.get('store').createRecord('comment', {
    			id: Math.floor(Date.now() / 1000),
    			description: comment
    		})
    		this.controller.set('comment', null);
    	}
    }
});