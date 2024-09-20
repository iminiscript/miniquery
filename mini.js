(function(window) {
    // MiniQuery function
    function MiniQuery(selector) {
        if (!(this instanceof MiniQuery)) {
            return new MiniQuery(selector);
        }

        if (typeof selector === 'string') {
            this.elements = document.querySelectorAll(selector);
        } else if (selector instanceof Element) {
            this.elements = [selector];
        } else if (selector instanceof NodeList) {
            this.elements = selector;
        } else {
            this.elements = [];
        }
    }

    // Add class method
    MiniQuery.prototype.ac = function(className) {
        this.elements.forEach(function(element) {
            element.classList.add(className);
        });
        return this;
    };

    // Remove class method
    MiniQuery.prototype.rc = function(className) {
        this.elements.forEach(function(element) {
            element.classList.remove(className);
        });
        return this;
    };

    // Toggle class method
    MiniQuery.prototype.tc = function(className) {
        this.elements.forEach(function(element) {
            element.classList.toggle(className);
        });
        return this;
    };

    // Click event method
    MiniQuery.prototype.click = function(handler) {
        this.elements.forEach(function(element) {
            element.addEventListener('click', function(event) {
                handler.call(element, event);
            });
        });
        return this;
    };

    // Loop method (forEach equivalent)
    MiniQuery.prototype.each = function(callback) {
        this.elements.forEach(function(element, index) {
            callback.call(element, index, element);
        });
        return this;
    };

    // Loop method (for loop equivalent)
    MiniQuery.prototype.loop = function(callback) {
        for (let i = 0; i < this.elements.length; i++) {
            callback.call(this.elements[i], i, this.elements[i]);
        }
        return this;
    };

    // Expose MiniQuery to the global object
    window.MQ = MiniQuery;

})(window);
