'use strict';

module.exports = function(Article) {
  Article.observe('before save', function beforeSave(context, next) {
    if (context.isNewInstance) {
      context.instance.published = false;
    }

    next();
  });
};
