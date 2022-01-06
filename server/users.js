function Users() {
  this.list = [];
  this.addUser = () => {
    let exits = false;
    while (!exits) {
      const tempUserName = "USER" + this.generateRandom(12);
      if (!this.list.includes(tempUserName)) {
        exits = true;
        this.list.push(tempUserName);
        return tempUserName;
      }
    }
  };
  this.deleteUser = (user) => {
    this.list = this.list.filter((e) => e.name !== user);
  };
  this.generateRandom = (n) => {
    const dic = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let res = "";
    for (let i = 0; i < n; i++) {
      res += dic[Math.floor(Math.random() * dic.length)];
    }
    return res;
  };
}

module.exports = Users;
