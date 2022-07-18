const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <form className="parentDiv" action="/auth/signup" method="post" >
        <div>
          <label htmlFor="exampleInputEmail1" className="form-label">Имя</label>
          <input name="name"type="name" className="form-control" id="userName" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
          <input name="password" type="name" className="form-control" id="userPass" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">e-mail</label>
          <input name="email" type="name" className="form-control" id="userEmail" />
        </div>

        <button type="submit" className="btn btn-primary">Зарегестрироваться</button>
      </form>
    </Layout>
  );
};
