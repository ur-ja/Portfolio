/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination:
          'https://drive.google.com/file/d/14XVp5VQQe5IdmU7YjSN8OcY6pU3QEIev/view?usp=sharing',
        permanent: false,
      },
    ];
  },
};
