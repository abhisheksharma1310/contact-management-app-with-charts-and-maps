
# Contact Management App with Charts and Maps

This is a contact management app with charts and maps built using ReactJS, TypeScript, TailwindCSS, React Router v6, and React Query.

The app allows you to manage contacts, view charts showing COVID-19 cases fluctuations, and visualize COVID-19 data on a world map.

## Features

- Add, view, edit, and delete contacts
- View a list of all added contacts
- Line graph showing COVID-19 cases over time
- Interactive map with markers for COVID-19 data by country

## Getting Started

### Prerequisites

- Node.js (at least version 12)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abhisheksharma1310/contact-management-app-with-charts-and-maps
   cd contact-management-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the development server:

   ```bash
   npm start
   ```

   This will start the app in development mode and open it in your default web browser.

2. Navigate to the Contacts page to manage your contacts.

3. Navigate to the Dashboard page to view the line graph and the map.

### APIs Used

- World-wide data of cases: https://disease.sh/v3/covid-19/all
- Country Specific data of cases: https://disease.sh/v3/covid-19/countries
- Graph data for cases with date: https://disease.sh/v3/covid-19/historical/all?lastdays=all

### Deployment

This project is deployed on netlify.

### Technologies Used

- ReactJS
- TypeScript
- TailwindCSS
- React Router v6
- React Query
- Chart.js
- React Leaflet

### Folder Structure

- `src/components`: Contains individual components.
- `src/pages`: Contains main pages of the app.
- `src/features`: Contains Redux slices.
- `src/api.ts`: Handles API calls using React Query.
- `src/store.ts`: Redux store setup.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests for bug fixes, features, or improvements.

