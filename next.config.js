/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination:
          'https://drive.google.com/file/d/1AOOfUZ7EciaQXMW7PPachIxuOVk0cvar/view?usp=sharing',
        permanent: false,
      },
    ];
  },
};
