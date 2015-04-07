'use strict';

/* Directives */

var profileDirectives = angular.module('profileDirectives', []);

profileDirectives.directive('postsBox', ['$rootScope', function(rootScope) {
  return {
    restrict: 'A',
    transclude: true,
    replace: true,
    templateUrl:'partials/posts-box.html',
    scope: {
      posts: '=',
      username: '='
    },
    controller: 'PostsCtrl',
    link: function(scope, element, attrs, postCtrl) {
      var commentForm = element.find('.comment-form');
      var postForm = element.find('.post-form');

      scope.newPost = function() {
        postForm.addClass('show');
      };

      scope.cancelPost = function() {
        scope.title = '';
        scope.content = '';
        postForm.removeClass('show');
      };

      scope.savePost = function() {
        var post = {
          title: scope.title,
          content: scope.content,
          likes: [],
          comments: []
        };
        scope.posts.push(post);
        rootScope.$broadcast('postUpdated');
        scope.title = '';
        scope.content = '';
        postForm.removeClass('show');
      };

      scope.reply = function() {
        scope.name = scope.username;
        commentForm.addClass('show');
      };

      scope.cancelComment = function() {
        scope.name = '';
        scope.comment = '';
        commentForm.removeClass('show');
      };

      scope.saveComment = function() {
        var comment = {
          author: scope.name,
          message: scope.comment
        };
        scope.posts[scope.activePost].comments.push(comment);
        rootScope.$broadcast('postUpdated');
        scope.name = '';
        scope.comment = '';
        commentForm.removeClass('show');
      };
    }
  };
}]);