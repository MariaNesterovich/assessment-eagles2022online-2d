const React = require('react');
const Layout = require('./Layout');

module.exports = function HomePage({ userInfo }) {
//  console.log(userInfo.isadmin);
  return (
    <Layout userInfo={userInfo}>
    <>
    Чтобы отправить свой щебет, пожалуйтса, зарегистрируйтесь.
    </>
    </Layout>
  );
};
