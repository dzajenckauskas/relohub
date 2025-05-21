# Relohub - International Moving Services

## Overview
Relohub is an international moving services platform that offers door-to-door shipping via sea, road, and air. The project was initially developed by another front-end developer, and I am currently rebuilding it to improve scalability, maintainability, and performance. This includes implementing TypeScript, refactoring the codebase, and adding new features.

Website: [www.relohub.co.uk](https://www.relohub.co.uk)

## Tech Stack
- **Frontend:** React, Next.js, TypeScript
- **Backend:** Strapi CMS
- **Database:** PostgreSQL
- **Deployment:** VPS (Linux-based)

## Features
- **International moving service booking** with customizable shipping options.
- **Real-time price estimation** based on user input.
- **Multi-step booking form** for a smooth user experience.
- **Admin panel powered by Strapi CMS** for managing services and content.
- **SEO-friendly architecture** with Next.js for server-side rendering.
- **Optimized performance and scalability** through refactored architecture.

## Setup & Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (>= 16.x)
- npm or yarn
- PostgreSQL

### Installation Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/dzajenckauskas/relohub.git
   cd relohub
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add necessary environment variables (e.g., database connection, Strapi API keys).
4. Start the development server:
   ```sh
   npm run dev  # or yarn dev
   ```
5. Access the app at `http://localhost:5555`.

## Deployment
- The project is deployed on a VPS with Strapi running as a headless CMS.
- Uses **PM2** for process management and **Nginx** for reverse proxy.
- Automated deployment via **GitHub Actions**.

## Future Improvements
- Implement **user authentication** for better security.
- Add **multi-language support** for a global audience.
- Improve **UI/UX** with refined design components.

## Contributing
Feel free to fork the repo, submit issues, or contribute to its development.

## License
This project is licensed under the MIT License.

---
For any inquiries or collaborations, reach out via [GitHub](https://github.com/dzajenckauskas/).

