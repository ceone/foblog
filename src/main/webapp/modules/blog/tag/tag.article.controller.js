app.controller("TagArticleController", function ($location, $routeParams, $rootScope, $scope, TagService) {
    setScreenAvailHeight();
    $scope.loadingPath=loading_path;
    $scope.loaded = false;
    $scope.getTagArticles = function (name) {
        TagService.getArtilces(name).then(function (data) {
            if(data.resultData!=null){
                $scope.tagArticles = data.resultData;
            }else{
                $scope.noSuchTag = true;
            }
            $scope.loaded = true;
        });
    }
    $scope.selectTag = function (name) {
        // 需要仔细考虑是否用这个，因为这样每次都会重新发送两次请求
        $location.path("/blog/tag/" + name);
    }

    $scope.init = function () {
        if ($routeParams.tagName != undefined) {
            $scope.tagName = $routeParams.tagName;
            $scope.getTagArticles($scope.tagName);
        }
    }

    $scope.init();
});