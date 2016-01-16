import Ember from 'ember';

export default Ember.Route.extend({
    actions:{
    	transitionTo:function(toRoute,param){
    		
    		this.transitionTo(toRoute);

    	}
    },
    redirect(){
    	this.transitionTo('charts');
    },

});
