var actions = {};
var storage = {};

function makeActionTrigger(categoryKey, actionKey) {
  return function(...options) {

    actions[categoryKey][actionKey].forEach(function(action) {
      storage[categoryKey] = action(storage[categoryKey], ...options);
    });
  };
}

/**
 *
 * @param {Object} category - Container for action handlers
 * @param {Array} actionList - Global list of actions
 * @returns {Function} - handler for iterations
 */
function makeListenerForCategory(category, actionList) {
  return function(action) {
    if (!category[action]) {
      return;
    }

    actionList[action] = actionList[action] || [];
    actionList[action].push(category[action]);
  };
}

function addStorage(category) {
  storage[category] = {};
}

export let Actions = {

  /**
   * Create new action
   */
  createActions: function(options) {

    actions[options.category] = actions[options.category] || {};
    addStorage(options.category);

    options.actions.forEach(function(action) {
      actions[options.category][action] = actions[options.category][action] || [];
    });

    return options.actions.reduce(function(mod, action) {
      mod[action] = makeActionTrigger(options.category, action);
      return mod;
    }, {});
  },

  initializeStorage: function(category, initializer) {
    storage[category] = initializer();
  },

  /**
   * Regiser a listener for actions
   */
  listenActions: function(options) {
    if (typeof options === 'function') {
      options = options();
    }

    for (var key in options) {
      if( options.hasOwnProperty(key) ) {
        actions[key] = actions[key] || {};

        Object.keys(options[key]).forEach(makeListenerForCategory(options[key], actions[key]));
      }
    }
  }

};
