import RevealObserver from '@/components/RevealObserver';

// Re-mounts on every navigation, so each page gets a soft fade-in
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-fade">
      {children}
      <RevealObserver />
    </div>
  );
}
