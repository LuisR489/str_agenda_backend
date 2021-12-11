module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ffc37d2af1f520c76cb522c4ed5898a8'),
  },
});
