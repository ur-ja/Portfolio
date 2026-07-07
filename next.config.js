/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination:
          'https://drive.google.com/file/d/1hDp2_S6QPZ6hr-HJfR7pDflmKKpAlyHi/view?usp=sharing',
        permanent: false,
      },
    ];
  },
};
