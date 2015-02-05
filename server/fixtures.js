if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });
  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });
  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
  for (var i=7;i<=50;i++) {
    Posts.insert({
      title: 'The Meteor Book'+i,
      url: 'http://themeteorbook.com'
    });
  }
}
