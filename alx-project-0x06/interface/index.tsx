export interface PageRouteProps {
  pageRoute: string;
}

export interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor: 'red' | 'blue' | 'orange' | 'green';
  action: () => void;
  buttonSize?: string; // ✅ Optional string for Tailwind classes like 'text-sm' or 'text-lg'
}

export interface LayoutProps {
  children: React.ReactNode;
}