!function(closure) {
  var Vue = this.Vue || require('vue')
  var directive = closure()
  Vue.directive('togg', directive)
}(function() {

  function pool(stack) {
    stack = $(stack).closest('[togg-scope]')
    if (!stack.length) throw new Error('Missing scope')
    var identifier = stack.attr('togg-scope')
    stack = identifier ? $('[togg-scope="' + identifier + '"]') : stack
    return stack.add(stack.find('*'))
  }

  function has(element, attr) {
    return element.attr(attr) != null
  }

  var value = {'true': '', 'false': null}
  var force = {'true': true, 'false': false}

  return {
    bind: function bind(el) {
      var event = el.getAttribute('togg-event')
      if (!event) throw new Error('Missing [togg-event] value')

      var state = el.getAttribute('togg-state')
      var useForce = null == state ? state : force.hasOwnProperty(state)

      $(el).on(event, function() {
        pool(this).each(function() {
          var it = $(this)
          var classes = it.attr('togg-class')
          var prop = it.attr('togg-prop')
          var attr = it.attr('togg-attr')
          var method = it.attr('togg-method')
          var trigger = it.attr('togg-trigger')

          if (classes) useForce ? it.toggleClass(classes, force[state]) : it.toggleClass(classes)
          if (attr) it.attr(attr, value[useForce ? force[state] : !has(it, attr)])
          if (prop) it.prop(prop, useForce ? force[state] : !it.prop(prop))
          if (method) it[method]()
          if (trigger) it.trigger(trigger)
        })
      })
    }
  }

});
