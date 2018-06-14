// один коллбек читает сам по себе, чтоб читал следуйщий надо вызывать функицю гнекст

app.get('/api/logout', (req, res, next) => {
  req.logout();
  res.send(req.user);
  next();
}, (reg, res, next) => console.log('asdasd')); //вызывается только потому что была вызвана функиця next

//
app.get(
'/auth/google/callback',
  passport.authenticate('google'), //этот сам по себе вызывает некст
  (req, res, next) => {
    res.redirect('/surveys');
    next();
  },
  () => console.log('next');
);
