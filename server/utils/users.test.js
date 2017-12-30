const expect = require('expect');

const {Users} = require('./users.js');

describe('Users', () => {

  var users;
  beforeEach (() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '12',
      name: 'MAsa',
      room: 'Koti'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var id = '1';
    var removed = users.removeUser(id);
    expect(users.users.length).toBe(2);
    expect(removed.id).toBe(id);
  });

  it('should not remove a user', () => {
    var id = '44';
    var removed = users.removeUser(id);
    expect(users.users.length).toBe(3);
    expect(removed).toNotExist();
  });

  it('should find a user', () => {
    var id = '1';
    var user = users.getUser(id);
    expect(user.id).toEqual(id);
  });

  it('should not find user', () => {
    var id = '44';
    var user = users.getUser(id);
    expect(user).toNotExist();
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');
    expect(userList).toEqual(['Jen']);
  });
});
