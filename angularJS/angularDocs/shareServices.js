var myApp = angular.module('shareServices',[]);
myApp.factory('messages',[messages]);

function messages(){
    var messages={};
    messages.list =[];
    messages.add = function(message){
        messages.list.push({id:messages.list.length, text:message});
    }
    return messages;
}

myApp.controller('ListCtrl',['messages',ListCtrl]);

function ListCtrl (messages){
    var self = this;

    self.messages = messages.list;
}

myApp.controller('PostCtrl',['messages',PostCtrl]);

function PostCtrl(messages){
    var self= this;

    self.newMessage = 'Hello World';
    self.addMessage = function(message){
        messages.add(message);
        self.newMessage = '';

    };

}