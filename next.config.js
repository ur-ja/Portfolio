/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/resume.pdf',
        permanent: true,
      },
    ];
  },
};
