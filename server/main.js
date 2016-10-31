import { Meteor } from 'meteor/meteor';
import {Links} from '../imports/collections/links';
import {WebApp} from 'meteor/webapp';
import ConnectRoute from 'connect-route';
Meteor.startup(() => {

  Meteor.publish('links', function ()
  {
    return Links.find({});
  });
  
});

//executed whenever a user visits with a route like
// localhost:3000/abcd
function onRoute(req, res, next)
{
  const link = Links.findOne({token: req.params.token});

  if(link)
  {
    //inc = increment
    Links.update(link, {$inc: { clicks: 1 }});

    //status code of the response
    res.writeHead(307, {'location': link.url});
    res.end();
  }
  else{
    next();

  }
}

const middleware = ConnectRoute(
  function(router){
    router.get('/:token', onRoute);
});
//req short request
WebApp.connectHandlers.use(middleware);
