/*****************************************
 *   Library is under GPL License (GPL)
 *   Copyright (c) 2012 Andreas Herz
 ****************************************/
/**
 * @class draw2d.shape.icon.Safari

 * See the example:
 *
 *     @example preview small frame
 *     
 *     var icon =  new draw2d.shape.icon.Safari();
 *     
 *     canvas.add(icon,50,10);
 *     
 * @inheritable
 * @author Andreas Herz
 * @extends draw2d.shape.icon.Icon
 */
draw2d.shape.icon.Safari = draw2d.shape.icon.Icon.extend({
    NAME : "draw2d.shape.icon.Safari",

    /**
     * 
     * @constructor
     * Creates a new icon element which are not assigned to any canvas.
     * 
     * @param {Object} attr the configuration of the shape
     */
    init: function(attr, setter, getter ) {
      this._super($.extend({width:50,height:50},attr), setter, getter);
    },

    /**
     * @private
     * @returns
     */
    createSet : function() {
        return this.canvas.paper.path("M16.154,5.135c-0.504,0-1,0.031-1.488,0.089l-0.036-0.18c-0.021-0.104-0.06-0.198-0.112-0.283c0.381-0.308,0.625-0.778,0.625-1.306c0-0.927-0.751-1.678-1.678-1.678s-1.678,0.751-1.678,1.678c0,0.745,0.485,1.376,1.157,1.595c-0.021,0.105-0.021,0.216,0,0.328l0.033,0.167C7.645,6.95,3.712,11.804,3.712,17.578c0,6.871,5.571,12.441,12.442,12.441c6.871,0,12.441-5.57,12.441-12.441C28.596,10.706,23.025,5.135,16.154,5.135zM16.369,8.1c4.455,0,8.183,3.116,9.123,7.287l-0.576,0.234c-0.148-0.681-0.755-1.191-1.48-1.191c-0.837,0-1.516,0.679-1.516,1.516c0,0.075,0.008,0.148,0.018,0.221l-2.771-0.028c-0.054-0.115-0.114-0.226-0.182-0.333l3.399-5.11l0.055-0.083l-4.766,4.059c-0.352-0.157-0.74-0.248-1.148-0.256l0.086-0.018l-1.177-2.585c0.64-0.177,1.111-0.763,1.111-1.459c0-0.837-0.678-1.515-1.516-1.515c-0.075,0-0.147,0.007-0.219,0.018l0.058-0.634C15.357,8.141,15.858,8.1,16.369,8.1zM12.146,3.455c0-0.727,0.591-1.318,1.318-1.318c0.727,0,1.318,0.591,1.318,1.318c0,0.425-0.203,0.802-0.516,1.043c-0.183-0.123-0.413-0.176-0.647-0.13c-0.226,0.045-0.413,0.174-0.535,0.349C12.542,4.553,12.146,4.049,12.146,3.455zM7.017,17.452c0-4.443,3.098-8.163,7.252-9.116l0.297,0.573c-0.61,0.196-1.051,0.768-1.051,1.442c0,0.837,0.678,1.516,1.515,1.516c0.068,0,0.135-0.006,0.2-0.015l-0.058,2.845l0.052-0.011c-0.442,0.204-0.824,0.513-1.116,0.895l0.093-0.147l-1.574-0.603l1.172,1.239l0.026-0.042c-0.19,0.371-0.306,0.788-0.324,1.229l-0.003-0.016l-2.623,1.209c-0.199-0.604-0.767-1.041-1.438-1.041c-0.837,0-1.516,0.678-1.516,1.516c0,0.064,0.005,0.128,0.013,0.191l-0.783-0.076C7.063,18.524,7.017,17.994,7.017,17.452zM16.369,26.805c-4.429,0-8.138-3.078-9.106-7.211l0.691-0.353c0.146,0.686,0.753,1.2,1.482,1.2c0.837,0,1.515-0.679,1.515-1.516c0-0.105-0.011-0.207-0.031-0.307l2.858,0.03c0.045,0.095,0.096,0.187,0.15,0.276l-3.45,5.277l0.227-0.195l4.529-3.92c0.336,0.153,0.705,0.248,1.094,0.266l-0.019,0.004l1.226,2.627c-0.655,0.166-1.142,0.76-1.142,1.468c0,0.837,0.678,1.515,1.516,1.515c0.076,0,0.151-0.007,0.225-0.018l0.004,0.688C17.566,26.746,16.975,26.805,16.369,26.805zM18.662,26.521l-0.389-0.6c0.661-0.164,1.152-0.759,1.152-1.47c0-0.837-0.68-1.516-1.516-1.516c-0.066,0-0.13,0.005-0.193,0.014v-2.86l-0.025,0.004c0.409-0.185,0.77-0.459,1.055-0.798l1.516,0.659l-1.104-1.304c0.158-0.335,0.256-0.704,0.278-1.095l2.552-1.164c0.19,0.618,0.766,1.068,1.447,1.068c0.838,0,1.516-0.679,1.516-1.516c0-0.069-0.006-0.137-0.016-0.204l0.65,0.12c0.089,0.517,0.136,1.049,0.136,1.591C25.722,21.826,22.719,25.499,18.662,26.521z");
    }
});

