# CoRider Chat Application

A React Native chat application built with Expo, featuring real-time messaging, trip information, and a clean user interface.

## Features

- Real-time chat messaging
- Trip information display
- Message pagination
- File attachment support
- Camera integration
- Responsive UI for both Android and iOS

## Video


https://github.com/user-attachments/assets/9dc85936-3477-4d22-970c-612549597802

For Better Quality:
- https://youtube.com/shorts/5XRm5PNv65g?feature=share

## Tech Stack

- React Native
- Expo
- React Navigation
- Redux Toolkit (for state management)
- Expo Vector Icons
- TypeScript

## Project Structure
```
src/
├── api/
│   ├── config.ts
│   ├── apiClient.ts
│   └── endpoints.ts
├── components/
│   └── ui/
├── features/
│   └── chat/
│       ├── components/
│       │   ├── ChatHeader.tsx
│       │   ├── ChatInput.tsx
│       │   ├── MessageList.tsx
│       │   └── TripInfo.tsx
│       ├── hooks/
│       ├── services/
│       └── screens/
├── constants/
├── hooks/
└── utils/
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (optional)

### Installation

1. Clone the repository
```
git clone https://github.com/SnehPatel21/ChatApp.git
```
```
cd ChatApp
```
2. Install dependencies
```
npm install
```
or
```
yarn install
```
3. Start the development server
```
npx expo start
```

### Running on Devices

- iOS: Press 'i' in the terminal or run on iOS simulator
- Android: Press 'a' in the terminal or run on Android emulator
- Web: Press 'w' in the terminal (Expo Web)

## API Integration
The application uses the following API endpoint for chat functionality:
```
https://qa.corider.in/assignment/chat?page=0
```

## Contributing

1. Fork the repository
2. Create your feature branch (```git checkout -b feature/AmazingFeature```)
3. Commit your changes (```git commit -m 'Add some AmazingFeature'```)
4. Push to the branch (```git push origin feature/AmazingFeature```)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details

## Contact
- Your Name - @SnehPatel21
- Project Link: https://github.com/SnehPatel21/ChatApp

## Acknowledgments

- Expo Documentation
- React Native Documentation
- CoRider Team
