import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StopwatchComponent } from './Stopwatch/StopWatchComponent';
import App from '../App';


describe('Rendering the App component', () => {
    test('App component rendered', () => {
        render(<App />);
    });
})

describe('Rendering the "StopwatchComponent"', () => {
    test('StopwatchComponent rendered', () => {
        render(<StopwatchComponent />);
    });
})

describe('Checking for elements', () => {
    test('it should render div with class "container"', () => {
        render(<StopwatchComponent />);
        expect(screen.getByTestId('container')).toBeInTheDocument();
    });

    test('it should render div with class "buttons-container"', () => {
        render(<StopwatchComponent />);
        expect(screen.getByTestId('buttons-container')).toBeInTheDocument();
    });

    test('it should render button with class "start"', () => {
        render(<StopwatchComponent />);
        expect(screen.getByTestId('start')).toBeInTheDocument();
    });

    test('it should render button with class "stop"', () => {
        render(<StopwatchComponent />);
        expect(screen.getByTestId('stop')).toBeInTheDocument();
    });

    test('it should render button with class "clear"', () => {
        render(<StopwatchComponent />);

        fireEvent.click(screen.getByTestId('start'));
        fireEvent.click(screen.getByTestId('stop'));

        expect(screen.getByTestId('clear')).toBeInTheDocument();
    });
});

describe('TIMER MESSAGES', () => {

    test('the "TIMER RUNNING" text should appear after clicking "START"', () => {
        render(<StopwatchComponent />);

        fireEvent.click(screen.getByTestId('start'));
        expect(screen.getByText("TIMER RUNNING")).toBeInTheDocument();
    });

    test('the "TIMER STOPPED" text should appear after clicking "STOP"', () => {
        render(<StopwatchComponent />);

        fireEvent.click(screen.getByTestId('start'));
        setTimeout(() => {
            fireEvent.click(screen.getByTestId('stop'));
            expect(screen.getByText("TIMER STOPPED")).toBeInTheDocument();
        }, 600);

    });

    test('the "TIMER CLEARED" text should appear after clicking "CLEAR"', () => {
        render(<StopwatchComponent />);

        fireEvent.click(screen.getByTestId('start'));
        fireEvent.click(screen.getByTestId('stop'));
        fireEvent.click(screen.getByTestId('clear'));

        expect(screen.getByText("TIMER CLEARED")).toBeInTheDocument();
    });
});

describe('BUTTON SIGNS', () => {

    test('the "Restart" button should appear after clicking "STOP"', () => {
        render(<StopwatchComponent />);
        fireEvent.click(screen.getByTestId('start'));
        fireEvent.click(screen.getByTestId('stop'));
        expect(screen.getByText("Restart")).toBeInTheDocument();
    });

    test('the "Clear" button should appear after clicking "STOP"', () => {
        render(<StopwatchComponent />);
        fireEvent.click(screen.getByTestId('start'));
        fireEvent.click(screen.getByTestId('stop'));
        expect(screen.getByText("Clear")).toBeInTheDocument();
    });

    test('the "Clear" button should disappear after clicking "CLEAR"', () => {
        render(<StopwatchComponent />);
        fireEvent.click(screen.getByTestId('start'));
        fireEvent.click(screen.getByTestId('stop'));
        const clear = screen.getByTestId("clear");

        fireEvent.click(clear);
        expect(clear).not.toBeInTheDocument()
    });
})