const db = [{ id: 1, name: 'Siesta'}]; // in memory data store
const resolvers = {
  Query: {
    getMe: () => {
      return db[0];
    },
    getUserById: (parents, args) => {
      const { id } = args
      if (id <= 0 || id > db.length) throw new Error('User Not found.');
      else {
        const i = id - 1;
        return db[i];
      }
    },
    getUserByName: (parents, args) => {
      const { name } = args
      if (!name) throw new Error('User Not found.');
      else {
        for (let i in db) {
          if (db[i]['name'] === name) {
            const id = db[i]['id'];
            const j = id - 1
            return db[j];
          }
        }
      }
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      const count = db.length;
      const id =  count + 1;
      let { name } = args;
      if (!name) name = 'no name';
      const newUser = { id, name };
      db.push(newUser);
      return newUser;
    },
  }
};
export default resolvers;
