# w-design-web

Website repository for **<a href="https://github.com/we-mak/w-design">w-design</a>**

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Docker

Docker automatically builds on Docker hub https://hub.docker.com/r/viiiprock/w-design-web

Deploy with nginx-proxy by docker-compose

```yml
version: "3.8"

services:
  w-design:
    image: viiiprock/w-design-web:latest
    container_name: w-design
    expose:
      - 3000
    environment:
      - VIRTUAL_HOST=design.we-mak.com
    restart: unless-stopped
```
