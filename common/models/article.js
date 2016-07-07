'use strict';

var loopback = require('loopback');

module.exports = function(Article) {
  Article.observe('before save', function beforeSave(context, next) {
    var accessToken = loopback.getCurrentContext().get('accessToken');

    if (!accessToken && context.isNewInstance) {
      context.instance.published = false;
    }

    next();
  });
};
