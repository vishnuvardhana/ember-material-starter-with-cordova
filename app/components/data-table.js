import Ember from 'ember';

export default Ember.Component.extend({
	
    didInsertElement: function() {
    	
		// pass options if any here 
		$('table').dataTable();
    	
    }
});
