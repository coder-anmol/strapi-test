module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '46be73a777bba541bafb7c1cc65bec59'),
  },
});
