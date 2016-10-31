import {Mongo} from 'meteor/mongo';
import validUrl from 'valid-url';
import {check, Match} from 'meteor/check';

Meteor.methods(
    {
        //valid javascript key
        'links.insert': function (url) {
            //check and match
            //validUrl.isUri(url);
            //Match.Where - custom validation
            check(url, Match.Where(url => validUrl.isUri(url)));
            
            //check fails, it jumps out of the function
            const token = Math.random().toString(36).slice(-5);
            
            //Links.insert({url:url, token: token, clicks: 0}); is the same as below
            Links.insert({url, token, clicks: 0});

            console.log('attempting to save', token);
        }
    }
);

export const Links = new Mongo.Collection('links');