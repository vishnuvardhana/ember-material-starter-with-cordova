import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		showModal(){
			
			$('#myModal').modal();
		}
	},
	floatClass:'fl'
});
