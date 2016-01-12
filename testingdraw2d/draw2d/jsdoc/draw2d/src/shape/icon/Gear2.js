/*****************************************
 *   Library is under GPL License (GPL)
 *   Copyright (c) 2012 Andreas Herz
 ****************************************/
/**
 * @class draw2d.shape.icon.Gear2

 * See the example:
 *
 *     @example preview small frame
 *     
 *     var icon =  new draw2d.shape.icon.Gear2();
 *     
 *     canvas.add(icon,50,10);
 *     
 * @inheritable
 * @author Andreas Herz
 * @extends draw2d.shape.icon.Icon
 */
draw2d.shape.icon.Gear2 = draw2d.shape.icon.Icon.extend({
    NAME : "draw2d.shape.icon.Gear2",

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
        return this.canvas.paper.path("M17.047,27.945c-0.34,0.032-0.688,0.054-1.046,0.054l0,0c-0.32,0-0.631-0.017-0.934-0.043l0,0l-2.626,3.375l-0.646-0.183c-0.758-0.213-1.494-0.48-2.202-0.8l0,0L8.979,30.07l0.158-4.24c-0.558-0.39-1.079-0.825-1.561-1.302l0,0L3.424,25.42l-0.379-0.557c-0.445-0.654-0.824-1.339-1.16-2.032l0,0l-0.292-0.605l2.819-3.12c-0.176-0.661-0.293-1.343-0.353-2.038l0,0l-3.736-1.975l0.068-0.669c0.08-0.801,0.235-1.567,0.42-2.303l0,0l0.165-0.653l4.167-0.577c0.297-0.627,0.647-1.221,1.041-1.78l0,0l-1.59-3.914l0.48-0.47c0.564-0.55,1.168-1.048,1.798-1.503l0,0l0.546-0.394l3.597,2.259c0.606-0.279,1.24-0.509,1.897-0.685l0,0l1.304-4.046l0.672-0.051c0.362-0.027,0.751-0.058,1.174-0.058l0,0c0.422,0,0.81,0.031,1.172,0.058l0,0l0.672,0.051l1.318,4.088c0.632,0.176,1.244,0.401,1.831,0.674l0,0l3.647-2.291l0.548,0.394c0.63,0.455,1.235,0.954,1.798,1.501l0,0l0.482,0.47l-1.639,4.031c0.357,0.519,0.679,1.068,0.954,1.646l0,0l4.297,0.595l0.167,0.653c0.188,0.735,0.342,1.501,0.42,2.303l0,0l0.068,0.669l-3.866,2.044c-0.058,0.634-0.161,1.258-0.315,1.866l0,0l2.913,3.218l-0.293,0.608c-0.335,0.695-0.712,1.382-1.159,2.034l0,0l-0.379,0.555l-4.255-0.912c-0.451,0.451-0.939,0.866-1.461,1.241l0,0l0.162,4.323l-0.615,0.278c-0.709,0.319-1.444,0.587-2.202,0.8l0,0l-0.648,0.183L17.047,27.945L17.047,27.945zM20.424,29.028c0.227-0.076,0.45-0.157,0.671-0.244l0,0l-0.152-4.083l0.479-0.307c0.717-0.466,1.37-1.024,1.95-1.658l0,0l0.386-0.423l4.026,0.862c0.121-0.202,0.238-0.409,0.351-0.62l0,0l-2.754-3.045l0.171-0.544c0.243-0.783,0.381-1.623,0.422-2.5l0,0l0.025-0.571l3.658-1.933c-0.038-0.234-0.082-0.467-0.132-0.7l0,0l-4.07-0.563l-0.219-0.527c-0.327-0.787-0.76-1.524-1.277-2.204l0,0l-0.342-0.453l1.548-3.808c-0.179-0.157-0.363-0.31-0.552-0.458l0,0l-3.455,2.169L20.649,7.15c-0.754-0.397-1.569-0.698-2.429-0.894l0,0l-0.556-0.127l-1.248-3.87c-0.121-0.006-0.239-0.009-0.354-0.009l0,0c-0.117,0-0.235,0.003-0.357,0.009l0,0l-1.239,3.845l-0.564,0.12c-0.875,0.188-1.709,0.494-2.486,0.896l0,0l-0.508,0.264L7.509,5.249c-0.188,0.148-0.372,0.301-0.55,0.458l0,0l1.507,3.708L8.112,9.869c-0.552,0.709-1.011,1.485-1.355,2.319l0,0l-0.218,0.529l-3.939,0.545c-0.05,0.233-0.094,0.466-0.131,0.7l0,0l3.531,1.867l0.022,0.575c0.037,0.929,0.192,1.82,0.459,2.653l0,0l0.175,0.548l-2.667,2.95c0.112,0.212,0.229,0.419,0.351,0.621l0,0l3.916-0.843l0.39,0.423c0.601,0.657,1.287,1.229,2.043,1.703l0,0l0.488,0.305l-0.149,4.02c0.221,0.087,0.445,0.168,0.672,0.244l0,0l2.479-3.188l0.566,0.07c0.427,0.054,0.843,0.089,1.257,0.089l0,0c0.445,0,0.894-0.039,1.353-0.104l0,0l0.571-0.08L20.424,29.028L20.424,29.028zM21.554,20.75l0.546,0.839l-3.463,2.253l-1.229-1.891l0,0c-0.447,0.109-0.917,0.173-1.406,0.173l0,0c-3.384,0-6.126-2.743-6.126-6.123l0,0c0-3.384,2.742-6.126,6.126-6.126l0,0c3.38,0,6.123,2.742,6.123,6.126l0,0c0,1.389-0.467,2.676-1.25,3.704l0,0L21.554,20.75M19.224,21.073l0.108-0.069l-0.987-1.519l0.572-0.572c0.748-0.75,1.207-1.773,1.207-2.912l0,0c-0.004-2.278-1.848-4.122-4.123-4.126l0,0c-2.28,0.004-4.122,1.846-4.126,4.126l0,0c0.004,2.275,1.848,4.119,4.126,4.123l0,0c0.509,0,0.999-0.104,1.473-0.286l0,0l0.756-0.29L19.224,21.073L19.224,21.073z");
    }
});

