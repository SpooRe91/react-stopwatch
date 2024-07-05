# Simple Stopwatch Made with React

![Stopwatch](https://github.com/SpooRe91/react-stopwatch/assets/85784810/198bdf86-70b9-4b96-8300-5cae1696f2dd)

View the live app here: [Simple Stopwatch App](https://simple-stopwatch.vercel.app/)

## Overview

This is a simple stopwatch application built using React. It allows users to start, stop, and clear the timer.

### Features

- **Start:** Begin the stopwatch by pressing the "Start" button.
- **Stop:** Pause the timer with the "Stop" button. Once stopped, the "Clear" button appears.
- **Clear:** Reset the stopwatch to zero by pressing the "Clear" button.

## Implementation Details

The stopwatch utilizes React state and effects to handle time tracking and button functionalities. Below is a summary of the components and logic used:

### Components

- **StopwatchComponent:** Main component managing the stopwatch functionality.
  
### State Management

- **elapsedTime:** Tracks the total time elapsed in milliseconds.
- **isActive:** Boolean state to control whether the stopwatch is running or paused.
- **messageVisible:** Controls the visibility of certain messages or buttons based on user actions.
- **intervalRef:** Ref to hold the interval ID for the timer.
- **statusRef:** Ref to track the current status of the stopwatch (e.g., "Stop").

### Usage

- **Responsive Design:** Adjusts layout and button sizes based on screen size using custom hooks (`useHandleScreenResize`).
- **Button Interactions:** Handles button clicks to start, stop, and clear the stopwatch.

## How to Use

1. Click the "Start" button to begin the stopwatch.
2. Press "Stop" to pause the timer and reveal the "Clear" button.
3. Click "Clear" to reset the stopwatch to zero.
