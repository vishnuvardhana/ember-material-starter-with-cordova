import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            'componentDescription': [{
                "title": "test",
                "description": "test"

            }]
        }
    }
});
