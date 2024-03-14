# ClarityUI Dashboard

ClarityUI Dashboard is a comprehensive dashboard that allows business owners to get insights into their sales, traffic sources, and customer interactions, empowering them to make informed decisions.


## Table of Contents

- [ClarityUI Dashboard](#clarityui-dashboard)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Usage](#usage)
  - [Structure](#structure)
    - [Project Structure](#project-structure)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Introduction

The ClarityUI Dashboard provides a high-level overview of critical business metrics for e-commerce store managers. It's designed to present complex data in a simplified manner, giving a snapshot of sales trends, customer behavior, and operational performance.

## Features

The dashboard offers a range of features including:

- Real-time sales and revenue tracking.
- Customer and order analytics.
- Insightful reports on traffic sources.
- Detailed transaction history with status indicators.
- Performance comparison over customizable date ranges.

## Technologies

The project is built with:

- React 17: A JavaScript library for building user interfaces.
- TypeScript 4: An open-source language which builds on JavaScript by adding static type definitions.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- Chart.js: Simple yet flexible JavaScript charting for designers & developers.
- Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine (for potential backend support).

## Setup

To get the dashboard up and running on your local machine:

```bash
$ cd path/to/project-directory
$ npm install
$ npm start
```

## Usage

To use the dashboard, navigate through the sidebar to view different statistics. Here's how to interact with the project:

```bash
# To build the project for production
$ npm run build
```

## Structure

The project structure is organized as follows:

- `src/`: Contains all the source files.
- `public/`: Houses static assets such as images and the `index.html` file.

### Project Structure

The main components and files of the project are organized within the `src` directory as follows:

- `app

`: Includes the main application component.

- [`App.tsx`](./src/app/App.tsx): Orchestrates the rendering of the dashboard.
- `assets/`: Contains static files, like images and reusable components.
  - [`DashboardIcon.tsx`](./src/assets/DashboardIcon.tsx): Reusable icon for the dashboard.
- `components/`: Comprises the modular components of the dashboard.
  - `Header/`: Contains the header component of the application.
    - [`Header.tsx`](./src/components/Header/Header.tsx): Displays the top navigation and branding.
  - `MainContent/`: Encapsulates the core content of the dashboard.
    - [`MainContent.tsx`](./src/components/MainContent/MainContent.tsx): Serves as a container for the dashboard content.
    - [`RecentCustomers.tsx`](./src/components/MainContent/RecentCustomers.tsx): Shows a list of recent customers.
    - [`SalesReport.tsx`](./src/components/MainContent/SalesReport.tsx): Visualizes sales data over time.
    - [`TrafficSources.tsx`](./src/components/MainContent/TrafficSources.tsx): Breaks down the traffic sources.
    - [`Transactions.tsx`](./src/components/MainContent/Transactions.tsx): Lists the latest transactions.
  - [`Sidebar.tsx`](./src/components/Sidebar.tsx): Navigational sidebar with links to different sections of the dashboard.
  - [`TopStats.tsx`](./src/components/TopStats.tsx): Displays the key metrics at a glance at the top of the dashboard.
- `page/`: Manages the pages of the application.
  - [`Home.tsx`](./src/page/Home.tsx): The landing page of the dashboard.
- [`index.css`](./src/index.css): Global styling file.
- [`index.tsx`](./src/index.tsx): Entry point for the React application.
- [`react-app-env.d.ts`](./src/react-app-env.d.ts): TypeScript type declarations for the project.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repository and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Amar Gupta - [@amargupta](https://amargupta.tech) - theamargupta.tech@gmail.com

Project Link: [https://github.com/theamargupta/interviewAssignmentDashbaord](https://github.com/theamargupta/interviewAssignmentDashbaord)
