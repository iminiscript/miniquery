(function(global) {
  // MiniQuery function
  function MiniQuery(selector) {
      if (!(this instanceof MiniQuery)) {
          return new MiniQuery(selector);
      }

      this.elements = document.querySelectorAll(selector);
  }

  // Add class method
  MiniQuery.prototype.AC = function(className) {
      this.elements.forEach(function(element) {
          element.classList.add(className);
      });
      return this;
  };

  // Remove class method
  MiniQuery.prototype.RC = function(className) {
      this.elements.forEach(function(element) {
          element.classList.remove(className);
      });
      return this;
  };

  // Toggle class method
  MiniQuery.prototype.TC = function(className) {
      this.elements.forEach(function(element) {
          element.classList.toggle(className);
      });
      return this;
  };

  // Click event method
  MiniQuery.prototype.CLICK = function(handler) {
      this.elements.forEach(function(element) {
          element.addEventListener('click', handler);
      });
      return this;
  };

  // Expose MiniQuery to the global object
  global.MQ = MiniQuery;

})(window);
