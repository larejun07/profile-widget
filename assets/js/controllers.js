'use strict';

/* Controllers */

var profileControllers = angular.module('profileControllers', []);

profileControllers.controller('ProfileCtrl', ['$scope', 'User',
  function(scope, User) {
    scope.user = User.get(function() {
      scope.computeStats();
    });

    scope.computeStats = function() {
      scope.postsCount = scope.user.posts.length;
      scope.likesCount = 0;
      scope.commentsCount = 0;
      angular.forEach(scope.user.posts, function(post, index) {
        scope.likesCount += post.likes.length;
        scope.commentsCount += post.comments.length;
      });
    };

    scope.$on('postUpdated', function(event) {
      scope.computeStats();
    });
  }
]);

profileControllers.controller('PostsCtrl', ['$rootScope', '$scope', 
  function(rootScope, scope) {
    scope.activePost = 0;

    scope.isActive = function (index) {
      if (index == scope.activePost) {
        return 'show';
      } else if (index < scope.activePost) {
        return 'prev';
      } else if (index > scope.activePost) {
        return 'next';
      };;
      return;
    };

    scope.prevPost = function() {
      if (scope.activePost > 0) {
        scope.activePost--;
      }
    };

    scope.nextPost = function() {
      if (scope.activePost < scope.posts.length - 1) {
        scope.activePost++;
      };
    };

    scope.getComments = function() {
      if (angular.isDefined(scope.posts)) {
        return scope.posts[scope.activePost].comments;
      }
      return;
    };

    scope.getLikesCount = function() {
      if (angular.isDefined(scope.posts)) {
        return scope.posts[scope.activePost].likes.length;
      } else {
        return 0;
      }
    };

    scope.getCommentsCount = function() {
      if (angular.isDefined(scope.posts)) {
        return scope.posts[scope.activePost].comments.length;
      } else {
        return 0;
      }
    };

    scope.like = function() {
      var key = scope.posts[scope.activePost].likes.indexOf(scope.username);
      if (key === -1) {
        scope.posts[scope.activePost].likes.push(scope.username);
      } else {
        scope.posts[scope.activePost].likes.splice(key, 1);
      }
      rootScope.$broadcast('postUpdated');
    };

    scope.userLiked = function() {
      if (angular.isDefined(scope.posts) && scope.posts[scope.activePost].likes.indexOf(scope.username) > -1) {
        return 'liked';
      }
      return;
    };
  }
]);
