 var revealingModulePattern = (function(name) {
    var privateVar = 'przemy';
    var privateMethod = function() {
        return privateVar;

    };
    var publicMethod = function() {
        return privateMethod();
    };
    return {
        publicMethod: publicMethod
    }
})();
console.log(revealingModulePattern.publicMethod());