interface MainContentProps {
  activeTab: string;
}

export default function MainContent({ activeTab }: MainContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <section>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              Introduce
            </h2>
            {/* Overview content will go here */}
            <div className="bg-neutral-100 dark:bg-neutral-700 p-6 rounded-lg min-h-96">
              <p className="text-neutral-600 dark:text-neutral-400">
                Overview section content
              </p>
            </div>
          </section>
        );

      case "tokens":
        return (
          <section>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              Design Tokens
            </h2>
            {/* Design Tokens content will go here */}
            <div className="bg-neutral-100 dark:bg-neutral-700 p-6 rounded-lg min-h-96">
              <p className="text-neutral-600 dark:text-neutral-400">
                Design Tokens section content
              </p>
            </div>
          </section>
        );

      case "component-button":
        return (
          <section>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              Button Component
            </h2>
            {/* Button component documentation will go here */}
            <div className="bg-neutral-100 dark:bg-neutral-700 p-6 rounded-lg min-h-96">
              <p className="text-neutral-600 dark:text-neutral-400">
                Button component documentation
              </p>
            </div>
          </section>
        );

      case "component-input":
        return (
          <section>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              Input Component
            </h2>
            {/* Input component documentation will go here */}
            <div className="bg-neutral-100 dark:bg-neutral-700 p-6 rounded-lg min-h-96">
              <p className="text-neutral-600 dark:text-neutral-400">
                Input component documentation
              </p>
            </div>
          </section>
        );

      case "component-card":
        return (
          <section>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              Card Component
            </h2>
            {/* Card component documentation will go here */}
            <div className="bg-neutral-100 dark:bg-neutral-700 p-6 rounded-lg min-h-96">
              <p className="text-neutral-600 dark:text-neutral-400">
                Card component documentation
              </p>
            </div>
          </section>
        );

      default:
        return (
          <section>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              Welcome
            </h2>
            <div className="bg-neutral-100 dark:bg-neutral-700 p-6 rounded-lg min-h-96">
              <p className="text-neutral-600 dark:text-neutral-400">
                Select a section from the sidebar
              </p>
            </div>
          </section>
        );
    }
  };

  return (
    <main className="flex-1 p-4 md:p-6 overflow-y-auto">{renderContent()}</main>
  );
}
